import React, { useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import BackGroundcircles from './BackGroundcircles';

export default function Hero({profile}) {

    const [text] = useTypewriter({
        words:[ `Hello I'm ${profile.name}!`, 'Coder' , 'Developer' , '<ButLovetoCodeMore/>'],
        loop:true,
        delaySpeed:2000
    })

    const client = createClient({
        projectId: "6j545gpg",
        dataset: "production",
        useCdn: false
      });
      const builder = imageUrlBuilder(client)
  return (
    <div>  
     {/* <div
        className=" container absolute top-0 bottom-0 inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat ">
      </div>   */}
    <div class  Name="relative bg-cover bg-center bg-no-repeat py-8 " style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
      <div className="container relative z-30  pt-20  pb-20">
        <div className="flex flex-col items-center justify-center lg:flex-row">
        <BackGroundcircles/>
          <div className="rounded-full border-8 border-primary shadow-xl">
            <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              {text}
              <Cursor cursorColor='#fff'/>
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">Let's connect</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href={profile.linkdenLink} target="_blank" className="pl-4 cursor-pointer">
                  <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href={profile.instagramLink}  target="_blank"  className="pl-4 cursor-pointer">
                  <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                </a>
              </div>
            </div>
              {/* <Link href={'/blogs'}><div className="buttons text-center md:text-left">
                <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>All Blogs</button>
              </div></Link> */}
          </div>
        </div>
      </div>
    </div></div>
  )
}
