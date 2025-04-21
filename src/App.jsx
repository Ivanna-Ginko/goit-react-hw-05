
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import './App.css'
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"

const App = () => {

  return (
    <>
    <Navigation />
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<h2>NotFoundPage</h2>} />
     </Routes>
    </>
  )
}

export default App
