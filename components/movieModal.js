import React, { useEffect, useState } from 'react';

const MovieModal = (props) => {
    const [movie, setMovie] = useState([]);
    const favMovies = props.favMovies;
    const setFavMovies = props.setFavMovies;

    useEffect(() => {
        setMovie(props.movie);
    },[props.movie])

    function addRemFavMovie(){
        if(!favMovies.some(i => i.id === movie.id)){
            let arrayCopy = [...favMovies];
            arrayCopy.push(movie);
            setFavMovies(arrayCopy);
        }else{
            let arrayCopy = favMovies.filter(i => i.id !== movie.id);
            setFavMovies(arrayCopy);
        }
    }

    return (
        <div className="modal fade" id="movieModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title popcorn-red font-weight-bold" id="exampleModalLabel">{movie.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor:"rgb(251, 245, 223)"}}>
                        <div className="container">
                            <div className="row mx-auto">
                                <div className="col border py-2">
                                    <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} />
                                </div>
                                <div className="col border text-justify" style={{height:"300px",overflow:"auto",fontSize:"13px"}}>
                                    {movie.overview}
                                </div>
                            </div>
                            <div className="row mx-auto border" style={{fontSize:"13px"}}>
                                <div className="col text-center">
                                    <b>Original title:</b> <span>&nbsp;</span> {movie.original_title}
                                </div>
                            </div>
                            <div className="row mx-auto" style={{fontSize:"13px"}}>
                                <div className="col text-center border">
                                    <b>Release date:</b> <span>&nbsp;</span> {movie.release_date}
                                </div>
                                <div className="col text-center border">
                                    <b>Score:</b> <span>&nbsp;</span> {movie.vote_average + "/10"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => addRemFavMovie()}>
                            {favMovies.some(i => i.id === movie.id) ?
                                <img src="/assets/yellowStarIcon.png" width="20" height="20"/> : 
                                <img src="/assets/whiteStarIcon.png" width="20" height="20"/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;