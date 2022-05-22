import React, { useState } from "react";

const NewsDescription = ({ description }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <p className="text-gray-800">
        {readMore ? (
          <>
            <span> {description} </span>
            <button
              onClick={() => setReadMore(false)}
              className="text-primary text-sm"
            >
              Read Less
            </button>
          </>
        ) : (
          <>
            <span> {description.slice(0, 180)} </span>
            <button
              onClick={() => setReadMore(true)}
              className="text-primary text-sm"
            >
              Read More
            </button>
          </>
        )}
      </p>
    </>
  );
};

export default NewsDescription;
