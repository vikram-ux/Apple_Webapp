"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export default function HeroSectionTwo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-auto"
    >
      <div className="">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative mt-20"
        >
          <div className="w-full overflow-hidden ">
            <Image
              src="/home_iphone_hero_image.jpg"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
            <div className="absolute aspect-[2/9] inset-0 flex flex-col items-center z-10 gap-3 mt-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold">iPhone 16 Pro</h1>
              <p className="text-sm sm:text-base md:text-xl text-white">Build for Apple Intelligence</p>
              <div className="button_container flex gap-3 sm:gap-4">
                <Button className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base bg-white text-black hover:bg-white/90">
                  Learn More
                </Button>
                <Button className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base bg-white text-black hover:bg-white/90">
                  Buy
                </Button>
              </div>
            </div>



          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

