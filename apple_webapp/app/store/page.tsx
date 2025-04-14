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
import { Button } from "@/components/ui/button"





const store = () => {
  return (
    <>
      <p className='text-center text-sm p-4'>Get up to 12 months of No Cost EMI Footnote § plus up to ₹8000.00 instant cashback Footnote §§ on selected products with eligible cards. <Link className='text-blue-500' href="">See offers</Link> </p>

      <div className="main w-full h-auto bg-gray-100">

        <div className='w-8/12 h-auto flex flex-col justify-center items-center gap-20 mx-auto'>
          <h1 className='text-5xl text-center font-semibold mt-20'>Store. <span className='text-gray-500'>The best way to buy the products you love.</span></h1>

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

        {/* carousel-container */}
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
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-20'>Help is here. <span className='text-gray-500'>Whenever and however you need it.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center mt-10'>
            <Carousel className='w-full max-w-[1200px] h-[500px] mx-auto'>
              <CarouselContent className="h-full">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
                  <Image
                    src="/store-iphonepro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='hover:scale-95 transition-all duration-300 rounded-md w-6xl'
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macbook.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadair.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-applewatch.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-iphone-16e.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macstudio.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadcart.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-iphone16.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-macbook-pro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-ultra.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-bands.jpeg"
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


        {/* carousel-container3 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-20'>The latest. <span className='text-gray-500'> Take a look at what’s new right now.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-iphonepro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-macbook.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-ipadair.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-applewatch.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-iphone-16e.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/6">
                  <Image
                    src="/store-macstudio.jpeg"
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



        {/* carousel-container4 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-20'>The latest. <span className='text-gray-500'> Take a look at what’s new right now.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                  <Image
                    src="/store-iphonepro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macbook.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadair.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-applewatch.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-iphone-16e.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macstudio.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadcart.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-iphone16.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-macbook-pro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-ultra.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-bands.jpeg"
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


        {/* carousel-container5 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-20'>The latest. <span className='text-gray-500'> Take a look at what’s new right now.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                  <Image
                    src="/store-iphonepro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macbook.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadair.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-applewatch.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-iphone-16e.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macstudio.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadcart.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-iphone16.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-macbook-pro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-ultra.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-bands.jpeg"
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



        {/* carousel-container6 */}
        <div className='carousel-container'>
          <div className='w-9/12 h-auto flex justify-center mx-auto items-center '>
            <h1 className='text-3xl font-semibold mt-20'>The latest. <span className='text-gray-500'> Take a look at what’s new right now.</span></h1>
          </div>
          <div className='w-9/12 h-auto mx-auto flex justify-center items-center  mt-10'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                  <Image
                    src="/store-iphonepro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macbook.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadair.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-applewatch.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-iphone-16e.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-macstudio.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-ipadcart.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-iphone16.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-macbook-pro.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-ultra.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/store-card-40-watch-bands.jpeg"
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


        <div className="educationcard">

        </div>










      </div >
    </>
  )
}

export default store
