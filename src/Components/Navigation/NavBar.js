import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

// Added icons
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/Movies");
    else if (value === 2) navigate("/Series");
    else if (value === 3) navigate("/Search");

  }, [value, navigate]);



  return (
    <Box sx={{ pb: 7 }} ref={ref} >
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} style={{zIndex:1}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction 
            label="Trending" 
            icon={<WhatshotIcon />} 
            />
          <BottomNavigationAction 
            label="Movies" 
            icon={<MovieIcon />}
            />
          <BottomNavigationAction 
            label="Series" 
            icon={<TvIcon />} 
            />
          <BottomNavigationAction 
            label="Search" 
            icon={<SearchIcon />} 
            />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
