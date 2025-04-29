// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import { ShoppingBag, Search, Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="w-full bg-gray-200/30 backdrop-blur-md z-10">
//       <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-8">
//         {/* Logo */}
//         <Link href="/" className="text-sm font-semibold">
//           logo
//         </Link>

//         {/* Mobile menu toggle */}
//         <button
//           className="md:hidden text-black"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-sm items-center">
//           <Link href="/store"><li>Store</li></Link>
//           <Link href="/mac"><li>Mac</li></Link>
//           <Link href="/ipad"><li>iPad</li></Link>
//           <Link href="/iphone"><li>iPhone</li></Link>
//           <Link href="/watch"><li>Watch</li></Link>
//           <Link href="/airpods"><li>Airpods</li></Link>
//           <Link href="/tv&home"><li>Tv & Home</li></Link>
//           <Link href="/entertainment"><li>Entertainment</li></Link>
//           <Link href="/accessories"><li>Accessories</li></Link>
//           <Link href="/support"><li>Support</li></Link>
//           <Link href="/search"><li><Search className="w-4 h-6" /></li></Link>
//           <Link href="/bag"><li><ShoppingBag className="w-4 h-6" /></li></Link>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
//           <Link href="/store"><li>Store</li></Link>
//           <Link href="/mac"><li>Mac</li></Link>
//           <Link href="/ipad"><li>iPad</li></Link>
//           <Link href="/iphone"><li>iPhone</li></Link>
//           <Link href="/watch"><li>Watch</li></Link>
//           <Link href="/airpods"><li>Airpods</li></Link>
//           <Link href="/tv&home"><li>Tv & Home</li></Link>
//           <Link href="/entertainment"><li>Entertainment</li></Link>
//           <Link href="/accessories"><li>Accessories</li></Link>
//           <Link href="/support"><li>Support</li></Link>
//           <Link href="/search"><li className="flex items-center gap-2"><Search className="w-4 h-5" /> Search</li></Link>
//           <Link href="/bag"><li className="flex items-center gap-2"><ShoppingBag className="w-4 h-5" /> Bag</li></Link>
//         </ul>
//       )}
//     </nav>
//   )
// }

// export default Navbar


"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag, ChevronRight } from "lucide-react";

const navItems = [

  // { label: "logo", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv&home" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Accessories", href: "/accessories" },
  { label: "Support", href: "/support" },
];

export default function AppleNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setBagOpen(false);
  };

  const toggleBag = () => {
    setBagOpen(!bagOpen);
    setSearchOpen(false);
  };

  return (
    <nav className="bg-gray-100 w-full  text-gray-800 py-2 flex  justify-around md:justify-center items-center sticky top-0 z-50">
      <Link href={"/"}><div className="text-xl font-semibold mr-6">Apple</div></Link>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex space-x-8 text-sm items-center">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="hover:text-black">
            {item.label}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <button onClick={toggleSearch} className="hover:text-gray-500 cursor-pointer pl-6">
          <Search size={20} />
        </button>
        <button onClick={toggleBag} className="hover:text-gray-500 cursor-pointer">
          <ShoppingBag size={20} />
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden hover:text-gray-400">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full h-screen p-8 pl-10 bg-gray-100 text-gray-800 text-3xl font-bold flex flex-col items-start space-y-4 px-4 pb-4 md:hidden ">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-gray-400">
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Panel */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          searchOpen ? "opacity-100 h-96 py-6" : "opacity-0 h-0 py-0"
        }`}
      >
        <div className="relative w-full px-20">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-500" size={28} />
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full text-gray-950 font-semibold py-6 pl-14 pr-4 rounded-lg text-3xl focus:outline-none"
          />
        </div>

        <div className="px-10 mt-6 space-y-1">
          <p className="text-gray-500 text-sm font-semibold flex items-center gap-2">Quick Links</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Find a Store</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Accessories</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />AirPods</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Apple Intelligence</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Apple Trade In</p>
        </div>
      </div>

      {/* Bag Panel */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          bagOpen ? "opacity-100 h-96 py-6" : "opacity-0 h-0 py-0"
        }`}
      >
        <div className="px-20 max-h-72 overflow-y-auto custom-scroll">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bag</h2>
          <p className="text-gray-600">Your bag is currently empty.</p>
          <div className=" mt-6 space-y-1">
          <p className="text-gray-500 text-sm font-semibold flex items-center gap-2">My Profile</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Orders</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Your Saves</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Accounts</p>
          <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold"><ChevronRight size={20} />Sign In</p>
        </div>
        </div>
      </div>
    </nav>
  );
}


