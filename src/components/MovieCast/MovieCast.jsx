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

    const defaultImg =
    `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`;

   return (
        <>
       {!cast && <p>wait....</p>}
       {cast && 
        <div>
          <ul>
            {cast.data.cast.map((item)=> 
                <li key={item.id}>
                  <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : defaultImg} />
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