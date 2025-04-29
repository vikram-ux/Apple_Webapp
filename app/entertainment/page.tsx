import React from 'react'
import InfiniteMovingCardsDemo from '@/components/InfiniteMovingCardsDemo'
import InfiniteMovingCards2 from '@/components/InfiniteMovingCard2'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SpotlightPreview } from '@/components/SpotlightPreview'

const entertainment = () => {
  return (
    <>

      <SpotlightPreview />

      <div className='flex justify-evenly items-center bg-[#1A1A1A] text-white p-12'>
        <h1 className='text-5xl font-semibold'>One</h1>
        <p className='text-2xl font-semibold'>Get four services in one and enjoy more for less.</p>
        <button className='border border-amber-50 pl-5 pr-5 pt-2 pb-2 rounded-4xl font-semibold'>Learn more</button>
      </div>
      {/* banenr1  */}
      <div className="w-full max-w-full h-auto flex justify-center items-center bg-gray-100">
        <div className="relative w-full pb-[56.25%] overflow-hidden shadow-xl ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            preload="metadata"
          >
            <source src="/entertainment-video1.mp4" type="video/mp4" />
            <track
              src="/entertainment-video1.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>

          {/* Bottom-left overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 lg:p-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-white">
                <h2 className="text-xl md:text-2xl font-semibold mb-1">Apple TV+</h2>
                <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                  Stream award-winning Apple Originals on every screen.
                </p>
              </div>
              <div className="flex flex-shrink-0 space-x-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200"
                >
                  Try It Free
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* banenr 2  */}

      <div className="w-full max-w-full h-auto flex justify-center items-center bg-gray-100 py-8">
        <div className="relative w-full pb-[56.25%] overflow-hidden shadow-xl rounded-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            preload="metadata"
          >
            <source src="/entertainment-video2.mp4" type="video/mp4" />
            <track
              src="/entertainment-video2.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>

          {/* Bottom-left overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 lg:p-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-white">
                <h2 className="text-xl md:text-2xl font-semibold mb-1">Apple Music</h2>
                <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                  Listen to music you love in
                  spatial audio with Dolby Atmos.2
                </p>
              </div>
              <div className="flex flex-shrink-0 space-x-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200"
                >
                  Try It Free
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* looping carousel  */}
      <InfiniteMovingCardsDemo />


      {/* banner 3  */}

      <div className="w-full max-w-full h-auto flex justify-center items-center bg-gray-100 py-8">
        <div className="relative w-full pb-[56.25%] overflow-hidden shadow-xl rounded-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            preload="metadata"
          >
            <source src="/entertainment-video3.mp4" type="video/mp4" />
            <track
              src="/entertainment-video3.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>

          {/* Bottom-left overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 lg:p-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-white">
                <h2 className="text-xl md:text-2xl font-semibold mb-1">Apple Arcade</h2>
                <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                  Best collection of mobile
                  games for every player.
                </p>
              </div>
              <div className="flex flex-shrink-0 space-x-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200"
                >
                  Try It Free
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* loop carousel  */}
      <InfiniteMovingCards2 />



      {/* offcanvas */}
      <div className=" w-full text-black bg-gray-100 p-6 md:p-8 lg:p-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="pt-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Apple Podcasts</h2>
            <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              Millions of shows, from
              the biggest names to
              the best independents.
            </p>
          </div>
          <div className="flex flex-shrink-0 space-x-3">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200"
            >
              Open the app
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* loop carousel  */}
      <InfiniteMovingCardsDemo />


      {/* service  */}
      <div className="mt-30 p-20 text-center w-full">
        <h5 className="text-6xl font-semibold mb-2 ">One</h5>
        {/* 🔁 Replace text with image grid */}
        <div className="mx-auto">
          <Image
            src="/entertainment-service1.png"
            alt="Service 1"
            width={300}
            height={300}
            className="object-contain mx-auto"
          />
        </div>

        <p className=" text-xl font-semibold w-84 mx-auto">
          Bundle four Apple services. And enjoy more for less.
        </p>

        <p className="text-gray-600 text-sm pt-5">
          <Button className="text-white text-xl">Try it free</Button>
          <span className="font-semibold text-xl ml-5">Learn more</span>
        </p>
      </div>

      <div className='bg-gray-100 text-gray-500 text-xs flex flex-col gap-3 p-10'>
        <p>1. New subscribers only. ₹99.00/month after free trial. Plan automatically renews until cancelled. Terms apply. </p>
        <p>2. Compatible hardware and software are required. Not all content is available in Dolby Atmos.</p>
        <p>3. New subscribers only. ₹119.00/month after free trial. Plan automatically renews until cancelled. Terms apply.</p>
        <p>4. New subscribers only. ₹99.00/month after free trial. Plan automatically renews until cancelled. Terms apply.</p>
        <p>The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</p>
        <hr className="w-full border-t-2 border-gray-300 mx-auto my-6" />

      </div>


    </>
  )
}

export default entertainment
