"use client";
import { Carousel } from "@/components/ui/buy-mac";

export function Buymac() {
  const slideData = [
    {
      title: <p className="text-2xl">
      Monthly payment options available. <br />
      <span className="text-gray-700"> Choose the easy way to finance with convenient monthly payment options.</span>      
      </p>
    //   button: "Explore Component",
      
    },
    {
      title: <p className="text-2xl">Cusomize Your Mac. <br /><span className="text-gray-700">choose Your Chip, memory, storage even colour.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
    
      title:  <p className="text-2xl">Save With education pricing.<br /><span className="text-gray-700">studend and education save exclusively  through the Apple Store.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
      title: <p className="text-2xl">Get flexible delivery and easy pickup.<br /><span className="text-gray-700"> Get free delivery or pickup at your Apple Store.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Meet your new Mac with Personal Setup.<br /><span className="text-gray-700">Jump into online sessions with a Specialist to set up your Mac and discover new features.</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Save with Apple Trade In.<br /><span className="text-gray-700">Get credit towards your next Mac when you trade in an eligible device at an Apple Store.8</span> </p>,
    //   button: "Explore Component",
      
    },
    {
        title: <p className="text-2xl">Explore a shopping experience designed around you.<br /><span className="text-gray-700">Use the Apple Store app to get a more personal way to shop.</span> </p>,
    //   button: "Explore Component",
      
    },
    
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
