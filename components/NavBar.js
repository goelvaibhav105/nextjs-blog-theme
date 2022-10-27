import React, { useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import { motion } from 'framer-motion'

const NavBar = ({ profile }) => {
  const [hideMenu, setHideMenu] = useState(true)

  const client = createClient({
    projectId: "6j545gpg",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  return (
    <div className='bg-[#5540af] '>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <motion.div className=''

              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}

              transition={{
                duration: 1
              }}
            >

              <a className='flex' href="/">
                <img src={builder.image(profile.image).width(200).url()} className="h-10 rounded-full mr-5" alt="author" />
                <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
              </a>
            </motion.div>
            <motion.div className="hidden md:block"
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}

              transition={{
                duration: 1
              }}
            >
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>



                <li className="group pl-6">

                  <a href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">DETAILS</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blog</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </motion.div>
            <motion.div className="block lg:hidden "
            
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 1
            }}
            >
              {hideMenu ? <button onClick={() => { setHideMenu(false) }}>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button> :
                <button onClick={() => { setHideMenu(true) }}>
                  <i className="bx bx-menu text-4xl text-white"></i>
                </button>}
              {!hideMenu && <div className='absolute  pr-7 pb-2 bg-white z-50'>
                <ul className="">

                  <li className="group pl-3 pt-2">

                    <a href="/#about"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">About</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-3 pt-2">

                    <a href="/#services"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Services</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-3 pt-2 ">

                    <a href="/#portfolio"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Portfolio</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>



                  <li className="group pl-3 pt-2">

                    <a href="/#work"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">DETAILS</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-3 pt-2">

                    <a href="/#statistics"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Statistics</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-3 pt-2">

                    <a href="/#blog"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Blog</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-3 pt-2">

                    <a href="/#contact"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Contact</a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                </ul>
              </div>}
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar