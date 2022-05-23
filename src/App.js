import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/blog/Blog';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Login from './shared/Login';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';
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
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
