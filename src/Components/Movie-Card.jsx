import React from "react";

const Moviecard = ({movie: { id, title,  release_year, poster_url, rating, director, genre, language }}) => {
    return(
        <div className="movie-card">
            <img src= {poster_url ? 'Loading' : '/no-movie.png'} alt="title"/> 
        <div className="mt-4">
            <h3>{title}</h3>
            <div className="content">
                <div className="rating">
                    <img src="/star.png" alt="star-icon"/>
                    <p >{rating ? rating : 'N/A'}</p>
                </div>
                <span>•</span>
                <p className="lang">{language ? language : 'n/a'}</p>
                <span>•</span>
                <p className="year">{release_year}</p>
            </div>
        </div>
        </div>
    )
}

export default Moviecard;