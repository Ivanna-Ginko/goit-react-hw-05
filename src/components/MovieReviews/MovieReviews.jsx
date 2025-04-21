import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css"



const MovieReviews = () => {

    const { movieId } = useParams();
    console.log(movieId)
    const [rev, setRev] = useState (false );

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const rez = await fetchReviews(movieId)
               console.log(rez)
               setRev(rez)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    },[movieId])


    return (
        <>
        {!rev && <p>nobody wrote anything</p>}
        {rev && <ul>
           {rev.data.results.map((item)=> 
           <li key={item.id}>
            <p className={css.title}>{item.author}</p>
            <p className={css.text}>{item.content}</p>
           </li> 
            )}
        </ul>}
        </>
    )
}

export default MovieReviews;



