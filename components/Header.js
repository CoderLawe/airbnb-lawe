import Image from "next/image"
import { SearchIcon, SearchCircleIcon, GlobeIcon, GlobeAltIcon, UserIcon, MenuAlt1Icon, MenuIcon } from "@heroicons/react/solid"
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10  bg-white shadow-md">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer p-5">
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left "
                />
            </div>

            {/* Middle */}
            <div className="md:border rounded-2xl flex items-center md:shadow-sm">
                <input className="flex-grow bg-transparent p-2 ml-5 focus:outline-none" type="text" placeholder="Enter a search here" />
                
                <SearchCircleIcon className="text-red-400 h-8 ml-32 cursor-pointer hidden md:inline-flex mr-2"/>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray500">
            <p className="hidden md:inline ml-2 cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6"/>

            <div className="flex border rounded-2xl p-3 text-gray-700 space-x-2 cursor-pointer">
                <MenuIcon className="h-6"/>
                <UserIcon className="h-6"/>
            </div>

            </div>
        </header>
    )
}

export default Header
