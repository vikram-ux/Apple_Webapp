'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const cards = [
  { id: 1, title: 'Alpha', desc:'Apple Music', image: '/entertainment-loop-card1.jpg' },
  { id: 2, title: 'Todays Hits', desc:'Apple Music Hits', image: '/entertainment-loop-card2.jpg' },
  { id: 3, title: 'iDale Play', desc:'Apple Music Latin', image: '/entertainment-loop-card3.jpg' },
  { id: 4, title: 'Rap Life', desc:'Apple Music Hip-Hop/Rap', image: '/entertainment-loop-card4.jpg' },
  { id: 5, title: 'A-List Pop', desc:'Apple Music Pop', image: '/entertainment-loop-card5.jpg' },
  { id: 6, title: 'Todays Country', desc:'Apple Music Country', image: '/entertainment-loop-card6.jpg' },
  { id: 7, title: 'New Music Daily', desc:'Apple Music', image: '/entertainment-loop-card7.jpg' },
];

export default function InfiniteMovingCardsDemo() {
  const duplicateCards = [...cards, ...cards];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden w-full py-6 bg-gray-100">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 100 : 20, // slow down on hover
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
