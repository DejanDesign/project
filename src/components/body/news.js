import "../../style/news.scss";
import React from "react";

function News({ img }) {
  return (
    <div className="news">
      <img src={img} alt="News" />
    </div>
  );
}

export default News;
