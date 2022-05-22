import React, { useEffect, useState } from 'react';
import Part from '../../components/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-5 text-primary">Our Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    parts.map((p, index) => <Part
                        key={index}
                        part={p}
                    />) 
                }
            </div>
        </div>
    );
};

export default Parts;