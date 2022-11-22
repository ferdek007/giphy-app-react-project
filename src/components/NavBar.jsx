import { useState } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
// icons
import { AiOutlineFileGif } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { HiTrendingUp } from "react-icons/hi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { ImCloudUpload } from "react-icons/im";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      // setSearchTerm("");
    }
  };

  return (
    <nav className="nav">
      <div className="nav-section">
        <Link to="/" className="site-title">
          <AiOutlineFileGif className="site-icon" />
          Better GIPHY
        </Link>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              value={searchTerm.replace("-", " ")}
              onChange={(e) => setSearchTerm(e.target.value.replace(" ", "-"))}
              placeholder="Search..."
              id="search-input"
            />
            <button type="submit" id="search-button">
              <BiSearchAlt className="search-icon" />
            </button>
          </form>
        </div>
      </div>
      <ul>
        <CustomLink to="/categories/trending">
          <HiTrendingUp className="nav-icon" />
          Trending
        </CustomLink>
        <CustomLink to="/random">
          <GiPerspectiveDiceSixFacesRandom className="nav-icon" />
          Random
        </CustomLink>
        <CustomLink to="/upload">
          <ImCloudUpload className="nav-icon" />
          Upload
        </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
