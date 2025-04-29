import React from 'react'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { AppleCardsCarouselDemo } from "@/components/Apple_carousel_cart"
import { Apple_store } from "@/components/Apple_store"
import { Apple_experience } from "@/components/Apple_experience"
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
const store = () => {
  return (
    <>
      <p className='text-center text-sm p-4'>Get up to 12 months of No Cost EMI Footnote § plus up to ₹8000.00 instant cashback Footnote §§ on selected products with eligible cards. <Link className='text-blue-500' href="">See offers</Link> </p>

      <div className="main w-full h-auto bg-gray-100">

        <div className='w-8/12 h-auto flex flex-col justify-center items-center gap-20 mx-auto'>
          <h1 className='text-5xl text-center font-semibold mt-20'>Store. <span className='text-gray-500'>The best way to buy the products you love.</span></h1>
          {/* apple tool carousel  */}
          <div className='flex justify-center items-center'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-mac.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-iphone.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-ipad.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-applewatch.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-airpods.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-airtag.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-appletv.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-homepod.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-accessories.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>

              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        </div>

        {/* carousel-container 1 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-30'>The latest. <span className='text-gray-500'> Take a look at what’s new right now.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent >
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-white font-bold">iPhone 16 Pro</h1>
                      <p className="text-md text-red-500 font-medium">Apple Intelligence∆</p>
                      <p className="text-sm text-gray-200">From ₹119900.00‡ </p>
                      <div className="flex gap-4">

                      </div>
                    </div>
                    <Image
                      src="/store-iphonepro.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-black font-bold">MacBook Air

                      </h1>
                      <p className="text-md text-black font-medium">Apple Intelligence Footnote ∆</p>
                      <p className="text-sm text-black">From ₹99900.00 Footnote ‡</p>

                    </div>
                    <Image
                      src="/store-macbook.png"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-black font-bold">iPad Air

                      </h1>
                      <p className="text-md text-blackfont-medium">Apple Intelligence Footnote ∆</p>
                      <p className="text-sm text-black">From ₹59900.00 Footnote ‡</p>

                    </div>
                    <Image
                      src="/store-ipadair.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-black font-bold">Apple Watch Series 10</h1>
                      <p className="text-md text-black font-medium">Thinstant classic.</p>
                      <p className="text-sm text-black">From ₹46900.00 Footnote ‡</p>
                      <div className="flex gap-4">

                      </div>
                    </div>
                    <Image
                      src="/store-applewatch.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>

                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-black font-bold">iPhone 16e</h1>
                      <p className="text-md text-red-500 font-medium">Apple Intelligence∆</p>
                      <p className="text-sm text-black">From ₹59900.00‡ </p>
                      <div className="flex gap-4">

                      </div>
                    </div>
                    <Image
                      src="/store-iphone-16e.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <p className="text-sm text-gray-500 font-medium">SPECIAL OFFERS</p>
                      <h1 className="text-xl text-black font-semibold">
                        Get up to 12 months of No Cost EMI Footnote § plus up to ₹8000.00 instant cashback Footnote §§ on selected products with eligible cards.</h1>

                    </div>
                    <Image
                      src="/store-macstudio.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-black font-bold">Mac Studio</h1>
                      <p className="text-md text-red-500 font-medium">Apple Intelligence∆</p>
                      <p className="text-sm text-black">From ₹214900.00‡ </p>
                      <div className="flex gap-4">

                      </div>
                    </div>
                    <Image
                      src="/store-ipadcart.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-white font-bold">iPad</h1>
                      <p className="text-md text-red-500 font-medium">Loveable. Drawable. Magical.</p>
                      <p className="text-sm text-white">From ₹34900.00‡ </p>
                      <div className="flex gap-4">

                      </div>
                    </div>
                    <Image
                      src="/store-card-iphone16.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-white font-bold">MacBook Pro

                      </h1>
                      <p className="text-md text-red-500 font-medium">Apple Intelligence∆</p>
                      <p className="text-sm text-white">From ₹169900.00‡</p>

                    </div>
                    <Image
                      src="/store-card-40-macbook-pro.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-2xl text-white font-bold">Apple Watch Ultra 2

                      </h1>
                      <p className="text-md text-white font-medium">New finish. Never quit.</p>
                      <p className="text-sm text-white">From ₹89900.00‡</p>

                    </div>
                    <Image
                      src="/store-card-40-watch-ultra.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <p className="text-md text-gray-500 font-medium">Apple Watch Straps</p>
                      <p className="text-2xl text-black font-semibold">Show your true colours.</p>
                    </div>
                    <Image
                      src="/store-card-40-watch-bands.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>

              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        </div>


        {/* carousel-container2 */}
        <AppleCardsCarouselDemo />


        {/* carousel-container3 */}
        <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
          <h1 className='text-3xl font-semibold mt-30'> The Apple Store difference. <span className='text-gray-500'>Even more reasons to shop with us.</span></h1>
        </div>
        <Apple_store />

        {/* carousel-container4 */}
        {/* StoreAccessories */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-30'>Accessories. <span className='text-gray-500'>Essentials that pair perfectly with your favourite devices.</span></h1>
          </div>
          <div className='w-full max-w-6xl mx-auto px-4 mt-10'>
            <Carousel>
              <CarouselContent >
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-full">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-3xl text-black font-semibold mt-10">In with the new.</h1>
                      <p className="text-xl text-black">The accessories you love.
                        In a fresh mix of colours.</p>
                      {/* <p className="text-sm text-black">From ₹119900.00‡ </p> */}

                    </div>
                    <Image
                      src="/store-accessories1.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      sizes='100vw'
                      className='w-full h-auto hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories2.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">iPhone 16 Pro Max Silicone Case with MagSafe - Peony</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹4900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories3.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">iPhone 16 Clear Case with MagSafe</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹4900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories4.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">14mm Aquamarine Sport Band -M/L</h1>
                      <p className="text-sm text-black  ml-5">MRP 4500.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories5.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">49mm Natural Titanium Milanese Loop - Medium</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹24500.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories6.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">iPhone 16 Silicon Case - Lake Green</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹3900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories7.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">iPhone  FineWoven Wallet with MagSafe – Deep Blue</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹5900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories8.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Mac Keyboard for iPad Air 11" (M3) - US English</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹26900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories9.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Smart Folio for iPad (A16) - Watermelon</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹8500.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/store-accessories10.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Apple Pencil Pro</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹11900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-3xl text-black font-semibold mt-10">Explore All Accessories</h1>

                    </div>
                    <Image
                      src="/store-accessories11.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        </div>


        {/* carousel-container5 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-30'>Loud and clear. <span className='text-gray-500'>Unparalleled choices for rich, high-quality sound.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent >
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className='relative'>
                    <div className="absolute inset-0 flex flex-col top-4 left-4 z-10 gap-1">
                      <h1 className="text-3xl text-black font-semibold mt-10">Get 3 months of Apple Music free.</h1>
                      <p className="text-xl text-black">Included with the purchase of selected Apple devices.</p>
                      {/* <p className="text-sm text-black">From ₹119900.00‡ </p> */}

                    </div>
                    <Image
                      src="/music1.jpeg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='hover:scale-95 transition-all duration-300 rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music2.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">AirPods 4 with Active Noise Cancellation</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹17900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music3.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Airpods Pro 2</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹24900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music4.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Powerbeats Pro 2 — High-Performance Earbuds — Electric Orange</h1>
                      <p className="text-sm text-black  ml-5">MRP 29900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music5.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">AirPods Max - Midnight</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹59900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music6.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">HomePod mini - Orange</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹10900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music7.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink</h1>
                      <p className="text-sm text-black  ml-5">MRP ₹22900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 flex">
                  <div className='relative bg-white h-full rounded-md'>

                    <Image
                      src="/music8.jpeg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                      className='hover:scale-95 transition-all duration-300 rounded-md ml-10 mr-10 mt-20 mix-blend-multiply'
                    />

                    <div className="absolute flex flex-col bottom-10 gap-5">
                      <h1 className="text-xl text-black font-semibold ml-5">Beats Pill — Wireless Bluetooth® Speaker — Champagne Gold
                      </h1>
                      <p className="text-sm text-black  ml-5"> MRP ₹16900.00 (Incl. of all taxes)</p>

                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        </div>


        {/* carousel-container6 */}
        <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
          <h1 className='text-3xl font-semibold mt-30'> The Apple experience. <span className='text-gray-500'>Do even more with Apple products and services.</span></h1>
        </div>
        <Apple_experience />


        {/* studen and educator  */}
        <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
          <h1 className='text-3xl font-semibold mt-30'> Special stores. <span className='text-gray-500'>Exclusive savings for students and educators.
          </span></h1>
        </div>
        <ThreeDCardDemo />

      </div >
    </>
  )
}

export default store
