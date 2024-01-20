// import React from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";



export default function Windowheader({ title }) {

  const navigate = useNavigate();

  console.log(`Now playing : ${title}`)
  function goBack() {
    navigate("/")
  }

  return (
    <div className='w-full h-14 bg-opacity-20 absolute top-0 z-10 bg-black backdrop-blur-xl flex flex-row justify-between items-center font-primary px-10'>
      <button className="flex flex-row space-x-2 items-center hover:bg-white/30 p-2 transition duration-300 ease-in-out rounded-full" onClick={goBack}>
        <AiOutlineArrowLeft />
        <h1 className="font-bold">Back</h1>
      </button>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='font-bold text-white'>Picky Blinders</h1>
        <h1 className='font-light text-white text-sm'>Season 1 (Eps 1)</h1>
      </div>
    </div>
  )
}
