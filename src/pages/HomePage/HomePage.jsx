import { useState, useEffect } from "react";
import { fetchTrend } from '../../services/api' 
import { Link } from 'react-router-dom'



const HomePage = () => {
    const [popular,setPopular] = useState ( [] );

    
    useEffect(()=> {
        const getData = async () => {
            try {
                const rez = await fetchTrend();
                console.log(rez.data.results[0].id)

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
          {popular.map((item)=> 
            <li key={item.id}>
                <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
            </li> )
          }
        </ul>
        </>
    )
}

export default HomePage;

