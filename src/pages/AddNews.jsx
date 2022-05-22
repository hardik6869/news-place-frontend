import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
const AddNews = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const newsSubmit = async () => {
    try {
      const payload = {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        postedBy: {
          userId: user._id,
          name: user.name,
          email: user.email,
        },
      };
      await axios.post("/api/newsitems/addnews", payload);
      setLoading(false);

      toast.success("News Added Successfully");
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <div className="container-fluid mt-4">
        <section className="form col-md-8 card p-4 shadow ">
          {loading && <Spinner />}
          <h3 className="text-muted pb-3">AddNews</h3>

          <div className="form-group p-1">
            <input
              type="text"
              className="form-control p-3 "
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              required
            />
          </div>
          <div className="form-group p-1">
            <textarea
              type="text"
              className="form-control p-3"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your news description"
              required
            />
          </div>

          <div
            className="border-gray border-2 rounded px-2 mx-1 mb-4"
            style={{ minHeight: "250px" }}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              style={{ minHeight: "300px", maxHeight: "max-content" }}
            />
          </div>
          <div className="">
            <div className="row float-right">
              <input
                type="reset"
                className=" col-md-3 btn btn-danger mx-4"
                value="Reset"
              />
              <input
                type="submit"
                className="btn btn-success col-md-3 mx-5"
                value="Submit"
                onClick={() => {
                  newsSubmit();
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddNews;
