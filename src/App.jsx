import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home'
import PokemonList from './pages/PokemonList/PokemonList.jsx'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails.jsx'
import NotFound from './components/NotFound'



const App = () => {
  return (
    <>
    <header className='header'>
      <h3>welcome to my first website in vite</h3>
    </header>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon-list">Pokemon List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pokemon-list" element={<PokemonList />} />
  <Route path="/pokemon-details/:id" element={<PokemonDetails />} />
  <Route path="*" element={<NotFound />} />
</Routes>
    </Router>
    </>
  );
};

export default App;