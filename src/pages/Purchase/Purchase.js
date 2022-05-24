import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, image, price, Quantity } = product;

    const placingOrder = (event) => {
        event.preventDefault();
        const parts = {
            name: name,
            img: image,
            quantity: event.target.quantity.value,
            user: event.target.email.value,
            userName: event.target.name.value,
            address: event.target.address.value,
            phone: event.target.phone.value,

        }
        fetch('http://localhost:5000/place-order',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(parts)
        })
        .then(res => res.json())
        .then(data => {
            navigate('/')
        })
    }
    return (
        <div className=''>
            <h2 className="text-4xl text-center font-bold my-5 text-primary">Place Your Order</h2>
            <div className='flex justify-center items-center my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <form onSubmit={placingOrder} className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-center font-bold text-2xl'>Price per unit: ${price}</p>
                        <p className='text-center font-bold text-2xl'>Quantity: {Quantity}</p>
                        <div className="divider"></div>
                        <input type="email" name='email' value={user?.email} disabled className="input input-bordered input-info" />
                        <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered input-info" />
                        <input type="number" name='quantity' placeholder='Set Quantity' className="input input-bordered input-info" />
                        <input type="number" name='phone' placeholder='Your Phone Number' className="input input-bordered input-info" />
                        <input type="address" name='address' placeholder='your address' className="input input-bordered input-info" />
                        <input type='submit' className="btn btn-primary"/>
                    </form>
                </div>
            </div>{/*  */}
        </div>
    );
};

export default Purchase;