import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Search from './Search';
import Buttons from './Buttons';
import Card from './Card';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Search />
      <Buttons />
      <Card />
    </div>
  )
}

export default App;
