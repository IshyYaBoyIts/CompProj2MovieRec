import React from "react"
import axios from "axios"
import { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import Genres from "../Genres/Genres";
import useGenre from "../Hooks/useGenre";
// import { useEffect, useState } from "react";

const Series = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);
    // console.log(selectedGenres);
    
    const fetchMovies = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() =>{
        window.scroll(0, 0);
        fetchMovies()
        // eslint-disable-next-line
        }, [genreforURL, page])
        return (
            <div>
            <span className="pageTitle">Discover TV Series</span>
            <Genres
              type="tv"
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              genres={genres}
              setGenres={setGenres}
              setPage={setPage}
            />
            <div className="trending">
          {content.length > 0 ?
          content.map((c) => 
          <SingleContent class="Content" key={c.id} movie={c} />
          ) : <div>No results found.</div>
          }
          </div>
            {numOfPages > 1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
          </div>
        )
    }
export default Series;