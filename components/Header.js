import Image from "next/image"
import { SearchIcon, SearchCircleIcon, GlobeIcon, GlobeAltIcon, UserIcon, MenuAlt1Icon, MenuIcon, UsersIcon, ArrowCircleRightIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function Header({ placeholder }) {


    const [navbar, setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
          setNavbar(true);
        }else{
          setNavbar(false);
        }
    }
  
    // window.addEventListener('scroll', changeBackground);

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {

        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
      }

      const resetInput = () =>{
          setSearchInput("");
      }

      const search = () =>{
          router.push({
              pathname:'/search',
              query:{
                  location:searchInput,
                  startDate:startDate.toISOString(),
                  endDate:endDate.toISOString(),
                  numberOfGuests,
              }
          })
      }

    const selectionRange = {
        startDate: startDate,
        endDate:endDate,
        key:'selection'
    }


    useEffect(function mount() {
        function onScroll() {
          console.log("scroll!");
        }
    
        window.addEventListener('scroll', changeBackground);
    
        return function unMount() {
          window.removeEventListener("scroll", changeBackground);
        };
      });
    

    return (
        <header className={ navbar ? "sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10  bg-white shadow-md" : "sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10  bg-black bg-opacity-60 text-gray-300 shadow-md" }>
            {/* Left */}
            <div onClick={() => router.push('/')}className="relative flex items-center h-10 cursor-pointer p-5">
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left "
                />
            </div>

            {/* Middle */}
            <div className="md:border rounded-2xl flex items-center md:shadow-sm">
                <input className="flex-grow bg-transparent p-2 ml-5 focus:outline-none" value={searchInput} onChange ={(e) => setSearchInput(e.target.value)} type="text" placeholder={ placeholder || "Start your Search"} />
                
                <SearchCircleIcon className={navbar ? "text-red-400 h-8 ml-32 cursor-pointer hidden md:inline-flex mr-2" : "text-white h-8 ml-32 cursor-pointer hidden md:inline-flex mr-2 animate-pulse"}/>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray500">
            <p className="hidden md:inline ml-2 cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>

            <div className={ navbar ? "flex border rounded-2xl p-3 text-gray-700 space-x-2 cursor-pointer":"flex border rounded-2xl p-3 text-white space-x-2 cursor-pointer"}>
                <MenuIcon className="h-6"/>
                <UserIcon className="h-6"/>
            </div>

            </div>
    {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
            <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            />

            <div className="flex items-center border-b mb-4 bg-white text-black">
                <h2 className="font-semibold text-2xl flex-grow p-5">Number of Guests:</h2>

                <UsersIcon className="h-5"/>
                <input type="number" value ={numberOfGuests} min={1} onChange = {(e) => setNumberOfGuests(e.target.value)}className="w-12 pl-2 text-lg outline-none text-red-400"/>
            </div>

            <div className="flex justify-between space-x-2  bg-opacity-60 ">
                <button onChange={resetInput} className="rounded-2xl cursor-pointer w-1/2 hover:scale-105  transition transform duration-200 ease-out text-gray-700 bg-red-400 ">Cancel</button>
                <div className="flex space-x-2 items-center w-1/2 h-10">
                     <button onClick={search} className=" text-gray-300 w-full h-10 hover:scale-105  transition transform duration-200 ease-out bg-gray-800 shadow-lg rounded-2xl">Search</button>

                </div>
            </div>
        </div>
    )}
        </header>
    )
}

export default Header
