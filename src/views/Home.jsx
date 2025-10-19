import React from 'react'
import img1 from './../assets/imgH/img1.png'
import img2 from './../assets/imgH/img2.png'
import img3 from './../assets/imgH/img3.png'
import img4 from './../assets/imgH/img4.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div style={{fontFamily: 'Roboto Mono'}} className='w-full min-h-screen bg-[#91FFB2]' >
            {/* ส่วนบน */}
            <div className='w-9/12 mx-auto flex py-10 justify-between'>
                {/* ส่วนที่ 1 */}
                <div className='flex flex-col mr-20'>
                    <div>
                        <h1 className='text-5xl font-bold text-[#333333]'>
                            My Web Design by
                        </h1>
                        <h1 className='text-5xl font-bold text-[#333333]'>
                            React + TailwindCSS
                        </h1>
                    </div>
                    <div className='mt-7'>
                        <span>
                            Lorem ipsum dolor sit, <br />
                            amet consectetur adipisicing elit. <br />
                            Temporibus alias cupiditate id <br />
                            repellendus quisquam amet! <br />
                            Labore corrupti facilis doloremque esse. <br />
                        </span>
                    </div>
                    <div className='mt-10'>
                        <a href="#" className='bg-[#333333] text-white rounded-full py-2 px-5 howver:bg-[#111111]'>
                            Follow Me
                        </a>
                    </div>
                    <div className='mt-20 flex'>
                        <Link to="/MyPageA">
                            <img src={img1} alt="img1" className='w-70 h-min mr-10' />
                        </ Link>
                        <Link to="/MyPageB">
                            <img src={img2} alt="img2" className='w-70.5 h-min' />
                        </ Link>
                    </div>
                </div>
                {/* ส่วนที่ 2 */}
                <div>
                    <Link to="/MyPageC">
                        <img src={img4} alt="img4" className='w-50.5'/>
                    </Link>
                </div>
                {/* ส่วนที่ 3 */}
                <div>
                    <Link to="/MyPageD">
                        <img src={img3} alt="img3" className='w-30.5 h-min'/>
                    </Link>
                </div>
            </div>
            {/* ส่วนล่าง */}
            <div className='flex flex-col items-center justify-center text-lg py-2'>
                <span>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
                <span>Create by Yuu</span>
                <span>Copyright © 2025 HE HE HE</span>
            </div>
        </div>
    </>
  )
}
