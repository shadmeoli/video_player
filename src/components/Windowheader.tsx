import React from 'react'

export default function Windowheader() {
  return (
    <div className='w-full h-14 bg-opacity-40 absolute top-0 z-10 bg-black backdrop-blur-xl flex flex-row justify-between items-center font-primary px-10'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='font-bold text-white'>Picky Blinders</h1>
        <h1 className='font-light text-white text-sm'>Season 1 (Eps 1)</h1>
      </div>
    </div>
  )
}
