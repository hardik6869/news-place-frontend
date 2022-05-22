import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
const Chatbot = () => {
  let [showChat, setShowChat] = useState(true);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  return (
    <>
      <div
        style={{ display: showChat ? "none" : "" }}
        className="fixed right-0 bottom-0 translate-y-1/2 mb-12 mr-4"
      >
        <ChatBot
          headerTitle="NewsBot"
          speechSynthesis={{ enable: true, lang: "en" }}
          botAvatar="https://github.com/hardik6869/Practical_Image-/blob/main/news-report.png?raw=true"
          botDelay={1000}
          customDelay={1200}
          steps={[
            {
              id: "1",
              message:
                "Welcome to All In One News place. What is your Good Name!",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, Good to see you!",
              trigger: "4",
            },

            {
              id: "4",
              message: "How are you {previousValue}?",
              trigger: "5",
            },
            {
              id: "5",
              user: true,
              trigger: "6",
            },
            {
              id: "6",
              message: "Ok, Nice to meet you!",
              trigger: "7",
            },
            {
              id: "7",
              message: "Which news do you want to know about?",
              trigger: "8",
            },
            {
              id: "8",
              options: [
                { value: 1, label: "Education", trigger: "10" },
                { value: 2, label: "Technology", trigger: "11" },
                { value: 3, label: "Crypto", trigger: "12" },
                { value: 4, label: "Sports", trigger: "13" },
                { value: 5, label: "Entertainment", trigger: "14" },
                { value: 6, label: "Financial", trigger: "15" },
                { value: 7, label: "Politics", trigger: "16" },
              ],
            },
            {
              id: "10",
              message:
                "education, discipline that is concerned with methods of teaching and learning in schools or school-like environments as opposed to various nonformal and informal means of socialization (e.g., rural development projects and education through parent-child relationships).",
              trigger: "qtype",
            },
            {
              id: "11",
              message:
                "Technology can be most broadly defined as the entities, both material and immaterial, created by the application of mental and physical effort in order to achieve some value. In this usage, technology refers to tools and machines that may be used to solve real-world problems.",
              trigger: "qtype",
            },
            {
              id: "12",
              message:
                "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. ",
              trigger: "qtype",
            },
            {
              id: "13",
              message:
                "Sport is commonly defined as an athletic activity that involves a degree of competition, such as netball or basketball. Some games and many kinds of racing are called sports. A professional at a sport is called an athlete. Many people play sports with their friends.",
              trigger: "qtype",
            },
            {
              id: "14",
              message:
                "Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight. It can be an idea or a task, but is more likely to be one of the activities or events that have developed over thousands of years specifically for the purpose of keeping an audience's attention.",
              trigger: "qtype",
            },
            {
              id: "15",
              message:
                "Finance encompasses banking, leverage or debt, credit, capital markets, money, investments, and the creation and oversight of financial systems. Basic financial concepts are based on microeconomic and macroeconomic theories",
              trigger: "qtype",
            },
            {
              id: "16",
              message:
                "Politics (from Greek: Πολιτικά, politiká, 'affairs of the cities') is the set of activities that are associated with making decisions in groups, or other forms of power relations among individuals, such as the distribution of resources or status.",
              trigger: "qtype",
            },
            {
              id: "qtype",
              message: "Do you know about other option!",
              trigger: "submit",
            },
            {
              id: "submit",
              options: [
                { value: "y", label: "Yes", trigger: "no-submit" },
                { value: "n", label: "No", trigger: "end-message" },
              ],
            },
            {
              id: "no-submit",
              options: [
                { value: 1, label: "Education", trigger: "10" },
                { value: 2, label: "Technology", trigger: "11" },
                { value: 3, label: "Crypto", trigger: "12" },
                { value: 4, label: "Sports", trigger: "13" },
                { value: 5, label: "Entertainment", trigger: "14" },
                { value: 6, label: "Financial", trigger: "15" },
                { value: 7, label: "Politics", trigger: "16" },
              ],
            },
            {
              id: "end-message",
              message: "Good Bye!",
              end: true,
            },
          ]}
        />
      </div>
      <div>
        {!showChat ? (
          <button
            className="btn-danger rounded-circle h-10 w-10 fixed right-0 bottom-0 translate-y-1/2 mb-2 mr-4"
            onClick={() => startChat()}
          >
            <i className="fa-brands fa-rocketchat"></i>
          </button>
        ) : (
          <button
            className="btn-primary rounded-circle h-10 w-10 fixed right-0 bottom-0 translate-y-1/2 mb-2 mr-4"
            onClick={() => hideChat()}
          >
            <i className="fa-solid fa-comment-dots"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Chatbot;
