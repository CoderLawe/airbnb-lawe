import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Link from "next/link"


function SearchCard({ img, title, description, location, star, price, total}) {
    return (
        <div className="flex py-7 px-2 pr-4 transition transform duration-200  ease-out cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t group hover:border-r-4 border- ">
            {/* Read up on flex shrink */}
            <div className="relative  h-24 w-40  md:h-52 md:w-80  flex-shrink-0 rounded-2xl ">
                <Image 
                src={img} 
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                
                
                />


            </div>



            <div className="flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>

                <h4 className="text-xl"> {title}</h4>

                <div className="border-b w-10 pt-2 "/>

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div>
                    <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400"/>
                        {star}
                    </p>

                <div className="flex justify-center items-start">
                    <Link href="/detail">
                        <button className="rounded-lg bg-red-400 text-white  px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl transform transition duration-200 active:scale-90">More details</button>
                    </Link>

                </div>
                    <div className="flex justify-between items-end pt-5">

                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>

                        <p className="text-right font-extralight">{total}</p>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchCard
