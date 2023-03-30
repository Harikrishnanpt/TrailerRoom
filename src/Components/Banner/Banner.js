import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get( `trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])
    });
  },[])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className="banner">
        <div className="content">
            <h1 className="title">{movie ? movie.title :""}</h1>
            <div className="banner_button">
              <button className="button play_btn">Play<img class="play-btn" src="./play.jpg" alt="playLogo"></img></button>
              <button className="button my_list">My List</button>
              <button className="button favourite_btn">Favourite</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
