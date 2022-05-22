import React from 'react';

const Contuct = () => {
    return (
        <>
            <div className="text-2xl text-primary text-center font-bold">Contact Us</div>
            <div className='flex items-center justify-center my-10'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-lg input-bordered w-full max-w-xs" />
                    <input className='btn btn-primary mt-5 text-white' type="button" value="submit" />
                </div>
            </div>
        </>
    );
};

export default Contuct;