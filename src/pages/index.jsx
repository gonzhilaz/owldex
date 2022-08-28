import React from 'react'
import "./index.css";
import Navi from '../components/navigation/navigation';
import Hero from '../components/hero/hero';
import Tokenic from '../components/tokenomic/tokenic';
import Swapping from '../components/swaping/swap';
import Trend from '../components/market/market';
import Footer from '../components/footer/footer';


const Main = () => {
  return (
    <>
      <div className="background font-sans">
        <div className="header flex flex-col">
          <Navi />
          <Hero />
        </div>
        <div className="w-full flex flex-col ">
          <Tokenic />
          <Swapping />
          <Trend />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;