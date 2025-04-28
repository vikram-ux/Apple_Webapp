"use client";

import { Tabs } from "./ui/mactabs";
import Image from "next/image";
import { Mac_laptopcard1 } from "./Mac_laptopcard1";
export function Mactabs() {
    const tabs = [

        {
            title: "Laptops",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-auto rounded-2xl text-xl md:text-4xl font-bold text-white bg-white bg-gradient-to-br">

                    <div className="w-full h-full flex flex-col md:flex-row text-center overflow-auto">

                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                        <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
                       

                        {/* Second mac */}
                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                       
                    </div>
                </div>
            ),
        },
        {
            title: "Desktops",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-auto rounded-2xl text-xl md:text-4xl font-bold bg-white text-white bg-gradient-to-br">

                    <div className="w-full h-full flex flex-col md:flex-row text-center overflow-auto">

                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                        <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
                       

                        {/* Second mac */}
                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                       
                    </div>
                </div>
            ),
        },
        {
            title: "Displays",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-auto rounded-2xl text-xl md:text-4xl font-bold text-white bg-white bg-gradient-to-br">

                    <div className="w-full h-full flex flex-col md:flex-row text-center overflow-auto">

                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                        <hr className="border-1 border-gray-400 my-4 ml-20 mr-20" />
                       

                        {/* Second mac */}
                        <div className="specification flex flex-col gap-16">
                        <Mac_laptopcard1 />
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">34.46 cm or 38.91 cm</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold">(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <Image className="mx-auto" src="/maclaptop2.png" alt="image" width={50} height={50} />                            
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple M4 chip</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                        <Image className="mx-auto" src="/maclaptop3.png" alt="image" width={50} height={50} />
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Apple Intelligence1</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <p className="text-lg font-normal">up to</p>
                            <h1 className="text-3xl font-bold mt-3">18 hours</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-normal mt-3">battery life10</p>
                        </div>
                        <div className="text-black  w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">4 ports</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-3">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                        </div>
                        <div className="text-black w-1/2 mx-auto">
                            <h1 className="text-3xl font-bold">1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</h1>
                            <p className="text-sm text-gray-500 w-1/2 mx-auto font-semibold mt-5">Weight</p>
                        </div>
                        </div>
                       
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}
