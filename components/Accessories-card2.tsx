'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'iPhone 16 Plus Silicone Case with MagSafe – Peony',
    description: 'MRP ₹4900.00 (Incl. of all taxes)',
    image: '/accessories-carousel8.png',
  },
  {
    title: 'iPhone 16 Pro Clear Case with MagSafe',
    description: 'MRP ₹4900.00 (Incl. of all taxes)',
    image: '/accessories-carousel9.png',
  },
  {
    title: 'iPhone 16e Silicone Case – Winter Blue',
    description: 'MRP ₹3900.00 (Incl. of all taxes)',
    image: '/accessories-carousel10.png',
  },
  {
    title: '20W USB-C Power Adapter',
    description: 'MRP ₹1900.00 (Incl. of all taxes)',
    image: '/accessories-carousel11.png',
  },
  {
    title: 'MagSafe Charger (1m)',
    description: 'MRP ₹4500.00 (Incl. of all taxes)',
    image: '/accessories-carousel12.png',
  },
  {
    title: '30W USB-C Power Adapter',
    description: 'MRP ₹3800.00 (Incl. of all taxes)',
    image: '/accessories-carousel13.png',
  },
  {
    title: '240W USB-C Charge Cable (2m)',
    description: 'MRP ₹2900.00 (Incl. of all taxes)',
    image: '/accessories-carousel14.png',
  },
  {
    title: 'iPhone FineWoven Wallet with MagSafe – Deep Blue',
    description: 'MRP ₹5900.00 (Incl. of all taxes)',
    image: '/accessories-carousel15.png',
  },
  {
    title: 'Beats USB-C to USB-C Woven Cable (1.5 m / 5 ft) – Rapid Red',
    description: 'MRP ₹1900.00 (Incl. of all taxes)',
    image: '/accessories-carousel16.png',
  },
];

export default function AnimatedCardCarousel2() {
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
