import React, { useState, useEffect } from "react"
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from "../Config/config";
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import "./Random.css";
import Carousel from "../Carousel/Carousel";
import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';

const style = {
    position: 'relative',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: '#282c34',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
    
};

export default function TransitionsModal({media_type, id }) {
    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const [mtype, setMType] = useState();
    const [rID, setrID] = useState();

    const fetchData = async () => {
        
        // media_type={mOrtv}id={randomID}
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mtype}/${rID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setContent(data);

      // console.log(data);
        console.log("data" + mtype)
        console.log("data" + rID)
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mtype}/${rID}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setVideo(data.results[0]?.key);
        console.log("vid" + mtype)
        console.log("vid" + rID)
    };

    const handleClick = () => {
        const randomID = Math.floor(Math.random() * 100);
        const flip = Math.random();
        let mOrtv = "tv";
        if (flip > 0.5){
            mOrtv = "movie";
        } else {
            mOrtv = "tv";
        }
        setMType(mOrtv);
        setrID(randomID);
        fetchData();
        fetchVideo();
    };

    return (
        <>
    <div>
        <Container sx={style} className='RandomBox'>
            <span className="pageTitle">Random Quick Pick</span>
        {content && (
            <div className="ContentModal">
                <img
                src={
                content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                }
                alt={content.name || content.title}
                className="ContentModal__portrait"
            />
            <img
                src={
                content.backdrop_path
                    ? `${img_500}/${content.backdrop_path}`
                    : unavailableLandscape
                }
                alt={content.name || content.title}
                className="ContentModal__landscape"
            />
                <div className="ContentModal__about" >
                <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                    content.first_air_date ||
                    content.release_date ||
                    "-----"
                    ).substring(0, 4)}
                    )
                </span>
                {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                )}

                <span className="ContentModal__description">
                    {content.overview}
                </span>

                <div>
                    <Carousel id={rID} media_type={mtype} /> 
                </div>  
                <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                >
                    Watch the Trailer
                </Button> 
                </div>
            </div>
        )}
        <span>
        <Button
            fullWidth
            value='Submit'
            variant="contained"
            startIcon={<ShuffleOnIcon />}
            color="secondary"
            target="__blank"
            onClick={handleClick}
            width="fit"
        >
            New Random Movie 
        </Button>
        </span>
        </Container>
        </div>
        </>
    );
}