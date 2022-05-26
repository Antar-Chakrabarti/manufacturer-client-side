import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        fetch(`https://floating-chamber-93573.herokuapp.com/place-order`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    const cancleOrder =()=>{
        toast.success('I will do it soon')
    }
    const paymentOrder =()=>{
        toast.success('I will add payment system soon')
    }
    return (
        <div>
            <h2 className='text-4xl text-center text-info my-10'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>cancel</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.user}</td>
                                    <td><button onClick={cancleOrder} class="btn btn-xs btn-warning">cancel</button></td>
                                    <td><button onClick={paymentOrder} class="btn btn-xs btn-info">pay</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;