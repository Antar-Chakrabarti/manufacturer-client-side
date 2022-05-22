import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const {name, image, desc, Quantity, price} = part;
    const navigate = useNavigate();
    const buyNowParts  =()=>{
        navigate('/purchase')
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{desc} </p>
                <p>Quantity:{Quantity} unit</p>
                <p>Price per unit: ${price}</p>
                <div class="card-actions">
                    <button onClick={buyNowParts} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;