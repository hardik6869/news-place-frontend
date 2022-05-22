import React from "react";

const NewsComponent = ({ news }) => {
  return (
    <>
      <div className="card shadow" style={{ width: "rem" }}>
        <img
          className="card-img-top"
          style={{ height: "200px" }}
          src={news.urlToImage}
          alt="Sunset in the mountains"
        />
        <div className="card-body">
          <div className="font-bold text-xl mb-2">{news.title}</div>
          <p className="text-gray-700 text-base">{news.description}</p>
        </div>
        <div className="px-6 pb-2">
          <span className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p> {news.source.name}</p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {news.publishedAt.slice(0, 10)}
          </span>
        </div>
        <a href={news.url} className="text-primary text-center mb-2">
          Read Full Article
        </a>
      </div>
    </>
  );
};

export default NewsComponent;
