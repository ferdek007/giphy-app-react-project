import GifCard from "./GifCard";

const GifsGrid = ({ gifs }) => {
  // gifs = {};
  // console.log(gifs);
  return gifs.map((item) => {
    return (
      <div key={item.id} className="gif">
        {item.id && <GifCard gif={item} />}
      </div>
    );
  });
};

export default GifsGrid;
