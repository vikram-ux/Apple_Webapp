import React from 'react'
import Link from 'next/link'
import { AppleWatchCardsCarousel } from '@/components/AppleWatchCardCarousel'
import Image from 'next/image'
import { AnimatedTestimonialsDemo } from '@/components/Apple-Watch-testimonials'


const watch = () => {
  return (
    <>
      <p className="text-center text-sm bg-gray-200 p-3">Get up to 12 months of No Cost EMI‡ plus ₹4000.00 instant cashback◊ on selected Apple Watch models with eligible cards. <Link className="text-blue-500" href="/store">Shop ></Link></p>

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

      

      {/* Why Apple is the best place to buy Apple Watch. */}



      {/* Apple Watch essentials. */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Apple Watch essentials.</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              show your true colours.</h2>
            <p className="text-blue-600 text-md font-semibold mt-5">Shop Apple Watch straps ></p>
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
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more ></p>
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
