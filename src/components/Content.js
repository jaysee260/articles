import React, { Component } from 'react';
import Article from './Article';

/**
 * @description
 * Container for content
 * fetched from API
 */
class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      offset: 0,
      limit: 10,
      max: 100
    };

    this.fetchArticles = this.fetchArticles.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);
  }

  async componentWillMount() {
    // Fetch some articles and save them to state
    let { limit, offset } = this.state;
    let articles = await this.fetchArticles(limit, offset);
    this.setState({ articles });
  }

  async componentDidMount() {
    // Set up event listener so that when
    // user scrolls to bottom of page,
    // fetchMoreArticles() is called.

    // We set a reference to fetchMoreArticles on this
    // level because calling this.fetchMoreArticles()
    // inside yHandler() throws a reference error.
    const fetchMoreArticles = this.fetchMoreArticles;

    function yHandler() {
      // Reference to the outermost "container"
      let appContainer = document.getElementById("root");
      // Gets page content height
      let contentHeight = appContainer.offsetHeight - 0.3;
      // Gets the vertical scroll position
      let yOffset = window.pageYOffset;
      // Gets size of browser inner window
      let y = yOffset + window.innerHeight;

      // console.log(`${contentHeight} | ${y}`);

      // If user has reached the bottom
      // of the page, fetch more articles
      if (y >= contentHeight) {
        // console.log('::: load more content :::');
        fetchMoreArticles();
      }
        
    }

    // Trigger yHandler method when user scrolls
    window.onscroll = yHandler;
  }

  async fetchArticles(limit = 10, offset = 0) {
    // Set query string parameters
    let api = `https://www.stellarbiotechnologies.com/media/press-releases/json?limit=${limit}&offset=${offset}`;
    // Fetch articles
    let results = await fetch(api);
    // Extract json from results
    let json = await results.json();
    // Update offset value in state
    this.state.offset += this.state.limit;
    // Return array of articles
    return json.news;

  }

  async fetchMoreArticles() {

    let { limit, offset, max } = this.state;

    // If the max number of calls has not
    // been reached, fetch more content.
    // Otherwise, don't do anything else.
    // This ensures no more AJAX calls are
    // made if all articles have been fetched.
    if (offset < max) {
      let moreArticles = await this.fetchArticles(limit, offset);
      let { articles } = this.state;
      articles = articles.concat(moreArticles);
      this.setState({ articles });
      /** @todo
       * return moreArticles instead of saving to state.
       * once returned, append to content-container
       */
    }

  }

  renderArticles() {
    // Render an Article component for each
    // element in the articles array (in state)
    let articles = this.state.articles.map((article, index) => (
      <Article
        article={article}
        index={index}
        key={index+1}
      />
    ));

    return articles;

  }

  render() {
    return (
      <div id="content-container" className="container">
        {/* <ul id="articles">
          {this.renderArticles()}
        </ul> */}
        <div id="articles" className="content">
          {this.renderArticles()}
        </div>
      </div>
    );
  }


}

export default Content;