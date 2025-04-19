import Link from 'next/link'
import React from 'react'
import { IpadAppleCardsCarousel } from '@/components/IpadAppleCardsCarousel'
import Image from 'next/image'
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
      <IpadAppleCardsCarousel/>


      {/* idpad essentials */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Mac</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Mac accessories</h2>
            <p className="text-gray-600 text-md">Explore keyboards, mice and other essentials.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more ></p>
          </div>
          <img
            src="/mac_essentials.jpg"
            alt="First"
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
        <Image
            src="/mac_essentials2.jpg"
            alt="Second"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Studio Display</h2>
            <p className="text-gray-600 text-md">The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Learn more ></p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ipad
