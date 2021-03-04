import React, { useEffect, useState, useRef, useContext } from "react";
import countContext from "../../context/countContext";

const Article = (props) => {
  console.log("==================");

  const [article, setArticle] = useState({});
  const focus = useRef(0);
  let count = useContext(countContext);

  // const data = React.useMemo(async () => {
  //   const promises = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${props.id}`
  //   );
  //   const jsonData = await promises.json();

  //   setArticle(jsonData);
  // }, [props.id]);

  useEffect(() => {
    data(props.id);
  }, [props.id]);

  const data = async (id) => {
    const promises = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const jsonData = await promises.json();

    setArticle(jsonData);
  };

  //   useEffect(() => {
  //     focus.current.focus();
  //   }, [1]);

  useEffect(() => {
    setArticle({});
  }, []);

  return (
    <div>
      {/* <h3>{article.title}</h3> */}
      <textarea
        ref={focus}
        value={article.body}
        rows="3"
        cols="90"
        onChange={(event) =>
          setArticle({
            title: "",
            body: event.target.value,
          })
        }
      ></textarea>
      <p>{article.body}</p>
      <p>Total count: {count}</p>
    </div>
  );
};

export default Article;
