import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then((data) => {
                setReview(data)
                console.log(data)
            })
    }, [])
    console.log(review)
    return (
        <>
            <div className="text-center text-4xl font-bold text-secondary">Customer Review</div>
            <div className='grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    review.map(rev => <>
                        <div className="card lg:max-w-lg bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src={rev.img} alt='' />
                                    </div>
                                </div>
                                <h2 className="card-title">{rev.name}</h2>
                                <p>{rev.desc}</p>
                            </div>
                            )
                        </div>
                    </>)
                }




            </div>
        </>
    );
};

export default Review;