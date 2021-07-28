import React, {useState, useEffect} from 'react';
import axios from '../axios';
import '../styles/row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);// set movies to data request
      
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: '420',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          // url: https://www.youtube.com/watch?v=HXziHr0QfFQ
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));// HXziHr0QfFQ
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className="row">
      <h3>{props.title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster${props.isLargeRow ? " row__posterLarge" : ""}`}
            src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;