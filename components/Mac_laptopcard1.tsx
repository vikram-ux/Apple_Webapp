"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
export function Mac_laptopcard1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl border">
      <CardItem translateZ="100" className="w-full">
          <Image
            src="/maclaptop1.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mx-auto "
        >
          MacBook Air 13” and 15” <br />
          M4 chip
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
        >
          Strikingly thin and fast so you can work, play or create anywhere.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-800 text-sm max-w-sm mt-5 dark:text-neutral-300 mx-auto"
        >
          From ₹99900.00*
        </CardItem>
       
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-bold text-black "
          >
            Buy →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Learn more
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
