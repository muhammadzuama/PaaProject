import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL
const apiKey = `da33fadbea51fc5df46484155303711a`
// const searchUrl=process.env.REACT_APP_SEARCH

// const httpGetMovie=  "https://api.themoviedb.org/3/movie/popular?api_key=da33fadbea51fc5df46484155303711a"

export const getMovieList = async () => {
    const movie= await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
};

export const searchMovie = async (q) => {
    const searchmovie2= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`)
    return searchmovie2.data
};

