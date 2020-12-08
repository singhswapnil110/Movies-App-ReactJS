import React, { useState,useEffect } from 'react';
import Movie from "./Movie";
import Header from "./Header";
import axios from "axios";
import { LinearProgress } from '@material-ui/core';
import './App.css';

function App()
{
const [movies, setMovies] = useState([]);
const [page,setpage] = useState(1);
const [isLoading,setisLoading] = useState(true);
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

useEffect(()=>{
  axios.get(APIURL+page).then(resp => {
    //console.log(resp.data.results);
    setMovies(resp.data.results);
    setisLoading(false);
  })
},[])

return(
  <>
  <Header />
  <div className="movie-container">
   {isLoading ? <LinearProgress /> : movies.map(movie => <Movie {...movie} key = {movie.id}/>)}
  </div>

  <div className="pageset"> 
     {page ? <button onClick = {()=>setpage(page-1)}>Prev</button> : null}
      <p>{page}</p>
      <button onClick = {()=>setpage(page+1)}>Next</button>
  </div>
  </>
  ) 
}

export default App;
