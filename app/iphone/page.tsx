"use client"
import React from 'react'
import Link from 'next/link'
import { IPhoneAppleCardsCarousel } from '@/components/IphoneAppleCardsCarousel'
import Image from 'next/image'
import { AnimatedTestimonialsDemo } from '@/components/Iphone-animated-testimonials'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaMobileAlt, FaCreditCard, FaTruck, FaUser } from 'react-icons/fa';
import { Plus } from 'lucide-react';

const iphone = () => {


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
              <Image src="/iphone16pro.png" alt="iPhone 16 Pro" width={500} height={500} className="w-60 h-80 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
              <h3 className="text-xl font-semibold">iPhone 16 Pro</h3>
              <p className="text-sm">The ultimate iPhone.</p>
              <p className="text-sm">From ₹119900.00 <br /> or ₹9825.00/mo. for 12 mo.</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/a18pro.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">A18 Pro chip with 6-core GPU</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/ipcamera.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 33 hours video playback3</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/iphonecam1.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Pro camera system</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Our most advanced 48MP Fusion camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">5x Telephoto camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">48MP Ultra Wide camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Visual intelligence, to learn about your surroundings11</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* iPhone 16 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/iphone16.png" alt="iPhone 16" width={200} height={400} className="w-60 h-80 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-300"></div>
              </div>
              <h3 className="text-xl font-semibold">iPhone 16</h3>
              <p className="text-sm">A total powerhouse.</p>
              <p className="text-sm">From ₹79900.00 <br /> or ₹6325.00/mo. for 12 mo.</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto " src="/a18img.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">A18 chip with 5-core GPU</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/ipcamera.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 27 hours video playback3</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/iphonecam2.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Advanced dual-camera system</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">48MP Fusion camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">2x Telephoto</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">12MP Ultra Wide camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Visual intelligence, to learn about your surroundings11</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* iPhone 16e */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/iphone16e.png" alt="iPhone 16e" width={200} height={400} className="w-52 h-72 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold">
                iPhone 16e <span className="text-red-500 text-sm">New</span>
              </h3>
              <p className="text-sm">Latest iPhone. Greatest price.</p>
              <p className="text-sm">From ₹59900.00 <br /> or ₹4992.00/mo. for 12 mo.</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/a18img.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">A18 chip with 5-core GPU</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <p className='font-extrabold'>____</p>
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 26 hours video playback3</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">

                  <Image className="mx-auto" src="/iphonecam3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">2‑in‑1 camera system</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">48MP Fusion camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">2x Telephoto</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">__</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Visual intelligence, to learn about your surroundings11</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* iPhone 15 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-4 p-6 shadow rounded-2xl bg-white">
              <Image src="/iphone15.png" alt="iPhone 16e" width={200} height={400} className="w-52 h-72 object-cover" />
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold">
                iPhone 15
              </h3>
              <p className="text-sm">As amazing as ever.</p>
              <p className="text-sm">From ₹69900.00* <br />or ₹5825.00/mo. for 12 mo.◊</p>
              <div className="flex space-x-4">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full">Learn more</a>
                <a href="#" className="px-4 py-2 text-blue-600 underline">Buy ›</a>
              </div>
              <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
              <div className="specification flex flex-col gap-16">

                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/a16img.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">A18 chip with 5-core GPU</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <p className='font-extrabold'>____</p>
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                </div>
                <div className="text-black w-1/2 mx-auto">
                  <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/batery.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">Up to 26 hours video playback3</p>
                </div>
                <div className="text-black  w-1/2 mx-auto">
                  <Image className="mx-auto" src="/iphonecam4.png" alt="image" width={50} height={50} />
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Dual-camera system</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">48MP Main camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">2x Telephoto</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">Ultra Wide camera</p>
                  <p className="text-sm text-gray-500  mx-auto font-semibold mt-3">__</p>
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>



      <h1 className='text-4xl md:text-6xl font-semibold mt-30 p-6'>Take a closer look.</h1>
      <Image
        src="/iphonetour1.jpg"
        alt="Picture of the author"
        width={1100}
        height={1100}
        className='mx-auto rounded-4xl'
      />

      {/* why apple is the best place to buy iphone  */}
      <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Apple is the best place to buy iPhone.</h2>
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
