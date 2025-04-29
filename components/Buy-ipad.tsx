"use client";
import { Carousel } from "@/components/ui/buy-mac";

export function Buyipad() {
  const slideData = [
    {
      title: <p className="text-2xl">
      Monthly payment options available. <br />
      <span className="text-gray-700"> Choose the easy way to finance with convenient monthly payment options.</span>      
      </p>
    //   button: "Explore Component",
      
    },
    {
      title: <p className="text-2xl">Save with Apple Trade in.<br /><span className="text-gray-700">Get credit towards your next iPad when you trade in an eligible device at an Apple Store. </span> </p>,
    //   button: "Explore Component",
      
    },
    {
    
      title:  <p className="text-2xl">Save on a new ipad with education pricing.<br /><span className="text-gray-700">Available to university students and educators.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
      title: <p className="text-2xl">Get flexible delivery and easy pickup.<br /><span className="text-gray-700"> Get free delivery or pickup at your Apple Store.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Personalise your ipad for free.<br /><span className="text-gray-700">Engrave your new iPad with a mix of emoji, initials, name and numbers.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Shop with an iPad specialist.<br /><span className="text-gray-700">Shop one-to-one with a Specialist. Online or in a store.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Meet your new ipad with personal Setup.<br /><span className="text-gray-700">Jump into online sessions with a Specialist to set up your iPad and discover new features.</span> </p>,
    //   button: "Explore Component",
      
    },
    
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
