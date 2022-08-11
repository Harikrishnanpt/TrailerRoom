import React from 'react'
import NavBar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,originals,horror,comedy,documentaries} from './urls'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url ={originals} title="Favorites"/>
      <Rowpost url ={horror} title="Comedy"/>
      <Rowpost url ={comedy} title="Horror"/>
      <Rowpost url ={documentaries} title="Documentaries"/>
      <Rowpost url={action} title="Action" isSmall/>
    </div>
  );
}

export default App;
