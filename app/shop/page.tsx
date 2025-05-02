// pages/index.tsx or app/page.tsx
'use client';
import Image from 'next/image';




export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 font-sans text-gray-800">
      {/* Header Image */}
      <div className="flex justify-center mb-10">
        <Image
          src="/music2.jpeg"
          alt="AirPods 4"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Model Options & Pricing */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {/* Model Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Choose your model</h2>
          <div className="space-y-4">
            <button
              className="border p-4 w-full text-left rounded-md hover:border-blue-500 transition-colors"
              aria-label="AirPods 4 selection"
            >
              <strong>AirPods 4</strong><br />
              From ₹12900.00/mo. with instant cashback and EMI
            </button>
            <button
              className="border p-4 w-full text-left rounded-md hover:border-blue-500 transition-colors"
              aria-label="AirPods 4 with Active Noise Cancellation selection"
            >
              <strong>AirPods 4 with Active Noise Cancellation</strong><br />
              From ₹17900.00/mo. with instant cashback and EMI
            </button>
          </div>

          {/* Engraving */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Personalise them for free</h3>
            <div className="space-y-2">
              <button
                className="border p-3 w-full rounded-md hover:border-blue-500 transition-colors"
                aria-label="Add engraving"
              >
                Add Engraving - Free
              </button>
              <button
                className="border p-3 w-full rounded-md hover:border-blue-500 transition-colors"
                aria-label="No engraving"
              >
                No Engraving
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <p className="text-lg font-semibold">From ₹1533.00/mo. with instant cashback<sup>§§</sup> and EMI<sup>§</sup></p>
          <p className="mt-2">or</p>
          <p className="text-xl font-bold mt-2">MRP ₹17900.00<br /><span className="text-sm">(Incl. of all taxes)</span></p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Bag
          </button>

          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Need a moment?</strong></p>
            <p>Save your selections to Your Saves, and return later to continue where you left off.</p>
            <a href="#" className="text-blue-500 mt-1 inline-block">Save for later</a>
          </div>
        </div>
      </div>

      {/* Help Buying */}
      <div className="text-center text-sm text-gray-600 mt-10">
        <p><strong>Get help buying.</strong> <a href="#" className="text-blue-500">Chat now</a> or call 000800 040 1966.</p>
      </div>

      {/* Thumbnail Gallery */}
      {/* <div className="mt-8 flex justify-center gap-4 overflow-x-auto px-4">
        {['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'].map((src, index) => (
          <Image
            key={index}
            src={`/${src}`}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={100}
            className="rounded-md shadow-md"
            aria-label={`Thumbnail image ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Product Info */}
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Product Information</h2>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm leading-relaxed">
            Redesigned for exceptional fit and audio performance — and available with Active Noise Cancellation,
            Adaptive Audio, and Transparency mode for the first time in this design. The powerful H2 chip delivers
            clearer calls with Voice Isolation, the magic of Conversation Awareness, and a new, hands-free way to
            interact with Siri.<sup>6</sup> Personalised Spatial Audio with dynamic head tracking places sound all
            around you.<sup>4</sup> Rated IP54 dust, sweat, and water resistant.<sup>11</sup> USB-C charging and up to
            30 hours of listening time using the case.<sup>15</sup> The charging case includes a built-in speaker for
            Find My and supports wireless charging with Apple Watch or Qi-certified chargers.
          </p>
        </div>

        {/* What's in the Box */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-2">What's in the Box</h3>
          <ul className="text-sm space-y-1">
            <li>AirPods 4 with Active Noise Cancellation</li>
            <li>Charging Case (USB‑C) with speaker</li>
            <li>Documentation</li>
            <li>(USB‑C Charge Cable sold separately)</li>
          </ul>
        </div>

        {/* Legal Product Declaration */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-2">Legal Metrology Product Declaration</h3>
          <div className="text-sm leading-6 space-y-1">
            <p><strong>Full Name and Address of the Manufacturer</strong><br />
              APPLE INC, ONE APPLE PARK WAY, CUPERTINO, CA 95014, USA</p>

            <p><strong>Full Name and Address of the Importer</strong><br />
              APPLE INDIA PRIVATE LTD., 13TH FLOOR, PRESTIGE MINSK SQUARE, MUNICIPAL NO. 6, CUBBON ROAD, BENGALURU, KARNATAKA - 560 001 INDIA</p>

            <p><strong>Country of Origin</strong><br />
              VIETNAM</p>

            <p><strong>Details of the Items in the Package (Number of Units/Quantity)</strong><br />
              EARBUDS 2N<br />
              CASE 1N</p>

            <p><strong>Full Name and Address of the Packer (when/if applicable)</strong><br />
              Same as Importer</p>

            <p><strong>Common/Generic Name of the Product</strong><br />
              WIRELESS EAR PHONES</p>

            <p><strong>Customer Complaints - Manager - Customer Support</strong><br />
              TELEPHONE 000800 1009009<br />
              EMAIL: INDIA_SUPPORT@APPLE.COM</p>

            <p><strong>Product Reference</strong><br />
              MXP93HN/A</p>
          </div>
        </div>

        {/* Final Notes */}
        <p className="text-xs text-gray-500 mt-8 border-t pt-4">
          AirPods 4 with Active Noise Cancellation does not include a USB‑C Charge Cable or power adapter.
          We encourage you to use any compatible USB‑C Charge Cable or power adapter. If needed, they're available for purchase.
        </p>
      </div>
    </main>
  );
}
