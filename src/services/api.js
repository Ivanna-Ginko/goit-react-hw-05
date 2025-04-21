import axios from 'axios'

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDNmOGYwNjUzOGU0ZGJhMzZkNjMxMGFlNWZmNWEzOSIsIm5iZiI6MTc0NDkyMzA5OS44NDQsInN1YiI6IjY4MDE2OWRiMmM4NWU3OTY2Mzk5OGIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7PDX2CdJykRPvD_P7Y4GxWJ6lHrHgzP0ZYJODjVgDM',
    accept: 'application/json'
}
};

export const fetchResults = async values => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${values}`, options)
    return response;
}

export const fetchTrend = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US` , options)
    return response;
}

export const fetchDetails = async movieId => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options)
    return response;
}

export const fetchCast = async movieId => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
    return response;
}


export const fetchReviews = async movieId => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
    return response;
}
