import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AppleStyleCarousel from '@/components/Tv-home'
const tvhome = () => {
  return (
    <>
      <div className='bg-gray-100'>

        {/* first hero */}
        <div className="flex flex-col items-center justify-center p-6 gap-6 max-w-5xl mx-auto">
          {/* Image */}
          <div className="w-full">
            <Image
              src="/watch_hero.jpg" // place your image in public folder
              alt="Example"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          {/* Text */}
          <div className="w-full text-center pt-10">
            <h1 className="text-8xl font-bold mb-4">The future hits home.</h1>
            <p className="text-gray-500 text-2xl font-bold">
              Simply connect your favourite devices and transform your house into a remarkably smart, convenient and entertaining home. Elevate movie night with theatre-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks and thermostats using Siri. All with the security and privacy of Apple.
            </p>
          </div>
        </div>


        {/* flex box  */}
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
          {/* Card 1 */}
          <div className="flex flex-col h-fit w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-10 text-center bg-black">
              <h5 className="text-xl font-semibold mb-2 text-white">HomePod</h5>
              <h2 className="text-3xl font-bold mb-2 text-white">Profound sound.</h2>
              <p className="text-gray-100 text-xl font-semibold">₹32900.00*.</p>
              <p className="text-gray-600 text-sm p-6"><Button className='text-white bg-blue-500 text-xl'>buy</Button><span className='text-blue-500 ml-5 text-xl'>Learn more</span></p>
            </div>
            <div className="w-full h-screen">
              <Image src="/tv-home-card1.jpg" width={500} height={500} alt="Card One" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* card2  */}
          <div className="flex flex-col h-fit w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-10 text-center">
              <h5 className="text-xl font-semibold mb-2">HomePod mini</h5>
              <h2 className="text-3xl font-bold mb-2 ">Surprising sound for its size.</h2>
              <p className="text-gray-600 text-xl font-semibold">₹10900.00*</p>
              <p className="text-gray-600 text-sm p-6"><Button className='text-white bg-blue-500 text-xl'>buy</Button><span className='text-blue-500 ml-5 text-xl'>Learn more</span></p>
            </div>
            <div className="w-full h-screen">
              <Image src="/tv-home-card2.jpg" width={500} height={500} alt="Card One" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* card3  */}
          <div className="flex flex-col h-fit w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-10 text-center">
              <h5 className="text-xl font-semibold mb-2 ">Apple TV 4K</h5>
              <h2 className="text-3xl font-bold mb-2 ">The Apple experience.
                Cinematic in every sense..</h2>
              <p className="text-gray-600 text-xl font-semibold">Starting from ₹14900.00*</p>
              <p className="text-gray-600 text-sm p-6"><Button className='text-white bg-blue-500 text-xl'>buy</Button><span className='text-blue-500 ml-5 text-xl'>Learn more</span></p>
            </div>
            <div className="w-full h-screen">
              <Image src="/tv-home-card3.jpg" width={500} height={500} alt="Card One" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* card4  */}
          <div className="flex flex-col h-fit w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-10 text-center">
              <h5 className="text-xl font-semibold mb-2 ">Home app</h5>
              <h2 className="text-3xl font-bold mb-2 ">The foundation
                for a smarter home..</h2>
              <p className="text-gray-600 text-xl font-semibold">₹32900.00*.</p>
              <p className="text-gray-600 text-sm p-6"><span className='text-blue-500 text-xl'>Learn more</span></p>
            </div>
            <div className="w-full h-screen">
              <Image src="/tv-home-card4.jpg" width={500} height={500} alt="Card One" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* carousel card  */}
        <h1 className="text-3xl font-bold text-center pt-10">Apple-Style Product Carousel</h1>
        <AppleStyleCarousel />


        {/* video banner  */}
        <h1 className="md:text-6xl text-3xl md:w-1/2 font-bold mx-auto text-center pt-30">Watch, sing and play. On the big screen.</h1>
        <div className="w-full max-w-6xl px-4 h-auto flex justify-center items-center mx-auto mt-6">
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              loop
              autoPlay
              muted
              preload="none"
            >
              <source src="/tv-smarthome.mp4" type="video/mp4" />
              <track
                src="/tv-smarthome.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        </div>





        <div className="flex justify-center flex-wrap gap-4 p-4 pt-30 bg-gray-100">
        {/* <!-- Box 1 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-semibold text-5xl text-center">tv+</span>
          <span className="text-gray-600 pb-10">Stream award-winning Apple Originals on every screen.</span>
          <Button>try it free</Button>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 2 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-semibold text-5xl text-center">Music</span>
          <span className="text-gray-600 pb-4">Access all your favourite songs and sing along with lyrics view.</span>
          <Button>try it free</Button>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 3 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-semibold text-5xl text-center">Arcade</span>
          <span className="text-gray-600 pb-4">Over 200 incredibly fun games. No ads. No in-app purchases.</span>
          <Button>try it free</Button>
          <span className="text-blue-500">Contact us</span>
        </div>

      </div>



        <div className="flex justify-center flex-wrap gap-4 p-4 pt-20 bg-gray-100">
        {/* <!-- Box 1 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Free delivery and pickup</span>
          <span className="text-gray-600">Get free delivery or pickup at your Apple Store.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 2 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Ways to buy</span>
          <span className="text-gray-600">Choose the way that′s right for you.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 3 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Get help buying</span>
          <span className="text-gray-600">Have a question? Call a Specialist or chat online. Call 000800 040 1966.</span>
          <span className="text-blue-500">Contact us</span>
        </div>
      
      </div>

        <hr className=" border-t border-gray-300" />

        <div className='p-20 flex flex-col gap-5'>
          <p className='text-gray-600 text-sm'>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
          <ul className='flex flex-col gap-2'>
            <li className='text-gray-600 text-xs'>1. New subscribers only. ₹99.00/month after free trial. Plan automatically renews until cancelled. Terms apply.</li>
            <li className='text-gray-600 text-xs'>2. New subscribers only. ₹119.00/month after free trial. Plan automatically renews until cancelled. Terms apply.</li>
            <li className='text-gray-600 text-xs'>3. New subscribers only. ₹99.00/month after free trial. Plan automatically renews until cancelled. Terms apply.</li>
          </ul>
            <p className='text-gray-600 text-sm'>“BIRDS OF A FEATHER” written by Billie Eilish, FINNEAS.</p>
        </div>

        <hr className=" border-t border-gray-300" />






















      </div>
    </>
  )
}

export default tvhome
