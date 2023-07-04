import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='bg-gray-900'>
            <Navbar></Navbar>
            <Home></Home>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
            <SocialLinks></SocialLinks>
            
        </div>
    );
};

export default Main;