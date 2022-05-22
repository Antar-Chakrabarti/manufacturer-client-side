import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Login from './shared/Login';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
      </Routes>
    </div>
  );
}

export default App;
