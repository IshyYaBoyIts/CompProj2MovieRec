import React from "react";
import { Badge } from "@mui/material";
import { img_300, unavailable } from "../Config/config";
import ContentModal from "../ContentModal/ContentModal";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Globalstate";
import "./SingleContent.css";

const SingleContent = (props) => {
  const { id, poster_path, title, release_date, media_type, vote_average } = props.movie;
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

  const movie = {
    id,
    poster_path,
    title,
    release_date,
    media_type,
    vote_average,
  };

  const watchlistDisabled = watchlist.find((item) => item.id === id);
  const watchedDisabled = watched.find((item) => item.id === id);

  const poster = poster_path ? `${img_300}/${poster_path}` : unavailable;

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
        className="badge"
      />
      <img className="poster" src={poster} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "tv series" : "movie"}
        <span className="subTitle">{release_date}</span>
      </span>

      <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}
        >
          Add to Watchlist
        </button>

        <button
          className="btn"
          disabled={watchedDisabled}
          onClick={() => addMovieToWatched(movie)}
        >
          Add to Watched
        </button>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
