'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-200/30 backdrop-blur-md z-10">
      <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-sm font-semibold">
          logo
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center">
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
          <Link href="/search"><li><Search className="w-4 h-6" /></li></Link>
          <Link href="/bag"><li><ShoppingBag className="w-4 h-6" /></li></Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
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
          <Link href="/search"><li className="flex items-center gap-2"><Search className="w-4 h-5" /> Search</li></Link>
          <Link href="/bag"><li className="flex items-center gap-2"><ShoppingBag className="w-4 h-5" /> Bag</li></Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
