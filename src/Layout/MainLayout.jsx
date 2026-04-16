import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className='bg-[#406eaf0d] min-h-screen'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;