import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // Array of 9 images
  const images = [
    // "/home_Apple_TV_master.jpg",
    // "/home_Apple_Tv_sugar.jpg",
    // "/home_Apple_TV_foundation.jpg",
    // "/home_Apple_TV_Wolfs.jpg",
    // "/home_Apple_TV_Silo.jpg",
    "/apple_tv.avif",
    "/home_Apple_TV_innocent.jpg",
    // "/home_Apple_TV_hello.jpg", 
    // "/home_Apple_TV_murderbot.webp",
   
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((imgSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                  <Image
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
