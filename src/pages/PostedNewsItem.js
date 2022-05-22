import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const PostedNewsItem = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const getNews = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/newsitems/getnewsitemsbyuserid", {
        userid: user._id,
      });
      const filteredData = res.data.filter((item) => {
        return item.postedBy.userId === user._id;
      });
      setLoading(false);
      setNewsItems(filteredData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  const deleteNews = async (newsid) => {
    setLoading(true);
    try {
      await axios.post("/api/newsitems/deletenewsitem", {
        newsid,
      });
      toast.success("News Deleted Successfully");
      getNews();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <section className="form col-md-8 card p-4 shadow ">
          <h1 className="text-xl text-gray-600 font-semibold">
            Posted News Item
          </h1>
          {loading && <Spinner />}
          {newsItems.length > 0 ? (
            <div className="p-10">
              <table className="w-full border-2 text-gray-500 p-10">
                <thead className="w-full">
                  <tr className="w-full">
                    <th className="border-2 text-gray-500 p-2"> Id </th>
                    <th className="border-2 text-gray-500 p-2"> Title </th>
                    <th className="border-2 text-gray-500 p-2"> Posted On </th>
                    <th className="border-2 text-gray-500 p-2"> Actions </th>
                  </tr>
                </thead>
                <tbody>
                  {newsItems
                    .map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="border-2 text-gray-500 p-2">
                            {item._id}
                          </td>
                          <td className="border-2 text-gray-500 p-2">
                            {item.title}
                          </td>
                          <td className="border-2 text-gray-500 p-2 whitespace-nowrap">
                            {item.createdAt.slice(0, 10)}
                          </td>
                          <td className="border-2 text-gray-500 p-2 items-center">
                            <div className="flex justify-end space-x-5">
                              <button
                                className="px-2 py-1 bg-red-700 text-sm text-white"
                                onClick={() => deleteNews(item._id)}
                              >
                                <RiDeleteBin5Line />
                              </button>
                              <button
                                className="px-2 py-1 bg-green-500 text-sm text-white"
                                onClick={() =>
                                  navigate(`/editnews/${item._id}`)
                                }
                              >
                                <FaEdit />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                    .reverse()}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center my-5">
              <button
                className="px-4 btn btn-info"
                onClick={() => navigate("/addnews")}
              >
                Add News
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default PostedNewsItem;
