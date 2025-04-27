'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'Studio Display',
    description: 'MRP ₹159900.00 (Incl. of all taxes)',
    image: '/accessories-carousel34.png',
  },
  {
    title: 'Magic Keyboard with Touch ID and Numeric Keypad',
    description: 'MRP ₹19500.00 (Incl. of all taxes)',
    image: '/accessories-carousel35.png',
  },
  {
    title: 'Magic Mouse',
    description: 'MMRP ₹9500.00 (Incl. of all taxes)',
    image: '/accessories-carousel36.png',
  },
  {
    title: 'Magic Trackpad',
    description: 'MRP ₹14500.00 (Incl. of all taxes)',
    image: '/accessories-carousel37.png',
  },
  {
    title: 'USB-C to MagSafe 3 Cable (2m) - Sky Blue',
    description: 'MRP ₹4900.00 (Incl. of all taxes)',
    image: '/accessories-carousel38.png',
  },
  {
    title: 'USB-C Digital AV Multiport Adapter',
    description: 'MRP ₹6900.00 (Incl. of all taxes)',
    image: '/accessories-carousel39.png',
  },
  {
    title: '240W USB-C Charge Cable (2m)',
    description: 'MRP ₹2900.00 (Incl. of all taxes)',
    image: '/accessories-carousel40.png',
  },
  {
    title: 'Thunderbolt 5 (USB‑C) Pro Cable (1m)',
    description: 'MRP ₹6900.00 (Incl. of all taxes)',
    image: '/accessories-carousel41.png',
  },
  {
    title: '70W USB-C Power Adapter',
    description: 'MRP ₹5800.00 (Incl. of all taxes)',
    image: '/accessories-carousel42.png',
  },
  {
    title: 'Polishing Cloth',
    description: 'MRP ₹1900.00 (Incl. of all taxes)',
    image: '/accessories-carousel43.png',
  },
];

export default function AnimatedCardCarousel5() {
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
