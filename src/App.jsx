import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'
import Trending from './pages/Trending'

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/movie' element={<MovieList/>} />
    <Route path='/trend' element={<Trending/>} />
   </Routes>
  )
}

export default App
