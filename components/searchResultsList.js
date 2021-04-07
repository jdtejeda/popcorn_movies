import React, { useEffect, useState } from 'react';

const SearchResultsList = (props) => {
    const [movies, setMovies] = useState([]);
    const setModalMovie = props.setModalMovie;

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies])

    return(
        <div className='container'>
            {movies.map(movie =>
                <div className='row border bg-light rounded' onClick={()=>console.log(movie)} key={"searchid" + movie.id} data-toggle="modal" data-target="#movieModal" onClick={() => setModalMovie(movie)}>
                    <div className='column'>
                        <img className='mx-auto' src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} width={30}/>
                    </div>
                    <div className='column my-auto ml-3'>
                        {movie.title}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchResultsList;