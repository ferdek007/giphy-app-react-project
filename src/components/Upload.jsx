import { useState } from "react";
import { uploadGif } from "../api/api";
import GifDetails from "./GifDetails";

import "./Upload.css";

const Upload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [sourceUrl, setsourceUrl] = useState("");
  const [response, setResponse] = useState({});

  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setMessage("");

    if (imageUrl) {
      setDisable(true);
      setImageUrl(imageUrl);
      setTags(tags);
      uploadGif(imageUrl, tags, sourceUrl).then((res) => {
        setResponse(res.data);
        console.log("response: ", res);
        setDisable(false);
        if (res?.data)
          setMessage(<h2 style={{ color: "#0f0" }}>Successfully uploaded!</h2>);
        else setMessage(<h2 style={{ color: "#f00" }}>Failed to upload!</h2>);
      });
      console.log("image url:", imageUrl);
      console.log("tags: ", tags);
      console.log("source url: ", sourceUrl);
    }
  };

  return (
    <div className="upload-container">
      <div className="form-container">
        <form onSubmit={handleUpload}>
          <h1>Upload GIF</h1>
          <div className="form-input">
            <label>Image URL (required)</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onBlur={handleFocus}
              placeholder="Paste image URL here..."
              required={true}
              focused={focused.toString()}
              id="url-input"
            />
            <span id="errorMessage">Required valid URL</span>
          </div>
          <div className="form-input">
            <label>Image Tags (optional)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              onBlur={handleFocus}
              placeholder="Comma-separated tags for GIF..."
              focused={focused.toString()}
              id="tags-input"
            />
          </div>
          <div className="form-input">
            <label>Image Source URL (optional)</label>
            <input
              type="text"
              value={sourceUrl}
              onChange={(e) => setsourceUrl(e.target.value)}
              onBlur={handleFocus}
              placeholder="Paste URL of the image source here..."
              focused={focused.toString()}
              id="source-input"
            />
          </div>
          <button type="submit" id="upload-button" disabled={disable}>
            Upload
          </button>
        </form>
      </div>

      {!disable ? "" : <h2 className="uploading">Uploading...</h2>}
      <div className="message-box">{message}</div>
      {!disable ? <GifDetails uploadId={response?.id}></GifDetails> : ""}
    </div>
  );
};

export default Upload;
