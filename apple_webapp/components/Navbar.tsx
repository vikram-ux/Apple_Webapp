import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react';
import { Search } from 'lucide-react';


const Navbar = () => {
    return (
        <>
            <nav className='flex justify-center py-3 w-full z-10 bg-gray-200/30 backdrop-blur-md'>

                <ul className='flex gap-10 text-sm'>
                {/* <Link href="/dashboard">Dashboard</Link> */}
                
                    <Link href="/"><li>logo</li></Link>
                    <Link href="/store"><li>Store</li></Link>
                    <Link href="/mac"><li>Mac</li></Link>
                    <Link href="/ipad"><li>iPad</li></Link>
                    <Link href="/iphone"><li>iPhone</li></Link>
                    <Link href="/watch"><li>Watch</li></Link>
                    <Link href="/airpods"><li>Airpods</li></Link>
                    <Link href="/tv&home"><li>Tv & Home</li></Link>
                    <Link href="/entertainment"><li>Entertainment</li></Link>
                    <Link href="/accessories"><li>Accessories</li></Link>
                    <Link href="/support"><li>Support</li></Link>
                    <Link href="/search"><li><Search className='w-4 h-7'/></li></Link>
                    <Link href="/bag"><li><ShoppingBag className='w-4 h-7'/></li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
