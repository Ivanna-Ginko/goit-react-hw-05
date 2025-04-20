
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import './App.css'
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"

const App = () => {

  return (
    <>
    <Header />
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='/movies/:movieId/cast' element={<h2>MovieCast</h2>} />
        <Route path='/movies/:movieId/reviews' element={<h2>MovieReviews</h2>} />
        <Route path='*' element={<h2>NotFoundPage</h2>} />
     </Routes>
    </>
  )
}

export default App
