import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-primary-content text-base-content  p-6'>
      <div className='max-w-5xl mx-auto flex flex-col items-center space-y-4 text-center'>
        <div className='flex items-center space-x-2'>
          <FaLeaf className='text-2xl text-green-600' />
          <p className='font-bold text-lg text-green-700'>Plantium</p>
        </div>
        <p className='text-sm'>Buy & sell plants | Grow green with us 🌱</p>

        <div className='flex flex-wrap justify-center gap-4 text-sm'>
          <Link to='/' className='link link-hover'>
            Home
          </Link>
          <Link to='/all_plants' className='link link-hover'>
            All Plants
          </Link>
          <Link to='/add_plant' className='link link-hover'>
            Add Plant
          </Link>
          <Link to='/my_plants' className='link link-hover'>
            My Plants
          </Link>
          <Link to='/about' className='link link-hover'>
            About
          </Link>
          <Link to='/support' className='link link-hover'>
            Support
          </Link>
          <Link to='/contact' className='link link-hover'>
            Contact
          </Link>
        </div>

        <div className='flex space-x-4 mt-2'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='text-xl hover:text-blue-600' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className='text-xl hover:text-blue-400' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='text-xl hover:text-pink-500' />
          </a>
        </div>

        <p className='text-xs text-gray-500 mt-2'>
          &copy; {new Date().getFullYear()} Plantium. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
