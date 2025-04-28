"use client"

import React from 'react'
import Link from 'next/link'
import { AppleWatchCardsCarousel } from '@/components/AppleWatchCardCarousel'
import Image from 'next/image'
import { AnimatedTestimonialsDemo } from '@/components/Apple-Watch-testimonials'
import { FaMobileAlt, FaCreditCard, FaTruck, FaUser } from 'react-icons/fa';
import { Plus } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";


const watch = () => {

  const benefits = [
    {
      icon: <FaMobileAlt size={30} />,
      title: "Save with Apple Trade In.",
      description: "Get ₹17000.00–₹67500.00 in credit towards iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.",
    },
    {
      icon: <FaCreditCard size={30} />,
      title: "Monthly payment options are available.",
      description: "Choose the easy way to finance with convenient monthly payment options.",
    },
    {
      icon: <FaTruck size={30} />,
      title: "Get flexible delivery and easy pickup.",
      description: "Get free delivery or pickup at your Apple Store.",
    },
    {
      icon: <FaUser size={30} />,
      title: "Shop one-to-one with a Specialist.",
      description: "Online or in a store.",
    },
  ];



  return (
    <>
      <p className="text-center text-sm bg-gray-200 p-3">Get up to 12 months of No Cost EMI‡ plus ₹4000.00 instant cashback◊ on selected Apple Watch models with eligible cards. <Link className="text-blue-500" href="/store">Shop &gt;</Link></p>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-around  p-8 rounded-xl ">
        <div className="text-7xl font-bold text-gray-800 mb-4 sm:mb-0">
          Apple Watch
        </div>
        <div className="max-w-xs text-gray-600">
          <p className='text-2xl'>
            The ultimate device
            for a healthy life.
          </p>
        </div>
      </div>

      {/* video banner  */}
      <div className="w-full max-w-6xl px-4 h-auto flex justify-center items-center mx-auto mt-6">
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            loop
            autoPlay
            muted
            preload="none"
          >
            <source src="/appleWatch.mp4" type="video/mp4" />
            <track
              src="/appleWatch.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </div>


      {/* apple watch carousel card  */}
      <AppleWatchCardsCarousel />


      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Explore the line-up.</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* iPhone 16 Pro */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/applewatch1.png" alt="iPhone 16 Pro" width={500} height={500} className="w-60 h-80 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
              <h3 className="text-xl font-semibold">Apple Watch SE</h3>
              <p className="text-sm">All the essentials.Light on price.</p>
              <p className="text-sm">From ₹119900.00 <br />From ₹24900.00*</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />

              <div className="specification flex flex-col gap-16">
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/case1.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">44 mm or 40 mm aluminium case</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                <Image className="mx-auto" src="/watch-ratina-display.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Retina display Up to 1,000 nits</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchsip1.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">S8 SiP — Siri Find iPhone</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Up to 18 hours19 Low Power Mode —</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchblood.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">— High and low heart rate notifications Irregular rhythm notifications2 Low cardio fitness notifications —</p>

                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* iPhone 16 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/applewatch2.png" alt="iPhone 16" width={200} height={400} className="w-60 h-80 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-300"></div>
              </div>
              <h3 className="text-xl font-semibold">Apple Watch Series 10</h3>
              <p className="text-sm">Thinnest. Biggest display.17 Advanced health features.</p>
              <p className="text-sm">From ₹46900.00*</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto " src="/case1.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">46 mm or 42 mm aluminium or titanium case</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                <Image className="mx-auto" src="/watch-ratina-display.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Always-On Retina display Up to 2,000 nits</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchsip2.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">S10 SiP Double tap gesture Faster on-device Siri Precision Finding for iPhone13</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 18 hours20 Up to 36 hours in Low Power Mode20 Fast charging21</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchblood.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Blood Oxygen app18 ECG app1 High and low heart rate notifications Irregular rhythm notifications2 Low cardio fitness notifications</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* iPhone 16e */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/applewatch3.png" alt="iPhone 16e" width={200} height={400} className="w-52 h-72 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold">
              Apple Watch Ultra 2
              </h3>
              <p className="text-sm">The ultimate sports and adventure watch..</p>
              <p className="text-sm">From ₹89900.00*</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/case2.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">49 mm titanium case</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watch-ratina-display.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Always-On Retina display Up to 3,000 nits</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchsip3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">S9 SiP Double tap gesture Faster on-device Siri Precision Finding for iPhone13</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 36 hours15 Up to 72 hours in Low Power Mode15 Fast charging21</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/watchblood.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Blood Oxygen app18 ECG app1 High and low heart rate notifications Irregular rhythm notifications2 Low cardio fitness notifications</p>
                 
                </div>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>



      {/* Why Apple is the best place to buy Apple Watch. */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Apple is the best place to buy Apple Watch.</h2>
          <a href="#" className="text-blue-600 font-semibold text-lg">Shop iPhone &rarr;</a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-left shadow hover:shadow-lg transition">
                <div className="text-gray-800 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
                <div className="mt-6 flex justify-end">
                  <button className="bg-black text-white rounded-full p-2">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Apple Watch essentials. */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Apple Watch essentials.</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              show your true colours.</h2>
            <p className="text-blue-600 text-md font-semibold mt-5">Shop Apple Watch straps&gt;</p>
          </div>
          <Image
            src="/apple-watch-essentials1.jpg"
            alt="First"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <Image
            src="/apple-watch-essentials2.jpg"
            alt="Second"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Magic runs in the family.</h2>
            <p className="text-gray-600 text-md">Explore all AirPods models and find the best ones for you.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more&gt;</p>
          </div>

        </div>
      </div>

      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Made for each other..</h1>
      <AnimatedTestimonialsDemo />

      {/* iphone list  */}



      {/* iphone list  */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Watch</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 p-6  rounded-2xl mb-30">
        {/* Column 1 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Explore Watch</h2>
          <p className="text-2xl font-semibold mt-3">Explore All the Apple Watch </p>
          <p className="text-2xl font-semibold mt-3">Apple Watch Series 10 </p>
          <p className="text-2xl font-semibold mt-3">Apple Watch Ultra 2 </p>
          <p className="text-2xl font-semibold mt-3">Apple Watch SE </p>
          <p className="text-2xl font-semibold mt-3">Apple Watch Nike </p>
          <p className="text-2xl font-semibold mt-3">Mac Pro </p>
          <p className="text-2xl font-semibold mt-3">Compare Watch </p>
          <p className="text-2xl font-semibold mt-3">Why Apple Watch</p>
        </div>

        {/* Column 2 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Shop watch</h2>
          <p className="text-xl font-semibold mt-3">Shop Apple Watch </p>
          <p className="text-xl font-semibold mt-3">Apple Watch Straps </p>
          <p className="text-xl font-semibold mt-3">Apple Watch Accessories</p>
          <p className="text-xl font-semibold mt-3">Ways to Buy</p>
        </div>

        {/* Column 3 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">More from Watch</h2>
          <p className="text-xl font-semibold mt-3">Apple Watch Support</p>
          <p className="text-xl font-semibold mt-3">AppleCare+ </p>
          <p className="text-xl font-semibold mt-3">watchOS 11</p>
          <p className="text-xl font-semibold mt-3">Apple Watch For Your Kids</p>
          <p className="text-xl font-semibold mt-3">Apps by Apple</p>

        </div>
      </div>
    </>
  )
}

export default watch
