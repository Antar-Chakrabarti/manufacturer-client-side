import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Contuct from './Contuct';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Business/>
            <Review/>
            <Contuct/>
            <Footer/>
        </div>
    );
};

export default Home;