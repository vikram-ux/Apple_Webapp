
import Link from 'next/link'
import Image from 'next/image'
import { AirPodsCardsCarousel } from '@/components/AirpodsCardCarousel'
const airpods = () => {
  return (
    <>
      <p className="text-center text-sm bg-gray-200 p-3">Get up to 12 months of No Cost EMI‡ plus ₹4000.00 instant cashback◊ on selected Apple Watch models with eligible cards. <Link className="text-blue-500" href="/store">Shop </Link></p>
      {/* banner 1 */}
      <div className="h-auto sm:h-[400px] md:h-[600px] lg:h-[800px]">
        <Image
          src="/airpods-banner2.jpg"
          alt="Picture of the author"
          width={1200}
          height={1200}
          className="mx-auto p-6 rounded-4xl h-full w-full object-cover"
        />
      </div>
      {/* banner2  */}
      <div className="h-auto sm:h-[400px] md:h-[600px] lg:h-[800px]">
        <Image
          src="/airpods-banner1.jpg"
          alt="Picture of the author"
          width={1200}
          height={1200}
          className="mx-auto p-6 rounded-4xl h-full w-full object-cover"
        />
      </div>
      {/* banner3  */}
      <div className="relative h-auto w-full">
        <Image
          src="/airpods-banner3.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className="mx-auto p-6 rounded-4xl h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-9xl font-bold">AirPods Max</h1>
        </div>
      </div>


      {/* Which AirPods are right for you? */}





      {/* Get to know AirPods. */}
      <AirPodsCardsCarousel />


      {/* music */}
      <div className='p-20 w-full h-full'>
        <div className="flex flex-col md:flex-row text-center sm:text-start justify-evenly items-center">

          <div className="text flex flex-col gap-4">
            <h2 className='text-4xl font-semibold'>Music</h2>
            <h5 className='text-5xl text-gray-700 font-bold'>Get 3 months of Apple Music free with your AirPods.**</h5>
            <Link href=""><p className='text-blue-500 text-xl'>Learn more </p></Link>
          </div>

          <div className="image">
            <Image
              src="/airpods-music.jpg"
              width={800}
              height={800}
              alt="Picture of the author"
              className='mix-blend-multiply'
            />
          </div>
        </div>
      </div>





      <div className="flex justify-center flex-wrap gap-4 p-4 bg-gray-100">
        {/* <!-- Box 1 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Free delivery and pickup</span>
          <span className="text-gray-600">Get free delivery or pickup at your Apple Store.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 2 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Ways to buy</span>
          <span className="text-gray-600">Choose the way that′s right for you.</span>
          <span className="text-blue-500">Learn more</span>
        </div>

        {/* <!-- Box 3 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Get help buying</span>
          <span className="text-gray-600">Have a question? Call a Specialist or chat online. Call 000800 040 1966.</span>
          <span className="text-blue-500">Contact us</span>
        </div>

        {/* <!-- Box 4 --> */}
        <div className="flex flex-col gap-2 text-center p-4 w-1/5 min-w-[200px] ">
          <span className="font-bold text-lg">Make them yours</span>
          <span className="text-gray-600">Engrave your AirPods with your initials or favourite emoji — free. Only at Apple.</span>
          <span className="text-blue-500">Learn more</span>
        </div>
        <hr className="my-4 border-t border-gray-300" />
      </div>




    </>
  )
}

export default airpods
