import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function MenuAppBar() {

  return (
    <Box sx={{ flexGrow: 1 } } padding={5}>
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