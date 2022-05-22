import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Footer from './Footer';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Business/>
            <Footer/>
        </div>
    );
};

export default Home;