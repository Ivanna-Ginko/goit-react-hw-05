import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieList = ({ list }) => {

    let location = useLocation()
    return(
        <>
        {!list && <p>wait....</p>}
       {list && 
        <ul>
        {list.map((item)=> 
        <li key={item.id}>
         <Link state={location} to={`/movies/${item.id}`}>{item.original_title}</Link>
        </li> )
        }
        </ul>}
        </>
    )
}

export default MovieList;