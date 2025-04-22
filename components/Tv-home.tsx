// components/AppleStyleCarousel.tsx

'use client'

import Image from 'next/image'

type ProductCard = {
    title: string
    description: string
    image: string
}

const products: ProductCard[] = [
    {
        title: 'Easily control your home from anywhere with your favourite devices.',
        description: 'Learn more about the Home app',
        image: '/tv-smarthome1.jpg',
    },
    {
        title: 'Seamlessly connected entertainment in every room.',
        description: 'Learn more about HomePod',
        image: '/tv-smarthome2.jpg',
    },
    {
        title: 'Run it all with your voice.',
        description: 'Learn more about Siri',
        image: '/tv-smarthome3.jpg',
    },
    {
        title: 'All with the security and privacy of Apple.',
        description: 'Learn more about Privacy',
        image: '/tv-smarthome3.jpg',
    },
]

export default function AppleStyleCarousel() {
    return (
        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory flex space-x-6 px-6 py-8">
            {products.map((product, i) => (
                <div
                    key={i}
                    className="min-w-[300px] max-w-sm flex-shrink-0 snap-center bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-center">{product.title}</h2>
                        <p className="text-blue-500 text-center">{product.description}</p>
                    </div>
                    <Image src={product.image} alt={product.title} width={500} height={500} className=" object-cover" />
                </div>
            ))}
        </div>
    )
}
