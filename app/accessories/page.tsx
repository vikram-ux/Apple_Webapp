import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FindAccessories } from '@/components/Find-accessories'
import AnimatedCardCarousel from '@/components/Accessories-card1';
import AnimatedCardCarousel2 from '@/components/Accessories-card2';
import AnimatedCardCarousel3 from '@/components/Accessories-card3';
import AnimatedCardCarousel4 from '@/components/Accessories-card4';
import AnimatedCardCarousel5 from '@/components/Accessories-card5';
import AnimatedCardCarousel6 from '@/components/Accessories-card6';
import AnimatedCardCarousel7 from '@/components/Accessories-card7';
const accessories = () => {
  return (
    <>
      <div className='p-20 w-full h-full bg-gray-100'>
        <div className="flex flex-col gap-10  md:flex-row text-center sm:text-start justify-between items-center">

          <div className="text flex flex-col gap-4">
            <h2 className='text-4xl font-semibold'>Accessorise in a snap.</h2>
            <h5 className='text-xl text-gray-700 font-bold'>Find a MagSafe case, wallet or charger that’s right for you.</h5>
            <Link href=""><p className='text-blue-500 text-xl'>Shop MagSafe</p></Link>
          </div>

          <div className="image">
            <Image
              src="/support-canvas.png"
              width={1200}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <FindAccessories />

      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Mother’s Day Picks</h1>
      <AnimatedCardCarousel />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Featured iPhone Accessories</h1>
      <AnimatedCardCarousel2 />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Featured iPad Accessories</h1>
      <AnimatedCardCarousel3 />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Apple Watch Straps</h1>
      <AnimatedCardCarousel4 />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Featured Mac Accessories</h1>
      <AnimatedCardCarousel5 />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>Sound Essentials</h1>
      <AnimatedCardCarousel6 />
      <h1 className='text-4xl md:text-6xl font-semibold mt-30 text-center'>AirTag</h1>
      <AnimatedCardCarousel7 />




      <div className="flex justify-center flex-wrap gap-10 p-4 pt-30 bg-gray-100">
        {/* <!-- Box 1 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/4 min-w-[200px] ">
          <span className="font-semibold text-xl text-center">Free delivery and pickup</span>
          <span className="text-gray-600 ">Get free delivery or pick up at your Apple Store.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 2 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-semibold text-xl text-center">Ways to Buy</span>
          <span className="text-gray-600 ">Buy the way thats right for you.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 3 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/4 min-w-[200px] ">
          <span className="font-semibold text-xl text-center">Enjoy Apple Music on us</span>
          <span className="text-gray-600 ">Get 3 months free with selected Beats products.*.</span>
          <span className="text-blue-500">Contact us</span>
        </div>

      </div>
    </>

  )
}

export default accessories
