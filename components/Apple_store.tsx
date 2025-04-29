"use client";
import { Carousel } from "@/components/ui/apple_store";

export function Apple_store() {
  const slideData = [
    {
      title: <p>No Cost EMI. Footnote § Plus Instant Cashback. Footnote §§,</p>
    //   button: "Explore Component",
      
    },
    {
      title: <p><span className="text-blue-500">Exchange your smartphone,</span> get ₹5000.00-₹67500.00 in credit towards a new one. Footnote *</p>,
    //   button: "Explore Component",
      
    },
    {
    
      title: "Customise your Mac.",
    //   button: "Explore Component",
      
    },
    {
      title: <p>Make them yours. <span className="text-purple-500">Engrave a mix of emoji, names and numbers for free.</span></p>,
    //   button: "Explore Component",
      
    },
    {
      title: <p><span className="text-green-700">Enjoy free delivery,or easy pickup</span>  from an Apple Store</p>,
    //   button: "Explore Component",
      
    },
    {
      title: <p><span className="text-blue-500">Trade in your eligible Mac, Apple Watch or iPad for instant credit.</span>  Footnote * In-store only.</p>,
    //   button: "Explore Component",
      
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
