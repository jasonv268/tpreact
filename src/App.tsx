import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './BeerList';

function App() {
  return (
    <div className="App">
      <BeerList  beerList={["test","test2"]}/>
    </div>
  );
}

export default App;
