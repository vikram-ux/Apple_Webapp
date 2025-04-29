"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function StoreAccessories() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">    
            <h1 className='max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>Help is here. <span className='text-gray-500'>Whenever and however you need it.</span></h1>      
      <Carousel items={cards} />
    </div>
  );
}

// Removed unused DummyContent component to resolve the error.

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/store-accessories1.jpeg",
    content:"",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/store-accessories2.jpeg",
    content:"",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/store-accessories3.jpeg",
    content: "",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/store-accessories4.jpeg",
    content: "",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/store-accessories5.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories6.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories7.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories8.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories9.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories10.jpeg",
    content: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/store-accessories11.jpeg",
    content: "",
  },
];
