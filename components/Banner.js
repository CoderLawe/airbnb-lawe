import Image from "next/image"
import Typewriter from "typewriter-effect"
import Header from "./Header"
function Banner() {
    return (
        <div className="relative h-[400px] sm:-h[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                <Header />

            <Image src="https://cdn.pixabay.com/photo/2017/11/28/13/07/sunset-2983614_960_720.jpg"
                    layout="fill"
                    objectFit="cover"
                />

        <div className="absolute top-1/2 w-full text-center">
            {/* <p className="text-sm sm:text-lg text-gray-400">Not sure where to go? Perfect.</p> */}
                <div className="text-4xl font-serif font-extrabold text-gray-200">
                    <Typewriter 
                        onInit ={(typewriter) =>{
                            typewriter
                            .typeString("Not sure where to go?...Perfect!")
                            .pauseFor(5000)
                            .start()
                        }
                    }

                    />  
                </div>
               
            {/* Margin is outside the component padding is inside the component */}
            <button className="rounded-full text-purple-500 bg-white px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl transform transition duration-200 active:scale-90"> I'm flexible</button>
        </div>
        {/* Absolute positioning means you can position an element anywhere on the screen you want */}
        </div>
    )
}

export default Banner
