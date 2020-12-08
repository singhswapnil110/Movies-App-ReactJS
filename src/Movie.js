import React from "react"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Movie({ title,overview,vote_average,poster_path },key){
return(
<div className="movie-card">
<img src = {IMGPATH + poster_path} alt = {title}></img>
<div className="movie-info">
<h3>{title}</h3>
<span>{vote_average}</span>
</div>
<div className="movie-over">
<h4>Overview</h4>
<p>{overview}</p>
</div>
</div>
)
}

export default Movie;