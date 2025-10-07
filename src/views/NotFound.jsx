import React from 'react'
import { MdCancel } from "react-icons/md";

export default function NotFound() {
  return (
    <>
        <div className='mt-30'>
            <h1 className='text-3xl text-center font-bold text-red-600'>
                <MdCancel className='mx-auto text-4xl' />
                ไม่พบหน้าที่คุณค้นหา
                <br />กรุณาลองใหม่
                <br />หรือตรวจสอบ URL
            </h1>
        </div>
    </>
  )
}
