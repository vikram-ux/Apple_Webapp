import React from 'react'
import Image from 'next/image'
import { SupportSearch } from '@/components/SuportSearch'


const support = () => {
  return (
    <>

      <div className="main bg-gray-100">
        <div className="w-full max-w-screen-xl mx-auto overflow-hidden">
          <Image
            src="/applesupport-hero.jpg"
            alt="Apple Support Hero"
            width={1300}
            height={500}
            className="w-full h-60 sm:h-72 md:h-[400px] lg:h-[600px] object-cover transition-transform duration-500 ease-in-out hover:scale-105  shadow-lg"
          />
        </div>


        {/* <!-- Title --> */}
        <h1 className="text-6xl font-semibold text-center mb-10 p-10 pt-20">Apple Support</h1>
        {/* <!-- Top Icons --> */}
        <div className="flex flex-col items-center px-4 py-8 space-y-12">
          {/* Top Icons Row */}
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <Image src="/applesupport1.png" alt="iPhone" width={40} height={500} className="h-16 mb-2" />
              <span className="text-sm">iPhone</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport2.png" alt="Mac" width={100} height={500} className="h-16 mb-2" />
              <span className="text-sm">Mac</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport3.png" alt="iPad" width={70} height={500} className="h-16 mb-2" />
              <span className="text-sm">iPad</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport4.png" alt="Watch" width={50} height={500} className="h-16 mb-2" />
              <span className="text-sm">Watch</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport5.png" alt="AirPods" width={70} height={500} className="h-16 mb-2" />
              <span className="text-sm">AirPods</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport6.png" alt="Music" width={70} height={500} className="h-16 mb-2" />
              <span className="text-sm">Music</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/applesupport7.png" alt="TV" width={70} height={500} className="h-16 mb-2" />
              <span className="text-sm">TV</span>
            </div>
          </div>

          {/* Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full min-h-[230px]">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-4">✏️</div>
              <p className="text-blue-600 font-medium">Forgotten Apple Account password</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-4">🪛</div>
              <p className="text-blue-600 font-medium">Apple Repair</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-4">📄</div>
              <p className="text-blue-600 font-medium">Billing and Subscriptions</p>
            </div>
          </div>

          {/* Optional SupportSearch Component */}
          <SupportSearch />
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto py-7 bg-gray-100">

          {/* Left Side - Get Support (Takes 2/3 width) */}
          <div className="md:col-span-2 relative text-center p-9  h-full overflow-hidden bg-white">
            <h2 className="text-3xl font-bold mb-4 z-10 relative">Get Support</h2>
            <p className="text-gray-700 mb-6 z-10 relative">
              Give us a few details and we’ll offer the best solution. Connect by phone, chat, email and more.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition z-10 relative">
              Start now
            </button>

            {/* Full Cover Image in Background */}
            {/* <div className="absolute bottom-0 left-0 w-full"> */}
              <Image
                src="/support-character1.png"
                alt="Support Character"
                width={1200}
                height={500}
                className="w-full object-contain"
                unoptimized
              />
            {/* </div> */}

          </div>

          {/* Right Side - Apple Support App (Takes 1/3 width) */}
          <div className="md:col-span-1 text-center bg-white ">
            <h2 className="text-3xl font-bold mb-4 pt-9">Apple Support app</h2>
            <p className="text-gray-700 mb-4">
              Get help for all of your Apple products in one place, or connect with an expert.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">Download ↗</a>
            <div className="mt-6">
              <Image src="/support-character2.png" alt="Support App" width={500} height={500} className="mx-auto max-w-xs" />
            </div>
          </div>

        </div>


        <div className="bg-white mt-10 h-auto w-full max-w-3xl mx-auto flex flex-col gap-3 justify-center items-center p-6 sm:p-10 rounded-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold text-center">My Support</h1>
          <p className="text-base sm:text-lg text-center">
            Get warranty information, check your coverage status or look up an existing repair.
          </p>
          <p className="text-blue-500 text-sm sm:text-base text-center">
            Sign in with your Apple Account
          </p>
        </div>



        <div className="bg-white mt-10 h-auto w-full max-w-3xl mx-auto flex flex-col gap-3 text-center justify-center items-center p-6 sm:p-10 rounded-2xl">
          <h1 className='text-4xl font-bold'>AppleCare+</h1>
          <p>Get unlimited repairs for accidental damage protection, priority access to Apple experts, and more..</p>
          <p className='text-blue-500'>Learn more</p>
          <div className="mt-6">
            <Image src="/support-applecare.png" alt="Support App" width={500} height={500} className="mx-auto max-w-xs" />
          </div>
        </div>


        <div className="bg-white mt-10 h-auto w-full max-w-3xl mx-auto flex flex-col gap-3 justify-center items-center p-6 sm:p-10 rounded-2xl">
          <h1 className='text-3xl font-bold'>My Beware of counterfeit parts</h1>
          <p className='text-md font-medium text-gray-600'>Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorised Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</p>
          <p className='text-md font-medium text-gray-600'>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
        </div>


        <div className='bg-white mt-10 h-auto flex flex-col gap-3 p-20 '>
          <h1 className='text-2xl font-bold'>Apple Service Programmes</h1>
          <p className='text-md text-blue-500'>iPhone 14 Plus Service Programme for Rear Camera Issue</p>
          <p className='text-md text-blue-500'>iPhone 12 and iPhone 12 Pro Service Programme for No Sound Issues</p>
          <p className='text-md text-blue-500'>15-inch MacBook Pro Battery Recall Programme</p>
          <p className='text-md text-blue-500'>Apple Three-Prong AC Wall Plug Adapter Recall Programme</p>
          <p className='text-md text-blue-500'>See all programmes</p>
        </div>




      </div>
    </>
  )
}

export default support
