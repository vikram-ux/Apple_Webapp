'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const cards = [
  
  {
    title: 'AirTag',
    description: 'MRP ₹3490.00 (Incl. of all taxes)',
    image: '/accessories-carousel53.png',
  },
  {
    title: 'AirTag 4 pack',
    description: 'MRP ₹11900.00 (Incl. of all taxes)',
    image: '/accessories-carousel54.png',
  },
  {
    title: 'AirTag FineWoven Key Ring – Blackberry',
    description: 'MRP ₹3900.00 (Incl. of all taxes)',
    image: '/accessories-carousel55.png',
  },
 
];

export default function AnimatedCardCarousel7() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-12">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* Scrollable Card Container */}
      <motion.div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar 
             min-h-[640px] py-12 overflow-visible"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }}
>
  {cards.map((card, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300
                 w-[90%] sm:w-[80%] md:w-[48%] lg:w-[32%] h-[600px]"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Image
        src={card.image}
        alt={card.title}
        width={500}
        height={500}
        className="w-full h-[400px] object-cover"
      />
      <div className="p-6 flex flex-col justify-center items-center text-center flex-grow">
        <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </motion.div>
  ))}
</motion.div>

    </div>
  );
}
