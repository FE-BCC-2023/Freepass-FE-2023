import './App.css'
import HcMainPage from './page/HcMainPage'
import Landing from './page/Landing'
import NotFound from './page/NotFound'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<HcMainPage />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
