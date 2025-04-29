"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
export function MacCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Get to know Mac.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence and macOs",
    title: "Easy to use, Easy to love.",
    src: "/maccarousel1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Performance and battery life",
    title: "Go fast. Go far.",   
    src: "/maccarousel2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Mac and iPhone",
    title: "Dream team.",
    src: "/maccarousel3.jpg",
    content: <DummyContent />,
  },

  {
    category: "compatibility",
    title: "Mac runs your favorite apps.",
    src: "/maccarousel4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Privacy and security",
    title: "Your buisness is nobody else's.",
    src: "/maccarousel5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Durability",
    title: "Built to stand the test of time.",
    src: "/maccarousel6.jpg",
    content: <DummyContent />,
  },
  {
    category: "Apple Values",
    title: "Our value drive everything we do.",
    src: "/maccarousel8.jpg",
    content: <DummyContent />,
  },
 
];
