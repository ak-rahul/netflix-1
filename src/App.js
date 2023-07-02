import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App
