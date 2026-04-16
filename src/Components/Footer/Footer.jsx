import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#244c3a] text-white py-10 text-center">

        <h1 className="text-4xl font-bold mb-3">KeenKeeper</h1>

        <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>
        <div className="mb-6">
          <h3 className="mb-3 text-gray-300">Social Links</h3>
          <div className="flex justify-center gap-4">

            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaGithub />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaFacebook />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaXTwitter />
            </div>

          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-4 text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center px-5">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms of Service</p>
            <p className="cursor-pointer hover:underline">Cookies</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;