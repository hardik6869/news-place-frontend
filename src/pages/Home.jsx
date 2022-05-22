import React from "react";
import Chatbot from "../components/ChatBot/Chatbot";
import NewsApi from "../components/News/NewsApi";

function Home() {
  return (
    <div className="container-fluid">
      <NewsApi />
      <Chatbot />
    </div>
  );
}

export default Home;
