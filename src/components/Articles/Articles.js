import React, { useEffect, useRef, useState } from "react";
import "./Articles.css";

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const list = useRef(0);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const promises = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5`
    );
    const jsonData = await promises.json();

    setArticles(jsonData);
  };

  const showHandler = (event) => {
    const displayValue = list.current.style.display;
    let show_data = "block";
    let tagData = "HIDE";

    if (displayValue === show_data) {
      show_data = "none";
      tagData = "SHOW";
    }
    list.current.style.display = show_data;
    event.target.innerHTML = tagData;
  };

  return (
    <React.Fragment>
      <h1 onClick={showHandler}>SHOW</h1>
      <div ref={list} className="article-body">
        {articles.length > 0 &&
          articles.map((article) => {
            return (
              <div key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Articles;
