import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import GlobalProvider from "./Context/Globalstate";
import ButtonAppBar from "./Components/Navigation/MenuBar";
import FixedBottomNavigation from "./Components/Navigation/NavBar";
import Trending from "./Components/Screens/Trending";
import Movies from "./Components/Screens/Movies";
import Series from "./Components/Screens/Series";
import Search from "./Components/Screens/Search";
import { Watchlist } from "./Components/Screens/Watchlist";
import { Watched } from "./Components/Screens/Watched";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <ButtonAppBar />
          <div className="space"></div>
          <div className="app">
            <Container>
              <Routes>
                <Route exact path="/" element={<Trending />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Watched" element={<Watched />} />
                <Route path="/Watchlist" element={<Watchlist />} />
              </Routes>
            </Container>
          </div>
          <FixedBottomNavigation />
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
