import { useState, useEffect } from "react";
import { fetchTrend } from '../../services/api' 
import { Link } from 'react-router-dom'



const HomePage = () => {
    const [popular,setPopular] = useState ( [] );

    
    useEffect(()=> {
        const getData = async () => {
            try {
                const rez = await fetchTrend();
                console.log(rez.data)
                setPopular(rez.data.results);
            } catch (error) {
                console.log(error);
            }      
        }
        getData()
        },
    [])




    return (
        <>
       <h3>Trending today:</h3>
        <ul>
          {popular.map((p)=> 
            <li key={p.id}>
                <Link to={p.id.toString()}>{p.original_title}</Link>
            </li> )
          }
        </ul>
        </>
    )
}

export default HomePage;

//<li key={i}><a href=movies/{p.id} >{p.original_title}</a></li> )}