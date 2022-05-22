import React from 'react';

const Contuct = () => {
    return (
        <>
            <div className="text-2xl text-primary text-center font-bold">Contact Us</div>
            <div className='flex items-center justify-center my-10'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Your Message</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-lg input-bordered w-full max-w-xs" />
                    <input className='btn btn-primary mt-5 text-white' type="button" value="submit" />
                </div>
            </div>
        </>
    );
};

export default Contuct;