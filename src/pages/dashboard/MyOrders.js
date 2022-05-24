import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user.email;
    fetch('http://localhost:5000/place-order',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(email)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    return (
        <div>
            <h2>My Orders</h2>
        </div>
    );
};

export default MyOrders;