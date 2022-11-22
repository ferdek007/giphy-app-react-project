// icon
import { BiAlignJustify } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loading from "./Loading";

import "./SideBar.css";

const SideBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  if (!categories.length) return <Loading />;
  return (
    <div className="categories-container">
      <h3>
        <BiAlignJustify />
        <b>Categories</b>
      </h3>
      <Link to={`/categories/trending`} key="trending">
        <button
          className="category-btn"
          onClick={() => {
            setSelectedCategory("trending");
          }}
          style={{
            background: "trending" === selectedCategory && "#FC1503",
            color: "white",
          }}
          key="trending"
        >
          <span
            style={{
              opacity: "trending" === selectedCategory ? "1" : "0.8",
            }}
          >
            {"trending"}
          </span>
        </button>
      </Link>
      {categories.map((category) => (
        <Link
          to={`/categories/${category.name_encoded}`}
          key={category.name_encoded}
        >
          <button
            className="category-btn"
            onClick={() => {
              setSelectedCategory(category.name_encoded);
            }}
            style={{
              background:
                category.name_encoded === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={category.name_encoded}
          >
            <span
              style={{
                opacity:
                  category.name_encoded === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
