import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import "./Trending.css";

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
    
        setContent(data.results);
      };
    
    


    return (
        <div className="appScreen">
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
            <h1>Trending</h1>
        </div>
    )
}
export default Trending;
