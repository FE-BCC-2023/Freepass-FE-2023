import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavigationBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
