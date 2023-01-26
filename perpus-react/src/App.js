import './App.css';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Main/Dashboard';
import PageBook from './components/Main/PageBook'

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute/>}>
        <Route path='/' element={<Login/>}></Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/book' element={<PageBook />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
