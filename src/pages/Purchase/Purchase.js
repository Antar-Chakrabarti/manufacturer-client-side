import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const { name, image, price, Quantity } = product;
    return (
        <div className=''>
            <h2 className="text-4xl text-center font-bold my-5 text-primary">Place Your Order</h2>
            <div className='flex justify-center items-center my-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p className='text-center font-bold text-2xl'>Price per unit: ${price}</p>
                        <p className='text-center font-bold text-2xl'>Quantity: {Quantity}</p>
                        <input type="number" min={5} max='200' value={5} class="input input-bordered input-info w-2/3 max-w-xs" />
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Place Your Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;