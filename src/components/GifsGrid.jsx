import GifCard from "./GifCard";
import Loading from "./Loading";

const GifsGrid = ({ gifs }) => {
  // gifs = {};
  if (!gifs.length) return <Loading />;
  return gifs.map((item) => {
    return (
      <div key={item.id} className="gif">
        {item.id && <GifCard gif={item} />}
      </div>
    );
  });
};

export default GifsGrid;
