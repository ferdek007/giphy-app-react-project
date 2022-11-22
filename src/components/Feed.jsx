import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchTrending, fetchSearched } from "../api/api";
import SideBar from "./SideBar";
import GifsGrid from "./GifsGrid";

import "./Feed.css";

const Feed = () => {
  let { category } = useParams();
  // console.log(category, "link");
  if (!category) category = "trending";

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.data));
    if (selectedCategory === "trending")
      fetchTrending().then((data) => setGifs(data.data));
    else fetchSearched(selectedCategory).then((data) => setGifs(data.data));
  }, [selectedCategory]);

  console.log("categories: ", categories);
  // console.log(selectedCategory);
  console.log(`${selectedCategory} gifs: `, gifs);

  return (
    <div className="feed-container">
      <div className="side-section">
        <div className="sidebar-container">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
        <footer>
          <div className="copyright">
            Created by Bartosz Łukicz <br id="br" />
            &copy; 2022 Powered by Giphy
          </div>
        </footer>
      </div>
      <div className="gifs-section">
        <h2 className="category">
          {selectedCategory} <span style={{ color: "#F31503" }}>GIFs</span>
        </h2>
        <div className="gifs-container">
          <GifsGrid gifs={gifs} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
