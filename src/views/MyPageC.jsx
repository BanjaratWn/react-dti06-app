import React from "react";
import image1 from "./../assets/imgC/image1.png";
import image2 from "./../assets/imgC/image2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function MyPageC() {
  return (
    <>
      <div className="min-h-screen bg-[#000c58] text-white">
        <div className="flex justify-between items-center px-12 py-5 bg-[#060135]">
          <h1
            style={{ fontFamily: "bebas neue" }}
            className="text-3xl tracking-wide"
          >
            BANJARAT WORA-ANU
          </h1>
          <div style={{ fontFamily: "inter" }} className="flex gap-10">
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="flex items-start justify-between w-10/12 mx-auto mt-20 pb-15">
          <div>
            <h1 style={{ fontFamily: "bebas neue" }} className="text-8xl">
              HI, I AM <br /> BANJARAT W.
            </h1>
            <p
              style={{ fontFamily: "prompt" }}
              className="text-[#c7c7c7] mt-5 text-xl"
            >
              {" "}
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย <br />
              ที่มีความหลงไหลในการสร้าง
              เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </p>
            <div className="mt-10 flex items-center gap-3">
              <button
                style={{ fontFamily: "prompt" }}
                className="text-[#0a0a0a] font-bold bg-[#7a99e9] bg-b px-7 py-3 rounded-full"
              >
                CONTACT ME •
              </button>
              <a href="#" className="bg-[#222222] p-4 rounded-full">
                <FaLinkedinIn className="text-[#7a99e9]" />
              </a>
              <a href="#" className="bg-[#222222] p-4 rounded-full">
                <FaGithub className="text-[#7a99e9]" />
              </a>
            </div>
          </div>
          <div className="w-150">
            <img src={image2} alt="image1" />
          </div>
          
        </div>

        <hr className="text-gray-600 w-11/12 mx-auto pb-20"/>

        <div className="flex justify-between w-10/12 mx-auto items-start gap-10 pb-5">
          <h1 style={{ fontFamily: "bebas neue" }} className="text-8xl">
            ABOUT ME
          </h1>
          <div style={{ fontFamily: "prompt" }} className="max-w-2xl">
            <p className="text-white text-2xl">
              ดิฉันเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน
              อยู่ในกรุงเทพฯกำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
              มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
            </p>
            <p className="text-[#c7c7c7] text-xl mt-5">
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
              มีความกระตือรือร้นและอยากรู้อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ
              React.js และการออกแบบเว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม
              ดิฉันชอบเล่นโยคะ ถ่ายภาพ และเล่นเกม FIFA, Diablo
              กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </p>
            <div className="mt-10 flex items-center gap-3">
              <button
                style={{ fontFamily: "prompt" }}
                className="text-black font-bold bg-[#7a99e9] bg-b px-7 py-3 rounded-full"
              >
                DOWNLOAD RESUME •
              </button>
              <a href="#" className="bg-[#222222] p-4 rounded-full">
                <FaLinkedinIn className="text-[#7a99e9]" />
              </a>
              <a href="#" className="bg-[#222222] p-4 rounded-full">
                <FaGithub className="text-[#7a99e9]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-350 flex items-center justify-center mx-auto pb-20">
          <img src={image1} alt="image2" />
        </div>

        <hr className="text-gray-600 w-11/12 mx-auto pb-20"/>

        <div className="flex justify-between w-10/12 mx-auto items-start gap-10 pb-5">
          <h1 style={{ fontFamily: "bebas neue" }} className="text-8xl">
            MY CAPABILITIES
          </h1>
          <div style={{ fontFamily: "prompt" }} className="max-w-2xl pb-15">
            <p className="text-gray-400 text-xl">
              ดิฉันมองมองหาโอกาสใหม่ๆ อยู่เสมอ ทั้งกสรพัฒนาฟอนต์เอนต์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
            </p>
            <p style={{ fontFamily: "inter" }} className="text-white text-xl mt-10 flex gap-5">
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">HTML</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">CSS</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">JAVASCRIPT</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">FLUTTER</p>
            </p>
            <p style={{ fontFamily: "inter" }} className="text-white text-xl mt-5 flex gap-5">
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">DART</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">IoT</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">REACT</p>
              <p className="border-2 border-[#484848] px-10 py-4 rounded-full">DATABASE</p>
            </p>
          </div>
        </div>
        
        <hr className="text-gray-600 w-11/12 mx-auto pb-20"/>

        <div className="flex justify-between w-10/12 mx-auto items-start gap-10 pb-5">
          <h1 style={{ fontFamily: "bebas neue" }} className="text-8xl">
            MY EXPERIENCE
          </h1>
          <div style={{ fontFamily: "prompt" }} className="max-w-2xl pb-15">
            <div style={{ fontFamily: "manrope"}} className="flex justify-between items-center">
              <p className="text-2xl text-white">Freelance Developer</p>
              <p className="text-xl text-[#c7c7c7]">Nov 2023 - Present</p>
            </div>
            <p className="text-[#c7c7c7] text-xl mt-5 flex gap-5">
              พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยได้ React.js ทํางานร่วมกันกับ ออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจปรับปรุงความเร็วในการโหลด เว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
            </p>
            <div style={{ fontFamily: "manrope" }} className="flex justify-between items-center mt-7">
              <p className="text-2xl text-white">Front-End Intern</p>
              <p className="text-xl text-[#c7c7c7]">Sep 2023 - Nov 2023</p>
            </div>
            <p className="text-[#c7c7c7] text-xl mt-5 flex gap-5">
              พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
              ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
              ทํางานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
            </p>
          </div>
        </div>

        <hr className="text-gray-600 w-11/12 mx-auto pb-20"/>

        <div className="flex justify-between w-10/12 mx-auto items-start gap-10 pb-5">
          <div>
            <h1 style={{ fontFamily: "bebas neue" }} className="text-8xl">
              LET'S CONNECT
            </h1>
            <p className="text-gray-400 mt-5 text-xl">
              Say hello at <span className="text-gray-300">s6752410019@sau.ac.th</span> <br />
              For more info. here's my <span className="text-gray-300">resume.</span>
            </p>
            <div className='flex gap-6 text-2xl mt-10'>
              <FaLinkedinIn className="text-[#7a99e9]"/>
              <FaGithub className="text-[#7a99e9]"/>
              <FaXTwitter className="text-[#7a99e9]"/>
              <FaInstagram className="text-[#7a99e9]"/>
            </div>
          </div>
          <div className="max-w-2xl w-full">
            <div>
              <label style={{ fontFamily: "manrope"}} className="block text-sm mb-2 text-gray-400">Name</label>
              <input
                type="text"
                className="w-full bg-[#060135] rounded-md p-3  focus:border-indigo-400"
              />
            </div>
            <div className="mt-3">
              <label style={{ fontFamily: "manrope"}} className="block text-sm mb-1 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full bg-[#060135] rounded-md p-3  focus:border-indigo-400"
              />
            </div>
            <div className="mt-3">
              <label style={{ fontFamily: "manrope"}} className="block text-sm mb-1 text-gray-400">Subject</label>
              <input
                type="text"
                className="w-full bg-[#060135] rounded-md p-3  focus:border-indigo-400"
              />
            </div>
            <div className="mt-3">
              <label style={{ fontFamily: "manrope"}} className="block text-sm mb-1 text-gray-400">Message</label>
              <textarea
                rows="4"
                className="w-full bg-[#060135] rounded-md p-3  focus:border-indigo-400"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-5 pb-5">
          <button
            style={{ fontFamily: "manrope" }}
            className="text-[#0a0a0a] font-bold bg-[#7a99e9] bg-b px-7 py-3 rounded-full"
            >
              SUBMIT
          </button>
        </div>

        <hr className="text-gray-600 w-11/12 mx-auto pb-10"/>

        <div style={{ fontFamily: "manrope" }}>
          <p className="text-[#c7c7c7] text-center pb-5">
            © 2025 Created by SAU-Dev-Team
          </p>
        </div>

      </div>
    </>
  );
}
