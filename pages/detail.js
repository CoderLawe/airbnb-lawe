import { StarIcon, UploadIcon, SparklesIco, CheckIcon } from "@heroicons/react/solid"
import { HomeIcon, SparklesIcon,EmojiHappyIcon } from "@heroicons/react/outline"
import Header from "../components/Header"
import Image from "next/image"

function detail() {
    return (
        <div className="">
            <Header />
        <div className="mx-6 rounded-2xl shadow-lg mt-10 p-5">
            {/* Top section */}
            <div className="py-3">
                <h3 className="text-2xl font-serif text-gray-700 font-bold">TAPENDOI LODGE, NANYUKI KENYA</h3>

                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <StarIcon className="h-6 text-red-400"/>
                        <h3>4.3 <span className="text-sm font-light">(14 reviews)</span></h3>
                        
                        <div className="flex space-x-3">
                            <EmojiHappyIcon className="h-6"/>
                            <h3>superhost</h3>
                        </div>
                    </div>




                <div className="flex space-x-3">
                    <div className="flex space-x-2 items-center text-sm">
                        <UploadIcon className="h-4"/>
                         <p>Share</p>
                    </div>

                <div className="flex space-x-2 items-center text-sm">
                    <UploadIcon className="h-4"/>
                        <p>Share</p>
                </div>




            </div>
          
                </div>
                {/* 2 flexes */}
            </div>
          

            <section className="flex space-x-3 rounded-l-2xl py-10 px-10">

                    {/* Card sections */}

                {/* Left section */}
                <div className="relative w-1/2 h-[535px] py-4">
                    <Image className="rounded-l-2xl" src="https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg" objectFit="cover" layout="fill"/>
                </div>

                {/* Right section */}

                <div className="w-1/2">
                    <div className="flex-col space-y-4">
                        <div className="flex space-x-2">

                            <div className="relative w-1/2  py-4">
                                <Image src="https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg" layout="fill" objectFit="cover"/>
                            </div>

                            <div className="relative w-1/2 h-64 py-4">
                                <Image className="rounded-r-2xl" src="https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg" layout="fill"/>
                            </div>

                        </div>




                        <div className="flex space-x-2">

                            <div className="relative w-1/2 h-64 py-4">
                                <Image  src="https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg" layout="fill"/>
                            </div>

                            <div className="relative w-1/2 h-64 py-4">
                                <Image className="rounded-r-2xl" src="https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg" layout="fill"/>
                            </div>

                        </div>
                    </div>
                </div>

                

            </section>

            <section className="flex mx-8">

                <div className="flex-col justify-between w-1/2 py-7 px-7 shadow-lg rounded-2xl ">
                    <div className="flex justify-between ">
                        <div className="flex-col border-b">
                            <h1 className="text-2xl font-serif">Entire cabin hosted by Lawe</h1>
                            <h1>4 guests . 2 bedrooms . 3baths</h1>

                        </div>

                        <div className="relative w-20 h-20 border-b" >
                            <Image className="rounded-full" src="https://avatars.githubusercontent.com/u/52962217?v=4" layout="fill"  />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 py-4">
                        <HomeIcon className="h-8"/>
                        <div>
                            <h1>Entire home</h1>
                            <h3 className="text-gray-700 font-serif">You'll have the entire cabin all to yourself</h3>

                        </div>
                        
                    </div>


                    <div className="flex items-center space-x-3 py-4">
                        <SparklesIcon className="h-8"/>
                        <div>
                            <h1>Entire home</h1>
                            <h3 className="text-gray-700 font-serif">You'll have the entire cabin all to yourself</h3>

                        </div>
                        
                    </div>

                    <div className="flex items-center space-x-3 py-4">
                        <CheckIcon className="h-8"/>
                        <div>
                            <h1>Entire home</h1>
                            <h3 className="text-gray-700 font-serif">You'll have the entire cabin all to yourself</h3>

                        </div>
                        
                    </div>


                    <div className="flex items-center space-x-3 py-4 border-b">
                        <EmojiHappyIcon className="h-8"/>
                        <div>
                            <h1>Entire home</h1>
                            <h3 className="text-gray-700 font-serif">You'll have the entire cabin all to yourself</h3>

                        </div>
                        
                    </div>


                    <p className="py-5 font-serif text-gray-700">
                    Tapendoi Log Cabin is simple yet extremely comfortable with all the comforts one would need for a break away. Piping hot showers, power, wifi, comfortable warm cosy beds and views to die for! Lie in bed or sit by the camp fire listening to animals night chorus. We are on the edge of a conservancy so this is a bush experience.
                    </p>

                    <h3 className="border-b cursor-pointer font-bold">Show more</h3>
                </div>


                <div className="w-1/2">
                    <div className=" shadow-lg">
                        <h1>Hi</h1>
                    </div>
                </div>
            </section>

            </div>
        </div>
    )
}

export default detail
