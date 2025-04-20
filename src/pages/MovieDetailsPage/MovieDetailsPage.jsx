import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../services/api";


const MovieDetailsPage =() => {

    const { movieID } = useParams()
    console.log(movieID)
    const [movie, setMovie] = useState ({})

    useEffect (()=> {
    const getData = async () => {
                try {
                    const rez = await fetchDetails(movieID);
                    console.log(rez.data)
                    setMovie(rez.data.results);
                } catch (error) {
                    console.log(error);
                }      
            }
            getData()
            },
        [movieID])
    return (
       <>
        <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' />
        <p>{movie.original_title}</p>
        <p>User Score {movie.vote_average}</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Genres</p>
        <p>{movie.genre_ids}</p>
       </>
    )
}

export default MovieDetailsPage; 