import React from 'react'
import hello from './../assets/imgA/hello.png'
import profile from './../assets/imgA/profile.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function MyPageA() {
  return (
    <>
      <div style={{fontFamily: "monomaniac One"}} className='w-full h-lvh flex flex-col items-center bg-black'>
        {/* ส่วนที่ 1 */}
        <div className='w-10/12 mx-auto flex mt-20 items-center'>
          <div className='flex-1 flex gap-10 text-xl'>
            <a href="#" className='text-white'>Portfolio</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Get In Touch</a>
          </div>
          <div className='flex-1 flex justify-center'>
            <img src={hello} alt="hello" />
          </div>
          <div className='flex-1 text-white flex gap-5 justify-end'>
            <FaGithub/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaLinkedinIn/>
          </div>
        </div>

        {/* ส่วนที่ 2 */}
        <div className='flex-col items-center text-center mt-20 text-3xl'>
          <h1 className='text-white'>Banjarat Wora-anu</h1>
          <h1 className='text-[#01D5A2]'>Freelance Web Devoloper</h1>
          <h1 className='text-white'>Based In Thailand</h1>
        </div>

        {/* ส่วนที่ 3 */}
        <div>
          <img src={profile} alt="profile" className='mt-10 border-[#01D5A2] border-2 rounded-full py-3 px-3'/>
        </div>
      </div>
    </>
  )
}
