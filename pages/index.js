import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";

import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

export default function Home({ blogs, profile, skills, goodAt, myDetails, work, statistics }) {
  const client = createClient({
    projectId: "6j545gpg",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <><>

      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>{profile.title} - Developer | Coder </title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link

          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link

          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <div className='sticky top-0 z-50'>
        <NavBar profile={profile} />
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

    </>
      <>
        <div>
          <section>
            <Hero profile={profile} />
          </section>

          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  {profile.name}
                </h4>

                <p className="pt-6 font-body leading-relaxed text-grey-20">
                  {profile.description}
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-2xl text-primary"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">

                    <a href={profile.linkdenLink} target="_blank" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.instagramLink} target="_blank" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                {skills.map((item) => {
                  return (<div className='pt-6'>
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        {item.skill}
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">{item.percentage}%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div className="h-3 rounded-full bg-primary" style={{ "width": `${item.percentage}%` }}></div>
                    </div>
                  </div>)
                })}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here's what I'm good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              End result of my skills
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              {goodAt.map((item) => {
                return (<div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img src={builder.image(item.image).width(200).url()} alt="development icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img src={builder.image(item.image).width(200).url()} alt="development icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>)
              })}
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Check out my Work
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here's what I have done in the past
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              {work.map((item) => {
                return (
                  <a href={item.link} target='_blank' className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <img src={builder.image(item.image).width(200).url()} className="w-full shadow" alt="portfolio image" />
                  </a>)
              })}
            </div>
          </div>

          <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My Details
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here's my all the information
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
              {myDetails.map((item) => {
                return (
                  <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                    <div className="md:w-2/5">
                      <div className="flex justify-center md:justify-start">
                        <span className="shrink-0">
                          <img src={builder.image(item.image).width(200).url()} className="h-auto w-32" alt="company logo" />
                        </span>
                        <div className="relative ml-3 hidden w-full md:block">
                          <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5">
                      <div className="relative flex md:pl-18">
                        <span
                          className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                        <div className="mt-1 flex">
                          <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                          <div className="md:-mt-1 md:pl-8">
                            <span className="block font-body font-bold text-grey-40">{item.duration}</span>
                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                              {item.about}</span>
                            <div className="pt-2">
                              <span className="block font-body text-black">
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
              })}

            </div>
          </div>

          <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
            style={{ "backgroundImage": "url(/assets/img/experience-figure.png)" }} id="statistics">
            <div className="container">
              <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">


                  {statistics.map((item) => {
                    return (
                      <div
                        className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                        <div>
                          <img src={builder.image(item.image).width(200).url()} className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                        </div>
                        <div className="pt-5 md:pl-5 md:pt-0">
                          <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                            {item.title}
                          </h1>
                          <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                            {item.description}
                          </h4>
                        </div>
                      </div>)
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write Blogs
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

                {blogs.map((item) => {
                  return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                    <div><div style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})` }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                      <span
                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                      <span
                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                        More</span>
                    </div>
                      <div className="bg-white py-6 px-5 xl:py-8">
                        <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                        <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                      </div></div>
                  </Link>
                })}
                {/* <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-02.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My personal productivity system</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a>
            <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-03.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My year in review 2020</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a> */}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here's my contact
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            </div>
            {/* <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name" type="text" id="name" />
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Email" type="text" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form> */}
            <div className="flex flex-col pt-6 lg:flex-row">
              <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.phone}
                </p>
              </div>
              <div
                className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.email}
                </p>
              </div>
              <div
                className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Location
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.address}
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-8"
            style={{ "backgroundImage": "url(/assets/img/bg-cta.jpg)" }}>
            <div className="container relative z-30">
              <h3
                className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                Keep <span className="font-bold">up-to-date</span> <br />
                with what I'm up to
              </h3>
              {/* <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text"
              id="email" placeholder="Give me your Email" />
            <button
              className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              Join the club
            </button>
          </form> */}
            </div>
          </div>
        </div><div className="bg-primary">

        </div></></>

    // <div className="home mx-8">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="mx-8">

    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId = "6j545gpg"
    // dataset = "production"
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li className="special-list-item">{children}</li>,
    //   }}
    // />
    //   </div>
    //   <span>I am homepage</span>
    // </div>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "6j545gpg",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const skillsQuery = `*[_type == "skills"]`;
  const skills = await client.fetch(skillsQuery);

  const gootAtQuery = `*[_type == "goodAt"]`;
  const goodAt = await client.fetch(gootAtQuery);

  const myDetailsQuery = `*[_type == "myDetails"]`;
  const myDetails = await client.fetch(myDetailsQuery);

  const workQuery = `*[_type == "work"]`;
  const work = await client.fetch(workQuery);

  const statisticsQuery = `*[_type == "statistics"]`;
  const statistics = await client.fetch(statisticsQuery);

  return {
    props: {
      blogs,
      profile,
      skills,
      goodAt,
      myDetails,
      work,
      statistics
    }
  }
}