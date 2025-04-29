"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
export function AirPodsCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl p-10 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Get to know AirPods.
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
    category: "Active Noise Cancellation",
    title: "Control what you hear. And what you don’t.",
    src: "/airpods-card1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Personalised Spatial Audio",
    title: "Immersive sound. Fine‑tuned to you.",
    src: "/airpods-card2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hearing Health",
    title: "Minimise your exposure to loud noise.",
    src: "/airpods-card3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Safety",
    title: "Good help is easy to find.",
    src: "/airpods-card4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Magical Experience",
    title: "Simply effortless.",
    src: "/airpods-card4.jpg",
    content: <DummyContent />,
  },
  
];
