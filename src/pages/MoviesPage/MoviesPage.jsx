import { useState, useEffect } from 'react'
import { fetchResults } from '../../services/api';
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
   
    const [queryList, setQueryList] = useState ([]);
    //const [search, setSearch] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? '';
      

    useEffect(()=>{
        const getData = async () => {
        try {
            const rez = await fetchResults(query)
            setQueryList(rez.data.results)
        } catch (error) {
            console.log(error)
        }}
        getData()
    },[query])

        const ChangeQuery = (v) => {
            if (!v) {
                searchParams.delete('query')
                return setSearchParams(searchParams);
            }
           // setSearch (v)
            searchParams.set('query', v)
            setSearchParams(searchParams)
        }

    return(
        <>

        <SearchBar fun={ChangeQuery}/>
       
        {!queryList && <p>wait....</p>}
        {queryList && 
       <MovieList list={queryList} />
        }
       </>
    )
}

export default MoviesPage;