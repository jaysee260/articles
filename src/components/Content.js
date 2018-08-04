import React, { Component } from 'react';
import Article from './Article';

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
    let { limit, offset } = this.state;
    let articles = await this.fetchArticles(limit, offset);
    this.setState({ articles });
  }

  async componentDidMount() {
    const fetchMoreArticles = this.fetchMoreArticles;

    function yHandler() {
      // Reference to the outermost "container"
      let appContainer = document.getElementById("root");
      // Gets page content height
      let contentHeight = appContainer.offsetHeight - 1;
      // Gets the vertical scroll position
      let yOffset = window.pageYOffset;
      let y = yOffset + window.innerHeight;

      console.log(`${contentHeight} | ${y}`);
      // If user has scrolled to the bottom, do this...
      if (y >= contentHeight) {
        console.log('::: load more content :::');
        fetchMoreArticles();
      }
        
    }

    window.onscroll = yHandler;
  }

  async fetchArticles(limit = 10, offset = 0) {

    // if (offset < max) {
      let api = `https://www.stellarbiotechnologies.com/media/press-releases/json?limit=${limit}&offset=${offset}`;
      let result = await fetch(api);
      let json = await result.json();
      this.state.offset += 10;
      return json.news;
    // } else {
    //   return this.state.articles;
    // }
    
  }

  async fetchMoreArticles() {
    // calls this.fetchArticles with updated offset value.
    // either adds them to articles[] in state or appends
    // them to ul#articles as list items

    // must ensure no more AJAX calls are made to API
    // if all 100 articles have been fetched.
    let { limit, offset, max } = this.state;

    // Will only make up to 10 calls
    if (offset < max) {
      let moreArticles = await this.fetchArticles(limit, offset);
      let { articles } = this.state;
      articles = articles.concat(moreArticles);
      this.setState({ articles });
    }

  }

  renderArticles(items = 0) {
    items = !items ? this.state.articles : items;

    let articles = items.map((article, index) => (
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