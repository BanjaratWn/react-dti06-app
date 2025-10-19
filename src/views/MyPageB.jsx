import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Profile from "./../assets/imgB/Profile.png"
import logo1 from "./../assets/imgB/logo1.png"
import logo2 from "./../assets/imgB/logo2.png"
import logo3 from "./../assets/imgB/logo3.png"
import logo4 from "./../assets/imgB/logo4.png"
import logo5 from "./../assets/imgB/logo5.png"

export default function MyPageB() {
  return (
    <>
      <div className='w-full  h-lvh flex flex-col items-center bg-black'>
        <div style={{fontFamily: 'ibm plex mono'}} className='flex justify-center items-center px-16 py-6 bg-[#1b1b1b] w-10/12 text-[#9c9c9c]'>
          <div className='flex justify-center items-center gap-25'>
            <a href="#">Home</a>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
            <a href="#">Resent work</a>
            <a href="#">Get In Touch</a>
            <div className='flex gap-6 w-30 text-xl'>
              <FaLinkedinIn/>
              <FaBehance/>
              <FaTwitter/>
            </div>
          </div>
        </div>

        <div className='w-8/12 mx-auto flex mt-20 items-center'>
          <div>
            <h1 style={{fontFamily: 'raleway'}} className='text-5xl text-white font-bold'>Banjarat Wora-anu</h1>
            <p style={{fontFamily: 'ibm plex mono'}} className='text-gray-300 w-2/3 mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta dolorum nostrum ullam sed adipisci omnis facere repellendus nisi numquam.
            </p>
            <button style={{fontFamily: 'raleway'}} className='bg-[#62ba1b] hover:bg-[#3f8e00] px-15 py-5 text-white mt-10 font-bold rounded-lg shadow-lg shadow-lime-700/40'>
                Let's get started
            </button>
          </div>
          <div className='w-200'>
            <img src={Profile} alt="Profile" />
          </div>
        </div>

        <div style={{fontFamily: 'ibm plex mono'}} className='w-8/12 mx-auto flex items-center text-white mt-10'>
            <p>worked with</p>
        </div>
        
        <div className='mx-auto flex items-center justify-between w-8/12 mt-5 mb-20'>
          <img src={logo1} alt="logo1" className='w-40' />
          <img src={logo2} alt="logo2" className='w-40' />
          <img src={logo3} alt="logo3" className='w-40' />
          <img src={logo4} alt="logo4" className='w-40' />
          <img src={logo5} alt="logo5" className='w-40' />
        </div>
      </div>
    </>
  )
}
