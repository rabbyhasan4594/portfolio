import React from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-gray-900">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
      <FaBars size={20}/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li> 
      <li><a>Project</a></li>
      <li><a>Experience</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white">Md Rabby Hasan</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl text-white">
      <li className='hover:bg-orange-500 hover:rounded-lg'><a>Home</a></li>
      <li className='hover:bg-orange-500 hover:rounded-lg'><a>About</a></li> 
      <li className='hover:bg-orange-500 hover:rounded-lg'><a>Project</a></li>
      <li className='hover:bg-orange-500 hover:rounded-lg'><a>Experience</a></li>
      <li className='hover:bg-orange-500 hover:rounded-lg'><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end me-4">
    <a className="btn btn-sm">Resume</a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;