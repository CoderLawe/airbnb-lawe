import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";
import SearchCard from "../components/SearchCard";
import Map from "../components/Map";
import Aos from "aos";
import { useEffect } from "react";

function Search({ searchResults}) {
    const router = useRouter();
    // Practice with ES6 destructuring
    const { location, startDate, endDate, numberOfGuests } =  router.query;

    // const formattedStartDate = format( new Date(startDate), "dd MMMM yy")
    // const formattedEndDate = format( new Date(endDate), "dd MMMM yy")
    // const range = `${formattedStartDate} - ${formattedEndDate}`
    const range =12
    useEffect(() => {
        Aos.init({duration:2000})
           
        }, [])

    return (
        <div>
            <Header placeholder={`${location} |${range} |${numberOfGuests}}`}/>
                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                        <p>300+ Stays for {numberOfGuests} guest(s) on {range}</p>

                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location} </h1>

                        <div className="hidden lg:inline-flex space-x-3 text-gray-800 mb-5 whitespace-nowrap">
                            <p className="button">Cancellation flexibility</p>
                            <p className="button">Type of Place</p>
                            <p className="button">Price and beds</p>
                            <p className="button">More Filters</p>
                        </div>
                    <div className="flex-col space-y-8">
                        <div data-aos="zoom-in">
                            {searchResults.map(({title, img, description, location, star, price, total}) => (
                                <SearchCard  title={title} img={img} description={description} location={location} key={img} star={star} price={price} total={total}/>


                            ))}
                        </div>

                        {/* <div data-aos="fade-left">
                            {searchResults.slice(1,2).map(({title, img, description, location, star, price, total}) => (
                                <SearchCard  title={title} img={img} description={description} location={location} key={img} star={star} price={price} total={total}/>


                            ))}
                        </div> */}
                      

                    </div>
          
                    </section>

                  <section className="hidden xl:inline-flex xl:min-w-[600px] shadow-xl rounded-2xl py-10">
                      {/* <Map className="rounded-2xl shadow-xl" searchResults={searchResults}/> */}
                  </section>
                </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(){
    // const searchResults = await fetch("https://links.papareact.com/isz")
    // .then(res =>(res.json()));
    const searchResults = [{
        title:"Spacious House in Leeds",
        img:"https://cdn.discordapp.com/attachments/817048198022430761/1202232389066309682/pexels-eberhard-grossgasteiger-1612351.jpg?ex=65ccb529&is=65ba4029&hm=d0c7735bceab0349a76ab4d05e574b902ae578e76dbe902d13d87d6d7f4de238&",
        description:"Spacious House Available for up to 5 People",
        star:4,
        price:250,
        total:275
    }]
    return{
        props:{
            searchResults
        }
    }
}

export default Search
