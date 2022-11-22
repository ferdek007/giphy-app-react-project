import { Link } from "react-router-dom";

const GifCard = ({ gif, gif: { id, url } }) => {
  return (
    <div>
      <Link to={`/gifs/${id}`}>
        <img src={gif.images.fixed_height?.url} alt={gif?.title} />
      </Link>
    </div>
  );
};

export default GifCard;
