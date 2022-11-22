import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../api/api";
import Loading from "./Loading";

const GifDetails = () => {
  const [gifDetail, setGifDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchDetails(`${id}`).then((data) => setGifDetail(data.data));
  }, [id]);

  if (!gifDetail && id) return <Loading />;
  else if (!gifDetail && !id) return "";

  console.log("selected gif object: ", gifDetail);

  return (
    <div className="gif-detail-container">
      <img src={gifDetail.images?.downsized_large.url} alt={gifDetail?.title} />
      <div className="details">
        <h2>
          {"GIF Title: "}
          {gifDetail?.title ? (
            <span style={{ color: "#00FF00" }}>{gifDetail?.title}</span>
          ) : (
            <span style={{ color: "#FF0000" }}>No data</span>
          )}
        </h2>
        <h2>
          {"Embed URL: "}
          <a href={gifDetail?.embed_url} target="_blank" rel="noreferrer">
            {gifDetail?.embed_url ? (
              gifDetail?.embed_url
            ) : (
              <span style={{ color: "#FF0000" }}>No data</span>
            )}
          </a>
        </h2>
        <h2>
          {"GIF URL: "}
          <a href={gifDetail?.url} target="_blank" rel="noreferrer">
            {gifDetail?.url ? (
              gifDetail?.url
            ) : (
              <span style={{ color: "#FF0000" }}>No data</span>
            )}
          </a>
        </h2>
        <h2>
          {"Author Username: "}
          {gifDetail.user?.username ? (
            <span style={{ color: "#00FF00" }}>{gifDetail.user?.username}</span>
          ) : (
            <span style={{ color: "#FF0000" }}>No data</span>
          )}
        </h2>
        <h2>
          {"Author Profile: "}
          <a
            href={gifDetail.user?.profile_url}
            target="_blank"
            rel="noreferrer"
          >
            {gifDetail.user?.profile_url ? (
              gifDetail.user?.profile_url
            ) : (
              <span style={{ color: "#FF0000" }}>No data</span>
            )}
          </a>
        </h2>
        <h2>
          {"Uploaded: "}
          {gifDetail?.import_datetime ? (
            <span style={{ color: "#00FF00" }}>
              {gifDetail?.import_datetime}
            </span>
          ) : (
            <span style={{ color: "#FF0000" }}>No data</span>
          )}
        </h2>
        <h2>
          {"Trending: "}
          {gifDetail?.trending_datetime ? (
            <span style={{ color: "#00FF00" }}>
              {gifDetail?.trending_datetime}
            </span>
          ) : (
            <span style={{ color: "#FF0000" }}>No data</span>
          )}
        </h2>
        <h2>
          {"Source URL: "}
          {gifDetail?.source_post_url ? (
            <a
              href={gifDetail?.source_post_url}
              target="_blank"
              rel="noreferrer"
            >
              {gifDetail?.source_post_url}
            </a>
          ) : (
            <span style={{ color: "#FF0000" }}>No data</span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default GifDetails;
