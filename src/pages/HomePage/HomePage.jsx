import { useState, useEffect } from "react";
import { fetchTrend } from '../../services/api' 
import { Link } from 'react-router-dom'
import MovieList from '../../components/MovieList/MovieList'



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
        <MovieList list={popular} />
        </>
    )
}

export default HomePage;

