import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import SocialLinks from '../SocialLinks/SocialLinks';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>

            <SocialLinks></SocialLinks>
        </div>
    );
};

export default Main;