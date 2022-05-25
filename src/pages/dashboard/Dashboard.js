import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <h2>{users.length}</h2>
            <div className="drawer-content">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    {
                        users.map(user => {
                            if (user.role === 'admin') {
                                <>
                                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                                    <li><Link to='/dashboard/all-orders'>All Orders</Link></li>
                                    <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                                    <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                                    <li><Link to='/dashboard/manage-product'>Manage Products</Link></li>
                                </>
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;