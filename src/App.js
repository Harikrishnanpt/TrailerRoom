import React from 'react'
import NavBar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import Welcome from './Components/Welcome/Welcome'
import {action,originals,horror,comedy} from './urls'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Welcome/>
      <Banner/>
      <Rowpost url ={originals} title="Favorites" position="1"/>
      <Rowpost url ={horror} title="Comedy" position="2"/>
      <Rowpost url ={comedy} title="Horror" position="3"/>
      <Rowpost url={action} title="Action" position="4" isSmall/>
    </div>
  );
}

export default App;
