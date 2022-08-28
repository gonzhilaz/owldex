import React from "react";
import Logo from "../../img/logo.png";
import Owl from "../../img/Group.png"
import Flag from "../../img/UNITED_KINGDOM_1_.png";
import DropDownMenu from "./dropdownMenu";


const Navi = () => {
  return (
    <div className="flex justify-center items-center h-[70px] bg-white bg-opacity-25 backdrop-filter backdrop-blur-md shadow-md font-sans z-50">
      <div className="w-[90%] flex flex-row justify-center items-center  ">
        <div className="LNav w-[450px] flex flex-row items-center justify-between ">
          <div className="logo w-[191px]">
            <img src={Logo} alt="FUNDEX"  />
          </div>
          <div className="divider w-[2px] h-[30px] bg-purple-900 rounded-sm" />
          <DropDownMenu />
        </div>

        <div className="RNav w-full flex items-center justify-between ml-12 ">
          <div className="menuItem flex flex-row justify-between items-center gap-[50px] ">
            <span className="text-2xl font-semibold text-fuchsia-600">
              Swap
            </span>
            <span className="text-2xl font-semibold text-fuchsia-600">
              Trade
            </span>
            <span className="text-2xl font-semibold text-fuchsia-600">
              NFTs
            </span>
          </div>

          <div className="buton w-[52%] flex flex-row justify-between items-center">
            <div className="sui flex flex-row">
              <img src={Owl} alt="FUNDEX" className="" />
              <p className="text-2xl font-semibold text-black ml-2">$0.999</p>
            </div>
            <div className="flag">
              <img src={Flag} alt="FUNDEX" className="bg-pink-200" />
            </div>
            <div className="btn px-6 py-2 bg-gradient-to-t from-fuchsia-300 to-fuchsia-600 rounded-2xl drop-shadow-md ">
              <span className="text-xl font-semibold text-white">
                Connect Wallet
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navi;
