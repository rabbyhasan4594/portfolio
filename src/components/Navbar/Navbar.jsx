import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-gray-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <FaBars size={20} />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"home"}>Home</Link></li>
                            <li><Link to={"about"}>About</Link></li>
                            <li><Link to={"project"}>Project</Link></li>
                            <li><Link to={"experience"}>Experience</Link></li>
                            <li><Link to={"contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-orange-600 font-bold">Md Rabby Hasan</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl text-white">
                        <li className='hover:bg-orange-500 hover:rounded-lg'><a>Home</a></li>
                        <li className='hover:bg-orange-500 hover:rounded-lg'><Link to={"about"}>About</Link></li>
                        <li className='hover:bg-orange-500 hover:rounded-lg'><Link to={"project"}>Project</Link></li>
                        <li className='hover:bg-orange-500 hover:rounded-lg'><Link to={"experience"}>Experience</Link></li>
                        <li className='hover:bg-orange-500 hover:rounded-lg'><Link to={"contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end me-4">
                    <a href="/Resume_of_Rabby.pdf" download={true} target='_blank'
                        rel='noreferrer' className="btn  btn-secondary  bg-orange-600">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;