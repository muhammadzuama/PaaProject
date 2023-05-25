import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie  } from './api';
import Navbar from './componen/navbar';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results)=>{
      setPopularMovies(results)
    })
  }, []);



  const search = async (q) => {
    if(q.length>3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }


  }
  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <div className='Movie-wrapper'>
            <div className='Movie-title'>{movie.title}</div>
            <img className='Movie-image' src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`} alt='' />
            <div className='Movie-date'>{movie.release_date}</div>
            <div className='Movie-rate'>{movie.vote_average}</div>
          </div>
        </div>
      )
    })
  }
  
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <Navbar/>
      <header className="App-header">
        <h1>WatchBox Movie</h1>
        <input
          placeholder='Cari Film Yang Anda suka'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}
        />
        <div className='Movie-container'>
          <PopularMoviesList />
        </div>
      </header>
    </div>
  )
  
}

export default App;

