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
        {/* {exploreData.map((item) =>(
            <SmallCard img={item.img} distance={item.distance} location="" key={item.img}/>
          ))} */}
              <SmallCard img="https://cdn.discordapp.com/attachments/817048198022430761/1192528623496855602/st_stephane_apartement_2.jpg?ex=65c51753&is=65b2a253&hm=d5b6e9f5d0754327a21af2391b71f38da11b9a696443283b7d4d2e73174d070a&" distance="240Kms" location="" />

      </div>
       
      </section>

      <section className="shadow-lg rounded-2xl p-10">
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {/* {cardData?.map(({img, title}) =>(
          <MediumCard img={img} key={img} title={title}/>
        ))} */}

  <MediumCard img="https://cdn.discordapp.com/attachments/817048198022430761/1192528472531283978/st_stephane_apartement_5.jpg?ex=65c5172f&is=65b2a22f&hm=8fcfbccad445f75e5a6184dd71208a07451759e478ccc4f4a4539c92cc2fbd0d&" title="Majestic escapes"/>
  <MediumCard img="https://cdn.discordapp.com/attachments/817048198022430761/1202232389066309682/pexels-eberhard-grossgasteiger-1612351.jpg?ex=65ccb529&is=65ba4029&hm=d0c7735bceab0349a76ab4d05e574b902ae578e76dbe902d13d87d6d7f4de238&" title="Majestic escapes"/>
  <MediumCard img="https://cdn.discordapp.com/attachments/817048198022430761/1202233058338537515/pexels-tobias-bjrkli-2756420.jpg?ex=65ccb5c9&is=65ba40c9&hm=ee3d1424019b9f56457e7d9949d3a2adee3291a1abe25a31ead428fa9fc9ada7&" title="Majestic escapes"/>

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

// export async function getStaticProps(){
//   // This is for static rendering
//   const exploreData = await fetch('https://links.papareact.com/pyp')
//   .then(res => res.json()
//   );

//   // GOOGLE JSON KEEPER 
//   const cardData = await fetch('https://links.papareact.com/zp1')
//   .then(res => res.json()
//   );

//   return {
//     props:{
//       exploreData,
//       cardData

//     }
//   }

// }


