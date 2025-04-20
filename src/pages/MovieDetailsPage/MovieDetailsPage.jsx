import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../services/api";


const MovieDetailsPage =() => {


    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState ({})

    useEffect (()=> {
    const getData = async () => {
            try {
                const rez = await fetchDetails(movieId);
                console.log(rez)
                setMovie(rez);
            } catch (error) {
              console.log(error);
              }      
            }
            getData()
            },
        [movieId])
    return (
       <>
        <img src='https://image.tmdb.org/t/p/w500/${movie.backdrop_path}' />
        <p>{movie.original_title}</p>
        <p>User Score {movie.vote_average}</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Genres</p>
        <p>{movie.genres}</p>
       </>
    )
}

export default MovieDetailsPage; 