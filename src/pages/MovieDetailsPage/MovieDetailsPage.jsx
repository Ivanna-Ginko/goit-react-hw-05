import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css"


const MovieDetailsPage =() => {

    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState (false)

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

    let pict = ''
    if(movie.data && movie.data.backdrop_path)  pict = `https://image.tmdb.org/t/p/w500`+movie.data.backdrop_path     
    
    return (
       <>
            {!movie && <p>wait....</p>}
            {movie && <div className={css.box}>
            {pict && <div><img className={css.img} src={pict} /></div>}

                <div>
                <p className={css.title}>{movie.data.original_title}</p>
                <p className={css.text}>User Score {movie.data.vote_average}</p>
                <p className={css.text}>Overview</p>
                <p className={css.text}>{movie.data.overview}</p>
                <p className={css.text}>Genres</p>
                <ul>
                    {movie.data.genres.map((item)=> 
                    <li className={css.item} key={item.id}>{item.name}</li> 
                )}
                </ul>
                </div>
            </div>}

            <h2>Additional information</h2>
            <nav>
                <NavLink to="cast" className={css.link}>Cast</NavLink>
                <NavLink to="reviews" className={css.link}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}


export default MovieDetailsPage; 