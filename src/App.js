import './App.css';
import FixedBottomNavigation from './Components/Navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Components/Screens/Trending';
import Movies from './Components/Screens/Movies';
import Series from './Components/Screens/Series';
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
              <Route exact path="/" element={ <Trending /> } />
              <Route path="/Movies" element={ <Movies /> } />
              <Route path="/Series" element={ <Series /> } />
              <Route path="/Search" element={ <Search /> } />
              </Routes>
          </Container>
        </div>
        <FixedBottomNavigation/>
      </BrowserRouter>
  </>
  )
}

export default App;
