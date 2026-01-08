import React from "react";
import MovieCards from "../components/MovieCards"
import "../css/Home.css";
import { useState , useEffect } from "react";
import { getpopularmovies, searchMovies } from "../Services/Api";

function Home() {
    const[serachquery , setserchquery]=useState("");
    const[movies,setmovies]=useState([]);
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true); 

  useEffect(()=>{
    const loadpopularMovies = async()=>{
      try{
         const popularMovies = await getpopularmovies();
          
         setmovies(popularMovies);
      }catch(err){
        console.log(err)
        seterror("Failed to load");
      }finally{
        setloading(false);
      }
    };
    loadpopularMovies()
  },[]);
  

 const handleclick= async(e) => {
    e.preventDefault();
    if(!serachquery.trim()) return
    if(loading)return

  setloading(true)
    try{
      const searchResults= await searchMovies(serachquery)
      setmovies(searchResults)
      seterror(null)
    }catch(err){
      console.log(err)
      seterror("failed to serach movies")
    }finally{
      setloading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleclick} className="search-form">
        <input
          type="text"
          placeholder="serach for movies .."
          value={serachquery}
          onChange={(e)=>setserchquery(e.target.value)}
          className="search-input"
        />
        <button type="submit"className="search-button">search</button>
      </form>

      {error && <div className="error-message">{error}</div>}



      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}


export default Home;
