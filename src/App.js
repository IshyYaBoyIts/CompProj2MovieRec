import './App.css';
import FixedBottomNavigation from './Components/Navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Components/Screens/Trending.js';
import Movies from './Components/Screens/Movies.js';
import Series from './Components/Screens/Series.js';
import Search from '@mui/icons-material/Search';
import ButtonAppBar from './Components/Navigation/MenuBar';
import { Container } from '@mui/material';


function App() {
  return (
  <>
    <BrowserRouter>
      <ButtonAppBar/>
        <div className='app'>
          <Container>
            <Routes>
              <Route exact path="/" component={ <Trending /> } />
              <Route path="/Movies" component={ <Movies /> } />
              <Route path="/Series" component={ <Series /> } />
              <Route path="/Search" component={ <Search /> } />
              </Routes>
          </Container>
        </div>
        <FixedBottomNavigation/>
      </BrowserRouter>
  </>
  )
}

export default App;
