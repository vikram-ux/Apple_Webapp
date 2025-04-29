

import React from 'react'
import Link from 'next/link'
import { MacCarousel } from "@/components/MacCarousel"
import { Mactabs } from "@/components/Mactabs"
import Image from 'next/image'
import { Buymac } from '@/components/Buy-mac'
import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo'
import { LampDemo } from '@/components/Lamp'



const mac = () => {
  return (
    <>

      <p className="text-center text-sm bg-gray-200 p-3">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <Link className="text-blue-500" href="/store">Shop</Link></p>
      <LampDemo />

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
            <source src="/mac.mp4" type="video/mp4" />
            <track
              src="/mac.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </div>

      {/* mac carousel  */}
      <MacCarousel />

      {/* specification with apple tool */}
      <div className='h-full relative '>
        <Mactabs />
      </div>


      {/* switch to mac section*/}
      <h1 className='mt-10 text-6xl font-semibold font-sans p-6'>Switch to Mac.</h1>
      <div className='p-20 w-full h-full'>
        <div className="flex flex-col md:flex-row text-center sm:text-start justify-evenly items-center">

          <div className="text flex flex-col gap-4">
            <h1 className='text-7xl font-semibold'>Mac <span> does <span className='bg-blue-400 font-serif'>that.</span></span></h1>
            <p className='text-xl text-gray-700'>See how easy it is to switch to Mac.</p>
            <Link href=""><p className='text-blue-500 text-xl'>Learn more &gt;</p></Link>
          </div>

          <div className="image">
            <Image
              src="/mac_does_that.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              className='mix-blend-multiply'
            />
          </div>
        </div>
      </div>


      {/* why apple is the best */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Why Apple is the best place to buy Mac.</h1>
      <Buymac />

      {/* significant other  */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Significant others.</h1>
      <AnimatedTestimonialsDemo />

      {/* mac essiantal */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Mac</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Mac accessories</h2>
            <p className="text-gray-600 text-md">Explore keyboards, mice and other essentials.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Shop Mac accessories&gt;</p>
          </div>
          <Image
            src="/mac_essentials.jpg"
            alt="First"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Studio Display</h2>
            <p className="text-gray-600 text-md">The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more &gt;</p>
          </div>
          <Image
            src="/mac_essentials2.jpg"
            alt="Second"
            className="mt-4 w-full h-auto object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* mac list  */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Mac</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 p-6  rounded-2xl mb-30">
        {/* Column 1 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Explore Mac</h2>
          <p className="text-2xl font-semibold mt-3">Explore All Mac </p>
          <p className="text-2xl font-semibold mt-3">MacBook Air </p>
          <p className="text-2xl font-semibold mt-3">MacBook Pro </p>
          <p className="text-2xl font-semibold mt-3">Mac mini </p>
          <p className="text-2xl font-semibold mt-3">Mac Studio </p>
          <p className="text-2xl font-semibold mt-3">Mac Pro </p>
          <p className="text-2xl font-semibold mt-3">Displays </p>
          <p className="text-2xl font-semibold mt-3">Compare Mac </p>
          <p className="text-2xl font-semibold mt-3">Compare Mac </p>
          <p className="text-2xl font-semibold mt-3">Switch from PC to Mac </p>
        </div>

        {/* Column 2 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Shop Mac</h2>
          <p className="text-xl font-semibold mt-3">Shop Mac </p>
          <p className="text-xl font-semibold mt-3">Mac Accessories </p>
          <p className="text-xl font-semibold mt-3">Ways to Buy</p>
        </div>

        {/* Column 3 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">More from Mac</h2>
          <p className="text-xl font-semibold mt-3">Mac Support</p>
          <p className="text-xl font-semibold mt-3">AppleCare+ for Mac </p>
          <p className="text-xl font-semibold mt-3">macOS Sequoia</p>
          <p className="text-xl font-semibold mt-3">Apple Intelligence</p>
          <p className="text-xl font-semibold mt-3">Apps by Apple</p>
          <p className="text-xl font-semibold mt-3">Continuity</p>
          <p className="text-xl font-semibold mt-3">iCloud+</p>
          <p className="text-xl font-semibold mt-3">Mac for Business</p>
          <p className="text-xl font-semibold mt-3">Education</p>
        </div>
      </div>

    </>
  )
}

export default mac
