
import { Routes, Route } from "react-router-dom"
import './App.css'
import { lazy, Suspense } from "react";

const MovieDetailsPage = lazy(()=>import ("./pages/MovieDetailsPage/MovieDetailsPage" ))
const HomePage = lazy(()=>import ("./pages/HomePage/HomePage"))
const MoviesPage = lazy(()=>import ("./pages/MoviesPage/MoviesPage"))
const MovieCast = lazy(()=>import ("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(()=>import ("./components/MovieReviews/MovieReviews"))
const NotFoundPage = lazy(()=>import ("./pages/NotFoundPage/NotFoundPage"))
const Navigation = lazy(()=>import ("./components/Navigation/Navigation"))


const App = () => {

  return (
    <Suspense fallback={<h2>loading...</h2>}>
     <Navigation />
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
     </Routes>
    </Suspense>
  )
}

export default App
