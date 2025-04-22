import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import { fetchDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css"
import { useLocation } from "react-router-dom";

const MovieDetailsPage =() => {

    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState (false)

    const location = useLocation()
    console.log(location)
    const goBackRef = useRef(location.state ?? '/movies')

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
    
    const defaultImg =
`https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`;


    return (
       <>
            <Link to={goBackRef.current}>Go back</Link>
            {!movie && <p>wait....</p>}
            {movie && <div className={css.box}>
            <div> <img className={css.img} src={movie.data.backdrop_path ? pict: defaultImg} width={250} alt="poster"/></div>

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