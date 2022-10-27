import React from 'react'
import { motion } from 'framer-motion'

export default function BackGroundcircles() {
  return (
    <div className='lg:hidden absolute flex justify-center items-center top-20 '>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>      
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 '/>      
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 '/>           
      <div className='absolute border border-[purple] rounded-full h-[600px] w-[600px] opacity-20 mt-52 animate-pulse'/>  
      {/* <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 '/>       */}
    </div>
  )
}
