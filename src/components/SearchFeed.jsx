import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearched } from "../api/api";
import GifsGrid from "./GifsGrid";

import "./SearchFeed.css";

const SearchFeed = () => {
  const [gifs, setGifs] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchSearched(searchTerm).then((data) => setGifs(data.data));
  }, [searchTerm]);

  console.log(`'${searchTerm}' search gifs: `, gifs);

  return (
    <div className="searchfeed-container">
      <h2 className="results">
        Search results for
        <span style={{ color: "#F31503" }}>
          {" " + searchTerm.replace("-", " ")}
        </span>
      </h2>
      <div className="searched-container">
        <GifsGrid gifs={gifs} />
      </div>
    </div>
  );
};

export default SearchFeed;
