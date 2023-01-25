import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Article from './Article';
import NavigationBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
