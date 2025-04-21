import { useEffect, useState } from "react";
import { fetchCast } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {

    const { movieId } = useParams();
    console.log(movieId)
    const [cast, setCast] = useState (false );

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const rez = await fetchCast(movieId)
               console.log(rez)
               setCast(rez)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    },[movieId])



   return (
        <>
       {!cast && <p>wait....</p>}
       {cast && 
        <div>
          <ul>
            {cast.data.cast.map((item)=> 
                <li key={item.id}>
                  <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} />
                  <p>{item.name} </p>
                  <p>{item.character} </p>
                {item.name}</li> 
                )}
          </ul>
          </div>
       }
       </>
    )

}


export default MovieCast;