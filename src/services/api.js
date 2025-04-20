import axios from 'axios'

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const trendUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' 
const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/movie_id${movie.ID}?language=en-US'
const creditsUrl = 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDNmOGYwNjUzOGU0ZGJhMzZkNjMxMGFlNWZmNWEzOSIsIm5iZiI6MTc0NDkyMzA5OS44NDQsInN1YiI6IjY4MDE2OWRiMmM4NWU3OTY2Mzk5OGIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7PDX2CdJykRPvD_P7Y4GxWJ6lHrHgzP0ZYJODjVgDM'
  }
};


export const fetchResults = async () => {
    const response = await axios.get(url, options)
    return response;
}

export const fetchTrend = async () => {
    const response = await axios.get(trendUrl, options)
    return response;
}

export const fetchDetails = async (movieId) => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/movie_id${movie.ID}?language=en-US', options)
    return response;
}
