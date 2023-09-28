import React from 'react'
import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { FaXTwitter,FaLinkedinIn,FaInstagram,FaFacebook } from "react-icons/fa6";



const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <Link to={"/"}><img src={logo} alt="logo-ct" className="w-56" /></Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Career
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
            Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    
     <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Intellectic Pvt Ltd</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 hover:text-blue-800 text-2xl">
            <FaFacebook/>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 hover:text-pink-300 text-2xl ">
              <FaInstagram/>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 hover:text-black text-2xl">
            <FaXTwitter/>
            </Typography>
            
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 hover:text-blue-700 text-2xl">
             <FaLinkedinIn/>
            </Typography>
          </div>
        </div>
      
    </footer>
  )
}

export default Footer