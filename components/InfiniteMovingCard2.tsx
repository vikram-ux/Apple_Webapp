'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const cards = [
  { id: 1, title: 'Sonic Dream Team', desc:'Action', image: '/entertainment-loop-card8.jpg' },
  { id: 2, title: 'Crossword jam+', desc:'word', image: '/entertainment-loop-card9.jpg' },
  { id: 3, title: 'Desney Dreamlight Valley', desc:'Simulation', image: '/entertainment-loop-card10.jpg' },
  { id: 4, title: 'Boggle: Arcade Edition', desc:'Word', image: '/entertainment-loop-card11.jpg' },
  { id: 5, title: 'Cooking Mama: Cuisine!', desc:'Family', image: '/entertainment-loop-card12.jpg' },
  { id: 6, title: 'Snake.io+', desc:'Action', image: '/entertainment-loop-card13.jpg' },
  { id: 7, title: 'Crayola Craete and Play+', desc:'Family', image: '/entertainment-loop-card14.jpg' },
  { id: 8, title: 'OutLanders 2', desc:'Strategy', image: '/entertainment-loop-card15.jpg' },
  { id: 9, title: 'Mini motorways', desc:'strategy', image: '/entertainment-loop-card16.jpg' },
  { id: 10, title: 'crossy Road Castle', desc:'Action', image: '/entertainment-loop-card17.jpg' },
];

export default function InfiniteMovingCards2() {
  const duplicateCards = [...cards, ...cards];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden w-full py-6 bg-gray-100">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 40 : 30, // slow down on hover
          ease: 'linear',
        }}
      >
        {duplicateCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[auto] h-60 rounded-sm flex flex-col overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="w-full h-[200px] object-cover rounded-sm"
            />
            <div className="text-sm font-semibold">
              {card.title}
            </div>
            <div className="text-sm font-semibold">
              {card.desc}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
