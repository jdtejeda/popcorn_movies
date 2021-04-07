import Head from 'next/head'
if (typeof window !== "undefined") {
  require('bootstrap/dist/css/bootstrap.min.css')
  require('jquery/dist/jquery.min.js')
  require('bootstrap/dist/js/bootstrap.min.js')
}
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar.js'
import SearchBar from '../components/searchBar.js'
import MovieCarousel from '../components/movieCarousel.js'
import CarouselTitle from '../components/carouselTitle.js'
import MovieModal from '../components/movieModal.js';
import SearchResultsList from '../components/searchResultsList.js'
import { useEffect, useState } from 'react'

export default function Home() {
  const [apiKey, setApiKey] = useState("");
  const [favMovies, setFavMovies] = useState([]);
  const [popMovies, setPopMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [modalMovie, setModalMovie] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('/apikey.txt')
      .then(r => r.text())
      .then(text => setApiKey(text));
  }, []);

  useEffect(() => {
    if (apiKey) {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1")
        .then(r => r.json())
        .then(json => setPopMovies(json.results))
      fetch(" https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey + "&language=en-US&page=1")
        .then(r => r.json())
        .then(json => setTopMovies(json.results))
    }
  }, [apiKey])

  return (
    <div className={styles.container}>
      <Head>
        <title>Popcorn Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <SearchBar apiKey={apiKey} setSearchResults={setSearchResults} setShowSearch={setShowSearch} />
          </div>
          {
            showSearch &&
            <div className='container border border-danger rounded'>
              <div className='row'>
                <div className='col'>
                  <CarouselTitle text='Search Results' />
                </div>
                <div className='col my-auto'>
                  <button type="button" class="close" aria-label="Close" onClick={()=>setShowSearch(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className='row'>
                <SearchResultsList movies={searchResults} setModalMovie={setModalMovie} />
              </div>
            </div>
          }
          <div className='row'>
            <CarouselTitle text='My Favorites' />
          </div>
          <div className='row'>
            <MovieCarousel movies={favMovies} carouselName="fav" setModalMovie={setModalMovie} />
          </div>
          <div className='row'>
            <CarouselTitle text='Popular Movies' />
          </div>
          <div className='row'>
            <MovieCarousel movies={popMovies} carouselName="pop" setModalMovie={setModalMovie} />
          </div>
          <div className='row'>
            <CarouselTitle text='Top Rated' />
          </div>
          <div className='row'>
            <MovieCarousel movies={topMovies} carouselName="top" setModalMovie={setModalMovie} />
          </div>
          <MovieModal movie={modalMovie} favMovies={favMovies} setFavMovies={setFavMovies} />
        </div>
      </main>
    </div>

  )
}
