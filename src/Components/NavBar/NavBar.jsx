import React from 'react';
import Logo from '../../assets/logo.png'
import { GoHome } from 'react-icons/go';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { NavLink} from 'react-router';

const NavBar = () => {
  return (
    <div className='bg-white w-full shadow-md  py-2 '>
      <div className="navbar w-11/12 mx-auto flex flex-col md:flex-row">
        <div className="flex-1">
          <a><img src={Logo} alt="" /></a>
        </div>
        <div className="flex-none mt-5 md:mt-0">
          <div className='flex gap-3 text-[0.8rem] md:text-xl'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#024c1c] text-white rounded-md" : ""}>
              <div  className='flex gap-2 justify-center items-center py-1 px-2 rounded-md'>
                <GoHome />
                <p>Home</p>
              </div>
            </NavLink>

            <NavLink to={'/timeLine'} className={({ isActive }) => isActive ? "bg-[#024c1c] text-white rounded-md" : ""}>
              <div  className='flex gap-2 justify-center items-center   py-1 px-2 rounded-md'>
                <RiTimeLine />
                <p>Timeline</p>
              </div>
            </NavLink>

            <NavLink to={'/stats'} className={({ isActive }) => isActive ? "bg-[#024c1c] text-white rounded-md" : ""}>
              <div className='flex gap-2 justify-center items-center   py-1 px-2 rounded-md'>
                <ImStatsDots />
                <p>Stats</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;