import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Watchlist } from '../Screens/Watchlist';
import { Watched } from '../Screens/Watched';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function MenuAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>window.scroll(0, 0)} className="header">
            QuickPicks 📺
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}