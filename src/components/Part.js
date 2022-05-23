import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Part = ({part}) => {
    const id = part._id;
    const {name, image, desc, Quantity, price} = part;
    const navigate = useNavigate();
    const buyNowParts  =()=>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl max-w-[280px] h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{desc} </p>
                <p>Quantity:{Quantity} unit</p>
                <p>Price per unit: ${price}</p>
                <div className="card-actions">
                    <button onClick={buyNowParts} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;