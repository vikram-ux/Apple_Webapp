import Link from 'next/link'
import React from 'react'
import { IpadAppleCardsCarousel } from '@/components/IpadAppleCardsCarousel'
import Image from 'next/image'
import { AnimatedTestimonialsDemo } from '@/components/Mac-animated-testimonials'
import { Buyipad } from '@/components/Buy-ipad'



const ipad = () => {
  return (
    <>
      <p className="text-center text-sm bg-gray-200 p-3">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <Link className="text-blue-500" href="/store">Shop ></Link></p>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-around  p-8 rounded-xl ">
        <div className="text-7xl font-bold text-gray-800 mb-4 sm:mb-0">
          ipad
        </div>
        <div className="max-w-xs text-gray-600">
          <p className='text-2xl'>
            Touch, draw and type
            on one magical device.
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
            <source src="/ipad.mp4" type="video/mp4" />
            <track
              src="/ipad.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </div>

      {/* ipad carousel  */}
      <IpadAppleCardsCarousel />


      {/* idpad essentials */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>iPad essentials</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              iPad pencil</h2>
            <p className="text-gray-600 text-md">Dream it up. Jot it down.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more ></p>
          </div>
          <Image
            src="/ipad-pencil.jpeg"
            alt="First"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <Image
            src="/ipad-keyboard.png"
            alt="Second"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Keyboard or iPad</h2>
            <p className="text-gray-600 text-md">Type it out. Take with you.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more ></p>
          </div>

        </div>
      </div>

      {/* why apple is best place to buy ipad.  */}
      <h1 className='text-4xl w-3xl md:text-6xl font-semibold mt-30 p-6'>Why Apple is the best
        place to buy iPad.</h1>
      <Buyipad />


      {/* significant other */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Singnificant others.</h1>
      <AnimatedTestimonialsDemo />




      {/* ipad list  */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>iPad</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 p-6  rounded-2xl mb-30">
        {/* Column 1 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Explore Mac</h2>
          <p className="text-2xl font-semibold mt-3">Explore All ipad </p>
          <p className="text-2xl font-semibold mt-3">iPad Air </p>
          <p className="text-2xl font-semibold mt-3">iPad Pro </p>
          <p className="text-2xl font-semibold mt-3">Mac mini </p>
          <p className="text-2xl font-semibold mt-3">iPad </p>
          <p className="text-2xl font-semibold mt-3">Mac Pro </p>
          <p className="text-2xl font-semibold mt-3">Apple pencil </p>
          <p className="text-2xl font-semibold mt-3">Keyboard </p>
          <p className="text-2xl font-semibold mt-3">Compare iPad </p>
          <p className="text-2xl font-semibold mt-3">Why iPad </p>
        </div>

        {/* Column 2 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Shop iPad</h2>
          <p className="text-xl font-semibold mt-3">Shop iPad </p>
          <p className="text-xl font-semibold mt-3">iPad Accessories </p>
          <p className="text-xl font-semibold mt-3">Ways to Buy</p>
        </div>

        {/* Column 3 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">More from iPad</h2>
          <p className="text-xl font-semibold mt-3">iPad Support</p>
          <p className="text-xl font-semibold mt-3">AppleCare+ for iPad </p>
          <p className="text-xl font-semibold mt-3">iPadOS 18</p>
          <p className="text-xl font-semibold mt-3">Apple Intelligence</p>
          <p className="text-xl font-semibold mt-3">Apps by Apple</p>
          <p className="text-xl font-semibold mt-3">iCloud+</p>
          <p className="text-xl font-semibold mt-3">Education</p>
        </div>
      </div>



    </>
  )
}

export default ipad
