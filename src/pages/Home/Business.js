import React from 'react';
import { FaFontAwesomeFlag, FaProjectDiagram } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

const Business = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl text-center font-bold my-5 text-primary">MILLIONS BUSINESS TRUST US</h2>
            <p className='text-center text-2xl'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FaFontAwesomeFlag className='text-6xl text-primary' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold text-5xl">72</h2>
                        <p className='text-2xl text-primary'>Countries</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FaProjectDiagram className='text-6xl text-primary' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold text-5xl">535+</h2>
                        <p className='text-2xl text-primary'>Complete projects</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <BsPeople className='text-6xl text-primary' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold text-5xl">273+</h2>
                        <p className='text-2xl text-primary'>Happy Clients</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <AiFillLike className='text-6xl text-primary' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold text-5xl">432+</h2>
                        <p className='text-2xl text-primary'>Feedbacks</p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl px-10 py-10">
                    <p className='text-4xl text-primary font-bold'>Have any question about us or get a <br /> products request?</p>
                    <p className='text-2xl mt-5'>Don't hesitate to contact us</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-accent">Contact US</button>
                </div>
            </div>
        </div>
    );
};

export default Business;