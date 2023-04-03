import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../Pagination/CustomPagination";
import RandomElement from "../Random/Random"

const Trending = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])


  const fetchTrending = async () =>{
    const{ data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    )
    console.log(data);
    setContent(data.results)
  }
  useEffect(() =>{
    fetchTrending()
    // eslint-disable-next-line
  }, [page])
  
    return (
      <div>
        <span className="pageTitle">Trending</span>
          <div className="random">
            <RandomElement />
          </div>
          <span className="pageTitle">More movies</span>
          <div className="trending">
          {content.length > 0 ?
          content.map((c) => 
          <SingleContent class="Content" key={c.id} movie={c} />
          ) : <div>No results found.</div>
          }
          </div>
          <CustomPagination setPage={setPage} />
      </div>
    )
}
export default Trending;