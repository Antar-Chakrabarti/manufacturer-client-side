import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://i.ibb.co/J7rBPwd/Background.png" className="w-full h-[60vh]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://i.ibb.co/84BMVNQ/Background-1.png" className="w-full h-[60vh]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://i.ibb.co/Sv7pwZJ/Background-3.png" className="w-full h-[60vh]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/309C6zc/Background-2.png" className="w-full h-[60vh]"/> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;