import React, { useEffect, useState } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";
import BackButton from "../../BackButton";

function NewsArtical() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const getNews = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/newsitems/newsartical", {
        newsid: params.newsid,
      });
      setTitle(res.data.title);
      setDescription(res.data.description);
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(res.data.content))
        )
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="mt-4">
        <section className="form col-md-8 card p-4 shadow ">
          {loading && <Spinner />}

          <div className=" p-1">
            <BackButton url="/" />
            <h1 className="p-3 text-justify" style={{ fontSize: "2rem" }}>
              {title}
            </h1>
            <p className="p-3 text-justify" style={{ fontSize: "1.3rem" }}>
              {description}{" "}
            </p>
          </div>
          <div className=" p-3 mb-4 " style={{ minHeight: "250px" }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              className="text-justify"
              style={{
                minHeight: "300px",
                maxHeight: "max-content",
                TextAlign: "justify",
              }}
              wrapperClassName="demo-wrapper"
              toolbarHidden
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default NewsArtical;
