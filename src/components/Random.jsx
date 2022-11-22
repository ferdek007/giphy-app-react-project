import { useState } from "react";
import { fetchRandom } from "../api/api";
import GifDetails from "./GifDetails";
import Loading from "./Loading";

import "./Random.css";

const Random = () => {
  const [randomGif, setRandomGif] = useState();
  const [randomTag, setRandomTag] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    fetchRandom(randomTag).then((data) => setRandomGif(data.data));
    // setLoading(false);
  };

  return (
    <div className="random-container">
      <h2>
        If no tag is specified, the returned GIF will be completely random!
      </h2>
      <div className="random-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={randomTag}
            onChange={(e) => setRandomTag(e.target.value)}
            placeholder="Specify a random GIF tag..."
            id="random-input"
          />
          <button type="submit" id="random-button">
            Generate
          </button>
        </form>
      </div>
      {randomGif ? (
        <GifDetails uploadId={randomGif?.id}></GifDetails>
      ) : loading ? (
        <Loading />
      ) : (
        ""
      )}
    </div>
  );
};

export default Random;
