import { Button, Tab, Tabs, TextField } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react"
 // eslint-disable-next-line
import { Pagination, createTheme, ThemeProvider } from '@mui/material'
import { green, purple } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import './Trending.css';

const Search = () => {

    const [type, setType] = useState(0)
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("")
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            main: purple[500],
        },
        secondary: {
        main: green[500],
        },
    },)

    const fetchSearch = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() =>{
        window.scroll(0, 0);
        fetchSearch()
        console.log(content)
        // eslint-disable-next-line
        }, [type, page])

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{display:"flex", margin:"15px 0"}}>
                <TextField
                style={{flex: 1}}
                className="searchBox"
                // fullWidth
                label="Search"
                variant="filled"
                onChange={(e) => setSearchText(e.target.value)}
                />
            <Button
                onClick={fetchSearch}
                variant="contained"
                style={{ marginLeft: 10 }}>
                <SearchIcon fontSize="large" />
            </Button>
            </div>
            <Tabs value={type} indicatorColor='primary' textColor='primary'
            onChange={(event, newValue) => {
                setType(newValue)
                setPage(1)
            }}
            style={{paddingBottom: 5}}
            >
                <Tab style={{width: "50%" }} label="Search Movies" />
                <Tab style={{width: "50%" }} label="Search TV Series" />
            </Tabs>
            </ThemeProvider>
            <div className="trending">
              {content &&
                content.map((c) => (
                  <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={type ? "tv" : "movie"}
                    vote_average={c.vote_average}
                  />
                ))}
                {searchText &&
                content.length ===0 &&
                (type ? <h2>No TV Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
            {numOfPages > 1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
          </div>
    )
}
export default Search;