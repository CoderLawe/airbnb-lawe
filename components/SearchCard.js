import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Aos from "aos"

import { useEffect } from "react"

function SearchCard({ img, title, description, location, star, price, total}) {

    useEffect(() => {
        Aos.init({duration:2000})
           
        }, [])
    return (

        <div className="flex-col  shadow-lg  rounded-t-2xl group rounded-b-2xl border-l-4  space-y-4 hover:bg-gray-100" >
            <div className="flex justify-center">
                <div className="h-60 md:w-full  md:h-72 relative mx-5 cursor-pointer mt-6 border-b-5 group-hover:border-red-400">
                    <Link href="/detail" data-aos="zoom-in">
                                <Image 
                                src={img} 
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-2xl rounded-b-lg mx-auto px-10  "
                                />
                    </Link>
                </div>
                     
            </div>

            <div className="py-4 px-5 ">
                 <p className="pt-2 text-sm text-gray-500 flex-grow border-b pb-2">{description}</p>

            </div>

            <div className="flex justify-center font-serif text-lg font-bold text-gray-600">
                <h3>{title}</h3>
            </div>

            <div className="flex justify-center pt-5">
                <Link href="/detail">
                            <button data-aos="zoom-in" className="rounded-2xl bg-black text-gray-300  px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl hover:scale-105 transform transition duration-200 active:scale-90">More details</button>
                </Link>
            </div>

            <div className="flex justify-between p-5">
                <p className="text-right font-extralight">{total}</p>

                <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>

            </div>
        </div>
        
        
        // <div className="flex-col w-full justify-center">
        //         <div className="relative  h-24   md:h-52 md:w-80  rounded-2xl ">
        //            <div className="flex justify-center">
        //             <Link href="/detail">
        //                     <Image 
        //                     src={img} 
        //                     layout="fill"
        //                     objectFit="cover"
        //                     className="rounded-2xl mx-auto"
                            
                            
        //                     />
        //                 </Link>
        //            </div>
                   


        //         </div>

        //         <div className="p-5 border-b rounded-2xl shadow-xl">
        //                 <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        //         </div>
        // </div>
    //     <div className="flex py-7 px-2 pr-4 transition transform duration-200  ease-out cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t group hover:border-r-4 border- ">
    //         {/* Read up on flex shrink */}
    //         <div className="relative  h-24 w-40  md:h-52 md:w-80  flex-shrink-0 rounded-2xl ">
    //             <Link href="/detail">
    //                 <Image 
    //                 src={img} 
    //                 layout="fill"
    //                 objectFit="cover"
    //                 className="rounded-2xl"
                    
                    
    //                 />
    //             </Link>
              


    //         </div>



    //         <div className="flex-col flex-grow pl-5">
    //             <div className="flex justify-between">
    //                 <p>{location}</p>
    //                 <HeartIcon className="h-7 cursor-pointer"/>
    //             </div>

    //             <h4 className="text-xl"> {title}</h4>

    //             <div className="border-b w-10 pt-2 "/>

    //             <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

    //             <div>
    //                 <p className="flex items-center">
    //                 <StarIcon className="h-5 text-red-400"/>
    //                     {star}
    //                 </p>

    //             <div className="flex justify-center items-start">
    //                 <Link href="/detail">
    //                     <button className="rounded-lg bg-red-400 text-white  px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl hover:scale-105 transform transition duration-200 active:scale-90">More details</button>
    //                 </Link>

    //             </div>
    //                 <div className="flex justify-between items-end pt-5">

    //                     <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>

    //                     <p className="text-right font-extralight">{total}</p>


    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    )
}

export default SearchCard
