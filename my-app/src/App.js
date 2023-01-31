import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import ArticleDetail from './ArticleDetail';
import NavigationBar from './components/Navbar';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
