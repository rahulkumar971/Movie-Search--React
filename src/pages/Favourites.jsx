import React from 'react'
import "../css/Favourite.css"
import { useMovieContext } from '../context/MovieContext';
import MovieCards from '../components/MovieCards';


function Favourites () {
   const { favorites } = useMovieContext();

    if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourite-empty">
        <h2 >no movies here</h2>
        <p>Start to like favourite</p>
    </div>
  )
}

export default Favourites;