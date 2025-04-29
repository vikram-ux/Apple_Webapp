"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from 'next/image'
import { CarouselPlugin } from "@/components/Home_slidehow"
import HeroSectionOne from "@/components/hero-section-demo-1"
import HeroSectionTwo from "@/components/hero-section-2";
import HeroSectionThree from "@/components/her-section-3";
// import HeroSectionFour from "@/components/hero-section-4";
// import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <p className="text-center text-sm py-3">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <Link className="text-blue-500" href="/store">Shop</Link></p>
      <HeroSectionOne />
      <HeroSectionTwo />
      <HeroSectionThree />

      {/* grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 ">
        {/* first grid box1 */}
        <div className="bg-gray-100 w-full p-8 text-center h-auto flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-5xl font-bold">Apple Watch</h2>
            <p className="text-2xl text-md ">Series 10</p>
            <p className="text-2xl text-md ">Thinstant Classic</p>
            <div className="mt-7"><Button>Learn More</Button>&nbsp; &nbsp;<Button>Buy</Button></div>
          </div>
          <Image
            src="/home_appleWatch.jpg"
            alt="Picture of the author"
            width={900}
            height={500}
            className="object-cover mix-blend-multiply"
          />
        </div>
        {/* second grid box2 */}
        <div className="bg-gray-100  w-full p-8 text-center h-auto flex flex-col gap-20 ">
          <div className="flex flex-col gap-1">
            <h2 className="text-5xl font-bold">Mac Book Air</h2>
            <p className="text-2xl text-md ">Skyblue Coloure</p>
            <p className="text-2xl text-md ">Sky high performance with M4</p>
            <div className="mt-7"><Button>Learn More</Button>&nbsp; &nbsp;<Button>Buy</Button></div>
          </div>
          <Image
            src="/home_macbook.jpeg"
            alt="Picture of the author"
            width={900}
            height={500}
            className="object-cover mix-blend-multiply z-"
          />
        </div>
        {/* second grid box3 */}
        <div className="bg-gray-100 w-full p-8 text-center h-auto flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">iPad Air</h2>
            <p className="text-xl text-md ">Now supercharge by the M3 chip</p>
            <p className="text-xl text-md ">Thinstant Classic</p>
            <div className="mt-7"><Button>Learn More</Button>&nbsp; &nbsp;<Button>Buy</Button></div>
          </div>
          <Image
            src="/home_ipad_image.png"
            alt="Picture of the author"
            width={900}
            height={500}
            className="object-cover mix-blend-multiply"
          />
        </div>
        {/* second grid box4 */}
        <div className="bg-gray-100 w-full p-8 text-center h-auto flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">Apple Watch</h2>
            <p className="text-xl text-md ">M4 Max and M3 Ultra.</p>
            <p className="text-xl text-md ">Choose your superpower.</p>
            <div className="mt-7"><Button>Learn More</Button>&nbsp; &nbsp;<Button>Buy</Button></div>
          </div>
          <Image
            src="/home_macstudio.jpg"
            alt="Picture of the author"
            width={900}
            height={500}
            className="object-cover mix-blend-multiply"
          />
        </div>
        {/* second grid box5 */}
        <div className="bg-gray-100 w-full p-8 text-center h-auto flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">iPad Pro</h2>
            <p className="text-xl text-md ">Unbelievably thin. Incredibly powerful.</p>
            {/* <p className="text-xl text-md ">Choose your superpower.</p> */}
            <div className="mt-7"><Button>Learn More</Button>&nbsp; &nbsp;<Button>Buy</Button></div>
          </div>
          <Image
            src="/home_Apple-ipad-pro-hero.jpg"
            alt="Picture of the author"
            width={900}
            height={500}
            className="object-cover mix-blend-multiply"
          />

        </div>
        {/* second grid box6*/}
        <div className="bg-gray-100 w-full p-8 text-center h-auto flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">Trade In</h2>
            <p className="text-xl text-md ">Upgrade and save. it's that easy.</p>
            <p className="text-xl text-md ">Choose your superpower.</p>
            <div className="mt-7"><Button>Get your estiamge</Button></div>
          </div>
          <Image
            src="/home_iPhone-trade-in.webp"
            alt="Picture of the author"
            width={1000}
            height={500}
            className="object-cover mix-blend-multiply"
          />
        </div>
      </div>


      {/*slideshow carousel */}
      <div className="w-full h-[500px] overflow-hidden flex justify-center items-center">
        <CarouselPlugin />
      </div>

      {/* footer section */}
      {/* <Footer /> */}

    </>
  );
}
