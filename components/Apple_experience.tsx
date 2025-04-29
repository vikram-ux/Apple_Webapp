"use client";

import { Carousel } from "@/components/ui/apple_experience";
export function Apple_experience() {
  const slideData = [
    {
      title: (
        <p>
          Apple experience. <br />
          <span className="text-gray-500 text-xl">
            Write, express yourself and get things done effortlessly. ∆.
          </span>
        </p>
      ),
      button: "Explore Component",
      src: "/store_experience1.jpeg",
    },
    {
      title: (
        <p className="text-black text-2xl">
          Get 3 months of Apple TV+ free when you buy an Apple device.°
        </p>
      ),
      button: undefined, // Explicitly set button to undefined if not needed
      src: "/store_experience2.jpeg",
    },
    {
      title: (
        <p className="text-black text-2xl">
          For Apple Services. One easy Subscription.
        </p>
      ),
      button: undefined,
      src: "/store_experience3.jpeg",
    },
    {
      title: (
        <p className="text-black text-2xl">
          We&apos;ve got you covered. <br />
          <span className="text-gray-500 text-xl">
            AppleCare+ now comes with unlimited repairs for accidental damage
            protection.
          </span>
        </p>
      ),
      button: undefined,
      src: "/store_experience4.jpeg",
    },
    {
      title: (
        <p className="text-gray-500 text-xl">
          See how one app can control your entire home.°
        </p>
      ),
      button: undefined,
      src: "/store_experience5.jpeg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
