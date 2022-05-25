import React  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
        const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                       !admin && <>
                            <li><Link to='/dashboard/profile'>My Profile</Link></li>
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/review'>Add Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to='/dashboard/profile'>My Profile</Link></li>
                            <li><Link to='/dashboard/all-orders'>All Orders</Link></li>
                            <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                            <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manage-product'>Manage Products</Link></li>
                        </>
                    }
                    {/* {
                        users.map(user => {
                            if (user.email === email && user.role === 'admin') {
                               return <>
                                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                                    <li><Link to='/dashboard/all-orders'>All Orders</Link></li>
                                    <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                                    <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                                    <li><Link to='/dashboard/manage-product'>Manage Products</Link></li>
                                </>
                            } else {
                               return <>
                                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                                    <li><Link to='/dashboard'>My Orders</Link></li>
                                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                                </>
                            }
                        })
                    } */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;