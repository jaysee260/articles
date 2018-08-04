import React from 'react';
import moment from 'moment';

/**
 * @param {Object} article
 * @param {Number} index
 * @description
 * Individual Article component put together
 * using Bulma's Box component.
 */
const Article = ({ article, index }) =>
  <div
    className="box"
    id={index+1}
    style={{margin: "15px 0"}}
  >

    <article className="media">

      <div className="media-left">
        <h1>{index+1}</h1>
      </div>

      <div className="media-content">
        <div className="content">

          <h1
            className="title is-size-6-mobile is-marginless"
            style={{padding: "10px 0", fontSize: "1.10rem"}}
          >
            {article.title}
          </h1>

          <p>
            <strong>Published on: </strong>
            {moment(article.published).format("MMMM Do YYYY")}
          </p>
        
        </div>
      </div>
    
    </article>

  </div>

export default Article;