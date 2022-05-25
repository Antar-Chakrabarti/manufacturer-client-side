import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const image = user.photoURL || 'https://i.ibb.co/4PmRVjw/Background-5.png';
    const customerReview = (event) => {
        event.preventDefault();
        const review = {
            name: user.displayName,
            desc: event.target.review.value,
            img: image
        }
        fetch(`https://floating-chamber-93573.herokuapp.com/review`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <>
            <div className="text-2xl text-primary text-center font-bold my-10">Add Your Review</div>
            <div className='flex items-center justify-center my-10'>
                <form onSubmit={customerReview} className="form-control w-full max-w-xs">
                   <div className='flex justify-center items-center'>
                        <div class="rating my-10">
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        </div>
                   </div>
                    <label className="label">
                        <span className="label-text">Your Experience With Us</span>
                    </label>
                    <input type="text" name='review' placeholder="Your Review" className="input input-lg input-bordered w-full max-w-xs" />
                    <input className='btn btn-primary mt-5 text-white' type="submit" value="Add" />
                </form>
            </div>
        </>
    );
};

export default AddReview;