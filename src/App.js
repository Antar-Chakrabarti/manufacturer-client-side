import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Login from './shared/Login';
import Navbar from './shared/Navbar';
import RequireAuth from './shared/RequireAuth';
import Signup from './shared/Signup';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
