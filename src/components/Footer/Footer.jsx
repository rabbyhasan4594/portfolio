import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-slate-700 text-base-content rounded">

                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://web.facebook.com/rabby.mithu" target='_blank'
                            rel='noreferrer'><FaFacebook size={30} className='text-blue-700' /></a>
                        <a href="https://www.instagram.com/rabbymithu/" target='_blank'
                            rel='noreferrer'><FaInstagram size={30} className='text-red-300' /></a>
                        <a href="//www.linkedin.com/in/rabby-hasan-946396184" target='_blank'
                            rel='noreferrer'><FaLinkedin size={30} className='text-sky-500' /></a>
                        <a href="https://github.com/rabbyhasan4594" target='_blank'
                            rel='noreferrer'><FaGithub size={30} className='text-white' /></a>

                    </div>
                </div>
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by Md Rabby Hasan</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;