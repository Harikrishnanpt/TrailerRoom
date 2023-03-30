import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results)
    })

  }, [])
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
    })

  }
  return (
    <div className='row pad-sec'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" src={`${imageUrl + obj.backdrop_path}`} />
        )}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}
export default Rowpost