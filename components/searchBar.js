import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() =>{
        setApiKey(props.apiKey)
    },[props.apiKey])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchMovies();
        }
    }

    function searchMovies() {
        if(searchText){
            fetch("https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+searchText+"&page=1&include_adult=false")
            .then(i => i.json())
            .then(json => setSearchResults(json.results.slice(0,5)))
        }
    }

    return (
        <div className="input-group input-group-sm mb-3 w-75 mx-auto">
            <input type="text" id="searchBar" className="form-control shadow-none" placeholder="Search for movies..." style={{ borderRight: "0" }} onKeyPress={(event)=>handleKeyPress(event)} onChange={event=>setSearchText(event.target.value)}/>
            <div className="input-group-append" >
                <span className="input-group-text bg-white" id="basic-addon2" style={{ borderLeft: "0" }} onClick={() => searchMovies()}>
                    <img src="/assets/searchIcon.png" width="20" height="20" className="d-inline-block align-center" />
                </span>
            </div>
        </div>
    )
}

export default SearchBar;