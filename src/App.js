import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './pages/blog/Blog';
import AddProduct from './pages/dashboard/AddProduct';
import AddReview from './pages/dashboard/AddReview';
import AllOrders from './pages/dashboard/AllOrders';
import Dashboard from './pages/dashboard/Dashboard';
import MakeAdmin from './pages/dashboard/MakeAdmin';
import ManageProducts from './pages/dashboard/ManageProducts';
import MyOrders from './pages/dashboard/MyOrders';
import MyProfile from './pages/dashboard/MyProfile';
import Home from './pages/Home/Home';
import Portfoli from './pages/portfolio/Portfoli';
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
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
          <Route index element={<MyOrders/>}/>
          <Route path='review' element={<AddReview/>}/>
          <Route path='profile' element={<MyProfile/>}/>
          <Route path='all-orders' element={<AllOrders/>}/>
          <Route path='add-product' element={<AddProduct/>}/>
          <Route path='make-admin' element={<MakeAdmin/>}/>
          <Route path='manage-product' element={<ManageProducts/>}/>
        </Route>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio' element={<Portfoli/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
