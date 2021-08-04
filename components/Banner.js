import Image from "next/image"
function Banner() {
    return (
        <div className="relative h-[300px] sm:-h[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm"
                    layout="fill"
                    objectFit="cover"
                />

        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
            {/* Margin is outside the component padding is inside the component */}
            <button className="rounded-full text-purple-500 bg-white px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl transform transition duration-200 active:scale-90"> I'm flexible</button>
        </div>
        {/* Absolute positioning means you can position an element anywhere on the screen you want */}
        </div>
    )
}

export default Banner
