import Head from 'next/head'
import Header from '../components/Header'
import Banner  from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import Aos from 'aos';
import { useEffect } from 'react';
export default function Home({ exploreData, cardData }) {
  useEffect(() => {
    Aos.init({duration:2000})
       
    }, [])
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Banner */}
    <Banner className=""/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      {/* Snall cards */}
      <section className="pt-6 shadow-lg rounded-2xl p-10">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        {/* Pulling data from a server */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map((item) =>(
            <SmallCard img={item.img} distance={item.distance} location={item.location} key={item.img}/>
          ))}
      </div>
       
      </section>

      <section className="shadow-lg rounded-2xl p-10">
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {cardData?.map(({img, title}) =>(
          <MediumCard img={img} key={img} title={title}/>
        ))}
      </div>
       
      </section>
      <LargeCard 
      img="https://links.papareact.com/4cj"
      title="The Greatest outdoors"
      description="Wishlists curated by airbnb"
      buttonText="Get Inspired!"
      />
    </main>
          <Footer />
    </div>
  )
}

export async function getStaticProps(){
  // This is for static rendering
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(res => res.json()
  );

  // GOOGLE JSON KEEPER 
  const cardData = await fetch('https://links.papareact.com/zp1')
  .then(res => res.json()
  );

  return {
    props:{
      exploreData,
      cardData

    }
  }

}


