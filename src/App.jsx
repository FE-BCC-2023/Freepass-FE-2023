import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'
import Trending from './pages/Trending'
import TvList from './pages/TvList'

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/movie' element={<MovieList/>} />
    <Route path='/trend' element={<Trending/>} />
    <Route path='/tv' element={<TvList/>} />
   </Routes>
  )
}

export default App
