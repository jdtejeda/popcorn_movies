import React, { useEffect, useState } from 'react';
import MovieModal from '../components/movieModal.js';

const MovieCarousel = (props) => {
    const [movies, setMovies] = useState([]);
    const setModalMovie = props.setModalMovie;
    const carouselName = props.carouselName;

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies])

    return (
        <div className="movie-carousel" key={carouselName}>
            {
                movies.length > 0 ? movies.map(movie => 
                <div className="movie-item" key={carouselName + "id" + movie.id} data-toggle="modal" data-target="#movieModal" onClick={() => setModalMovie(movie)}>
                    <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} />
                </div>) : <div className="text-muted">No movies to show...</div>
            }
        </div>
    )
}

export default MovieCarousel;