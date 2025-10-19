import React from 'react'
import logo from './../assets/imgD/logo.png'
import bg1 from './../assets/imgD/bg1.png'
import bg2 from './../assets/imgD/bg2.png'
import bg3 from './../assets/imgD/bg3.png'
import bg4 from './../assets/imgD/bg4.png'
import bread1 from './../assets/imgD/bread1.png'
import bread2 from './../assets/imgD/bread2.png'
import bread3 from './../assets/imgD/bread3.png'
import bread4 from './../assets/imgD/bread4.png'
import bread5 from './../assets/imgD/bread5.png'
import bread6 from './../assets/imgD/bread6.png'
import img1 from './../assets/imgD/img1.png'
import img2 from './../assets/imgD/img2.png'
import img3 from './../assets/imgD/img3.png'
import img4 from './../assets/imgD/img4.png'
import img5 from './../assets/imgD/img5.png'
import img6 from './../assets/imgD/img6.png'
import img7 from './../assets/imgD/img7.png'
import img8 from './../assets/imgD/img8.png'
import img9 from './../assets/imgD/img9.png'
import img10 from './../assets/imgD/img10.png'
import img11 from './../assets/imgD/img11.png'
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function MyPageD() {
  return (
    <>
      <div className="h-[780px] bg-[url(bg-[url('/images/bg.jpg')])] bg-cover bg-center" style={{backgroundImage: `url(${bg1})`}}>
        <div className='pb-65'>
          <div className='w-11/12 mx-auto flex justify-between items-center py-5'>
            <img className='w-20' src={logo} alt="logo" />
            <div style={{fontFamily: 'poppins'}} className='text-white w-10/12 flex gap-10 text-xl font-semibold'>
              <a className='text-[#e9bd8c]' href="#">Home</a>
              <a href="#">Block</a>
              <a href="#">Contact Us</a>
              <a href="#">Services</a>
            </div>
          </div>
          <div className='w-11/12 mx-auto mt-30'>
            <p style={{fontFamily: 'inter'}} className='text-[#e9bd8c] text-2xl font-semibold'>Delicious Cafe</p>
            <h1 style={{fontFamily: 'sansita swashed'}} className='text-white text-7xl leading-tight'>Sweet Treats, <br /> Perfect Eats</h1>
          </div>
          <div className='w-11/12 mx-auto mt-20 flex items-center gap-10'>
            <button style={{ fontFamily: "inter" }} className='bg-[#933C24] text-xl text-white px-8 py-3 rounded-sm font-semibold'>
              Shop Now
            </button>
            <div>
              <p style={{fontFamily: 'inter'}} className='w-11/12 text-[#e9bd8c] whitespace-nowrap text-xl font-semibold'>Learn More</p>
            </div>
          </div>
        </div>

        <div className='pb-10'>
          <h1 style={{fontFamily: 'sansita swashed'}} className='text-6xl text-center font-bold mt-10'>Top Product</h1>
          <div className='w-11/12 mx-auto grid grid-cols-3 gap-5 mt-30'>
            {/* bread1 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread1} alt="bread1" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
            {/* bread2 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread2} alt="bread2" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
            {/* bread3 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread3} alt="bread3" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
            {/* bread4 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread4} alt="bread4" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
            {/* bread5 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread5} alt="bread5" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
            {/* bread6 */}
            <div className='relative rounded-xl overflow-hidden'>
              <img className='w-full rounded-xl' src={bread6} alt="bread6" />
              <div style={{fontFamily: 'inter'}} className='absolute bottom-0 left-5 right-0 text-white p-4'>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-3xl'>40 Baht</p>
                  <button className='w-10 h-10 border border-[#f5f5f5] rounded-full flex items-center justify-center mr-9 text-xl'>i</button>
                </div>
                <div className='flex items-center justify-between mt-10 mb-5'>
                  <h2 className='text-3xl'>Whole Grain <br /> Bread</h2>
                  <button className='bg-[#933C24] text-white px-4 py-2 rounded-sm text-2xl mr-4'>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative h-screen bg-contain bg-center bg-no-repeat' style={{backgroundImage: `url(${bg2})`}}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 style={{fontFamily: 'sansita swashed'}} className="text-7xl drop-shadow-lg text-[#933C24] leading-tight">
              20% Off Your <br /> First Order
            </h1>
            <p style={{fontFamily: 'inter'}} className="text-2xl mt-5 drop-shadow w-1/3 text-[#5d5d5d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet <br />laudantium inventore.
            </p>
            <button style={{fontFamily: 'inter'}} className="mt-10 bg-[#933C24] hover:bg-[#7c311d] text-[#f9f6f1] font-semibold px-8 py-3 rounded-xl text-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className='w-10/12 mx-auto text-center pb-3 mt-10'>
          <h1 style={{fontFamily: 'sansita swashed'}} className='text-7xl font-bold'>Explore More</h1>
          <div style={{fontFamily: 'poppins'}} className='text-3xl text-[#5d5d5d] font-semibold mt-20 flex justify-center gap-10'>
            <a className='border-b-4 border-[#933C24]' href="#">Cake</a>
            <a href="#">Muffins</a>
            <a href="#">Croissant</a>
            <a href="#">Bread</a>
            <a href="#">Tart</a>
            <a href="#">Favorite</a>
          </div>
        </div>

        <hr className="text-[#b9b9b9] w-11/12 mx-auto pb-30"/>

        <div className='w-11/12 mx-auto grid grid-cols-3 gap-5 '>
          <img src={img1} alt="img1"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
          <img src={img2} alt="img2"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
          <img src={img3} alt="img3"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
          <img src={img4} alt="img4"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
          <img src={img5} alt="img5"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
          <img src={img6} alt="img6"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
        </div>
        
        <div className='relative h-screen bg-contain bg-center bg-no-repeat mt-10' style={{backgroundImage: `url(${bg3})`}}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 style={{fontFamily: 'sansita swashed'}} className="text-7xl drop-shadow-lg text-white leading-tight">
              About us
            </h1>
            <p style={{fontFamily: 'inter'}} className="text-2xl mt-8 drop-shadow w-1/4 text-[#898989]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet laudantium inventore.
            </p>
            <button style={{fontFamily: 'inter'}} className="mt-10 bg-[#933C24] hover:bg-[#7c311d] text-[#f9f6f1] font-semibold px-8 py-3 rounded-xl text-2xl">
              Read More
            </button>
          </div>
        </div>

        <h1 style={{fontFamily: 'sansita swashed'}} className='text-6xl text-center font-bold mt-5 pb-30'>Featured Treats</h1>
        <div style={{fontFamily: 'inter'}} className='w-11/12 mx-auto grid grid-cols-3 gap-5 pb-30'>
          <div>
            <img src={img7} alt="img7"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
            <div className='flex justify-between items-center mt-2 text-2xl font-bold'>
              <h2>Puff Pastry</h2>
              <h2 className='whitespace-nowrap'>8 Baht</h2>
            </div>
          </div>
          <div>
            <img src={img8} alt="img8"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
            <div className='flex justify-between items-center mt-2 text-2xl font-bold'>
              <h2>Doughnuts</h2>
              <h2 className='whitespace-nowrap'>8 Baht</h2>
            </div>
          </div>
          <div>
            <img src={img9} alt="img9"  className='w-full h-100 object-cover rounded-lg shadow-md'/>
            <div className='flex justify-between items-center mt-2 text-2xl font-bold'>
              <h2 >Brownies</h2>
              <h2 className='whitespace-nowrap'>8 Baht</h2>
            </div>
          </div>
        </div>

        <div className='relative h-[730px] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bg4})`}}>
          <div className='w-11/12 mx-auto flex justify-between items-center py-5 text-[#e9bd8d]'>
            <img className='w-30' src={logo} alt="logo" />
            <div className=' w-5/12 flex gap-8 text-2xl font-semibold items-center'>
              <p>Follow us</p>
              <FaFacebook size={50} />
              <FaPinterest size={50} />
              <IoLogoWhatsapp size={50} />
              <AiFillInstagram size={50} />
            </div>
          </div>
          <hr className="text-[#7b6043] w-11/12 mx-auto pb-10"/>
          <div className='w-11/12 mx-auto mt-10 flex justify-between items-start'>
            <div className=' text-white'>
              <h2 style={{fontFamily: 'inter'}} className='text-[#e9bd8d] text-4xl font-semibold mb-3'>About Us</h2>
              <p style={{fontFamily: 'poppins'}} className='text-2xl leading-relaxed mt-3'>02 807-4500 <br />
              info@sau.ac.th <br />
              19/1 Phetkasem Road <br />
              Nongkham Bangkok <br />
              10160</p>
            </div>
            <div className='w-4/12 text-white'>
              <h2 style={{fontFamily: 'inter'}} className='text-[#e9bd8d] text-4xl font-semibold mb-3'>Explore</h2>
              <p style={{fontFamily: 'poppins'}} className='text-2xl leading-relaxed mt-3'>Home <br />
              Blog <br />
              Contact Us <br />
              Services</p>
            </div>
            <div className='w-4/12'>
              <h2 style={{fontFamily: 'poppins'}} className='text-[#e9bd8d] text-4xl font-semibold mb-3'>Recent News</h2>
              <div className='flex gap-3 items-center mt-5 mb-5'>
                <img src={img10} alt="img10" className='' />
                <p style={{fontFamily: 'poppins'}} className='text-[#e9bd8d]'>June 14,2025 <br /> <span style={{fontFamily: 'inter'}} className='text-2xl text-white'>Puff pastry bliss.</span></p>
              </div>
              <div className='flex gap-3 items-center mt-5 mb-5'>
                <img src={img11} alt="img11" className='' />
                <p style={{fontFamily: 'poppins'}} className='text-[#e9bd8d]'>June 14,2025 <br /> <span style={{fontFamily: 'inter'}} className='text-2xl text-white'>Puff pastry bliss.</span></p>
              </div>
            </div>
          </div>
          
          <p style={{fontFamily: 'inter'}} className="text-[#737373] text-xl font-semibold text-center pb-5 mt-40">
            © 2025 Bake House. All rights reserved
          </p>

        </div>
      </div>
    </>
  )
}
