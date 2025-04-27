'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'Apple Pencil (USB-C)',
    description: 'MRP ₹7900.00 (Incl. of all taxes)',
    image: '/accessories-carousel17.png',
  },
  {
    title: 'Magic Keyboard Folio for iPad (A16)',
    description: 'MRP ₹24900.00 (Incl. of all taxes)',
    image: '/accessories-carousel18.png',
  },
  {
    title: 'Smart Folio for iPad (A16) - Sky',
    description: 'MRP ₹8500.00 (Incl. of all taxes)',
    image: '/accessories-carousel19.png',
  },
  {
    title: 'Apple Pencil Pro',
    description: 'MRP ₹11900.00 (Incl. of all taxes)',
    image: '/accessories-carousel20.png',
  },
  {
    title: 'Magic Keyboard for iPad Air 11" (M3)',
    description: 'MRP ₹26900.00 (Incl. of all taxes)',
    image: '/accessories-carousel21.png',
  },
  {
    title: 'Smart Folio for iPad Air 11"  (M3) - Sage',
    description: 'MRP ₹8500.00 (Incl. of all taxes))',
    image: '/accessories-carousel22.png',
  },
  {
    title: 'Magic Keyboard for iPad Pro 13" (M4) - White',
    description: 'MRP ₹33900.00 (Incl. of all taxes)',
    image: '/accessories-carousel23.png',
  },
  {
    title: 'Smart Folio for iPad Pro 13" (M4) - Denim',
    description: 'MRP ₹10900.00 (Incl. of all taxes)',
    image: '/accessories-carousel24.png',
  },
  {
    title: 'Smart Folio for iPad mini (A17 Pro) - Light Violet',
    description: 'MRP ₹6500.00 (Incl. of all taxes)',
    image: '/accessories-carousel25.png',
  },
];

export default function AnimatedCardCarousel3() {
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
