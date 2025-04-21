

const MovieList = (list) => {

    return(
        <>
        {!list && <p>wait....</p>}
       {list && 
        <ul>
        {list.map((item)=> 
        <li key={item.id}>
         <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
        </li> )
   }
        </ul>}
        </>
    )
}

export default MovieList;