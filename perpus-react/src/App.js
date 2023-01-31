import './App.css';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import Login from './components/User/Login';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Main/Dashboard';
import PageBook from './components/Main/PageBook'
import ReadBook from './components/Main/ReadBook';
import Register from './components/User/Register';
import Aktivasi from './components/User/Aktivasi';
import Resend from './components/User/Resend';
import Profile from './components/User/Profile';

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute/>}>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/aktivasi' element={<Aktivasi/>}></Route>
        <Route path='/resend' element={<Resend/>}></Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/book' element={<PageBook />}></Route>
        <Route path='/book/:id' element={<ReadBook />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
