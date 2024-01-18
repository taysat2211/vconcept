import React from "react";
import "./article.css";

function Article(props) {
    const item = props.item;
  return (
    <div className="article-card">
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">
            {item.description}
        </p>
        <a href="#" className="btn btn-primary mx-auto">
          {item.directContent}
        </a>
      </div>
    </div>
  );
}

export default Article;
