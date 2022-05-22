import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container text-center justify-center"
        style={{ marginTop: "18%" }}
      >
        <h1 className="text-danger" style={{ fontSize: "x-large" }}>
          404 Error Page
        </h1>
        <h3 style={{ fontSize: "large" }}> Sorry, This Page does not exist </h3>
        <button
          className="text-blue-600"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa-solid fa-arrow-left "> </i> Back to Home
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
