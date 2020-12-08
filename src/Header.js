import React,{useState,useEffect} from "react";
import axios from "axios";
import setMovies from "./App" 

function Header()
{
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const [searchTerm, setsearchTerm] = useState('');
const handleSubmit = ()=>{
    axios.get(SEARCHAPI + searchTerm).then(resp => {
        setMovies(resp.data.results);
        setsearchTerm("");
      })
}
return(
    <div className = "Header">
        <h1>React-Movie</h1>
        <form onSubmit = {handleSubmit}>
        <input type = "text" placeholder="Enter Movie Name" value = {searchTerm} onChange = {e=>{setsearchTerm(e.target.value)}}></input>
        </form>
    </div>
)
}

export default Header;