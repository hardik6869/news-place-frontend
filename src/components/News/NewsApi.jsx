import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsNavbar from "./NewsNavbar";
import NewsDescription from "./publisher/NewsDescription";

function NewsApi() {
  const [newsItems, setNewsItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const getNews = async () => {
    try {
      const res = await axios.get("/api/newsitems/getallnewsitems");
      setNewsItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);


    const filteredNews = newsItems.filter((news) => {
      return news.title.toLowerCase().includes(searchText.toLowerCase());
    });
    
    
  return (
    <>
      <div className="container">
        <NewsNavbar />
      </div>
      <div className="px-20 flex justify-center sm:px-5 mt-5">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search"
          className="border-2 shadow-lg h-10 w-full border-black col-md-3"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          {newsItems.length > 0 && (
            <div className="grid grid-cols-3 gap-5 sm:mx-5 mx-20 my-5">
              {filteredNews.map((value) => {
                  return (
                    <div className="shadow-lg p-3" key={value._id}>
                      <div style={{ width: "100%", minHeight: "80%" }}>
                        <h1 className="text-blue-600 text-large font-semibold text-justify">
                          {value.title}
                        </h1>
                        <NewsDescription description={value.description} />
                      </div>

                      <div className="justify-flex flex-col items-end text-center ">
                        <div className="flex justify-content-between text-primary font-normal">
                          <span className="text-gra-500 text-sm">
                            By: {value.postedBy.name}
                          </span>
                          <span className="text-gra-500 text-sm">
                            On: {value.createdAt.slice(0, 10)}
                          </span>
                        </div>
                        <button
                          className="text-orange-500 text-sm font-semibold mb-5"
                          onClick={() => navigate(`/newsartical/${value._id}`)}
                        >
                          Read Full Artical
                        </button>
                      </div>
                    </div>
                  );
                })
                .reverse()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsApi;
