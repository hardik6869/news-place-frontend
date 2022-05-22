import axios from "axios";
import { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";
import NewsNavbar from "./NewsNavbar";

function Sports() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

  const cryptoNews = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/everything?q=sports&apiKey=7f2e1d68bf334485a501a9476a596eec`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cryptoNews();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  return (
    <>
      <div className="container">
        <NewsNavbar />
      </div>

      <div className="p-10 grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {newsArray.map((data, index) => {
          return <NewsComponent news={data} key={index} />;
        })}
      </div>
    </>
  );
}

export default Sports;
