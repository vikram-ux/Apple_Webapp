import React from 'react'
import Link from 'next/link'
import { IPhoneAppleCardsCarousel } from '@/components/IphoneAppleCardsCarousel'
import Image from 'next/image'
import { AnimatedTestimonialsDemo } from '@/components/Iphone-animated-testimonials'

const iphone = () => {
  return (
    <>
      <p className="text-center text-sm bg-gray-200 p-3">Get iPhone 16 from just ₹6325.00/mo. for up to 12 mo.‡ with No Cost EMI and instant cashback <Link className="text-blue-500" href="/store">Shop ></Link></p>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-around  p-8 rounded-xl ">
        <div className="text-7xl font-bold text-gray-800 mb-4 sm:mb-0">
          iphone
        </div>
        <div className="max-w-xs text-gray-600">
          <p className='text-3xl font-bold'>
            Designed to be loved.
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
            <source src="/iphone.mp4" type="video/mp4" />
            <track
              src="/iphone.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </div>

      {/* iphone apple carousel card */}
      <IPhoneAppleCardsCarousel />

      {/* explore the line up  */}




      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Take a closer look.</h1>
      <Image
        src="/iphonetour1.jpg"
        alt="Picture of the author"
        width={1100}
        height={1100}
        className='mx-auto rounded-4xl'
      />

      {/* why apple is the best place to buy iphone  */}


      {/* iphone essentials */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>iPhone essentials.</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl ">
        {/* First Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              iPhone accessories</h2>
            <p className="text-gray-600 text-md">Explore colourful cases, USB‑C power adapters,
              MagSafe accessories and more.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Shop iPhone eccessories ></p>
          </div>
          <Image
            src="/iPhone-essentials1.jpg"
            alt="First"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col justify-between gap-10 p-4 bg-gray-50 rounded-xl shadow w-full md:w-1/2">
          <Image
            src="/iPhone-essentials2.jpg"
            alt="Second"
            width={500}
            height={500}
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">AirTag</h2>
            <p className="text-gray-600 text-md">Attach one to your keys. Put another in your
              backpack. If they’re misplaced, just use the Find My app.</p>
            <p className="text-blue-600 text-md font-semibold mt-5">Buy ></p>
          </div>

        </div>
      </div>


      {/* Made for each other.  */}
      <AnimatedTestimonialsDemo />


      {/* iPhone list  */}
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>iPhone</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 p-6  rounded-2xl mb-30">
        {/* Column 1 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Explore iPhone</h2>
          <p className="text-2xl font-semibold mt-3">Explore All iphone </p>
          <p className="text-2xl font-semibold mt-3">iPhone 16 Pro </p>
          <p className="text-2xl font-semibold mt-3">iPhone 16 </p>
          <p className="text-2xl font-semibold mt-3">iPhone 16e </p>
          <p className="text-2xl font-semibold mt-3">iPad </p>
          <p className="text-2xl font-semibold mt-3">Mac Pro </p>
          <p className="text-2xl font-semibold mt-3">iPhone 15 </p>
          <p className="text-2xl font-semibold mt-3">Keyboard </p>
          <p className="text-2xl font-semibold mt-3">Compare iPhone </p>
          <p className="text-2xl font-semibold mt-3">Switch from Android </p>
        </div>

        {/* Column 2 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Shop iPhone</h2>
          <p className="text-xl font-semibold mt-3">Shop iPhone </p>
          <p className="text-xl font-semibold mt-3">iPhone Accessories </p>
          <p className="text-xl font-semibold mt-3">Apple Trade In</p>
          <p className="text-xl font-semibold mt-3">Ways to Buy</p>
        </div>

        {/* Column 3 */}
        <div className=" bg-white rounded-xl ">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">More from iPhone</h2>
          <p className="text-xl font-semibold mt-3">iPhone Support</p>
          <p className="text-xl font-semibold mt-3">AppleCare+ for iPhone</p>
          <p className="text-xl font-semibold mt-3">iOS 18</p>
          <p className="text-xl font-semibold mt-3">Apple Intelligence</p>
          <p className="text-xl font-semibold mt-3">Apps by Apple</p>
          <p className="text-xl font-semibold mt-3">iPhone Privacy</p>
          <p className="text-xl font-semibold mt-3">iCloud+</p>
          <p className="text-xl font-semibold mt-3">Wallet</p>
          <p className="text-xl font-semibold mt-3">Siri</p>
        </div>
      </div>


    </>
  )
}

export default iphone
