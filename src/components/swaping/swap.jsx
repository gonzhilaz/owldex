import React from 'react'
import Arrow from "../../img/Group 59.png"
import BNB from "../../img/logo-bnb.png"
import SUI from "../../img/logo-salmon.png";

const Swapping = () => {
  return (
    <>
      <div className="swap-container w-full h-40 flex mt-4 justify-center">
        <div className="swap-wrapper w-full max-w-[80%] flex flex-row justify-between items-center ">
          <div className="kiri w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-md shadow-md drop-shadow-md border border-white border-r-0 border-b-0 px-12 py-4 flex flex-col gap-5">
            <div className="title flex flex-row justify-between">
              <p className="text-xl text-fuchsia-900 font-semibold">From</p>
              <span className="text-xl text-fuchsia-900 font-semibold">
                Balance : <span>0.000000000</span>
              </span>
            </div>
            <div className="tList flex flex-row justify-between">
              <div className="pilihan w-[120px] bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-md drop-shdaow-md shadow-sm border border-white border-r-0 border-b-0 px-2 py-2">
                <div className="logoToken flex flex-row ">
                  <img src={BNB} alt="" className="h-8 mr-2" />
                  <span className="text-xl text-fuchsia-900 font-semibold">
                    BNB
                  </span>
                </div>
              </div>
              <span className="token text-3xl text-fuchsia-900 font-semibold">
                1
              </span>
            </div>
          </div>

          <div className="panah w-[220px] flex justify-center items-center">
            <img src={Arrow} alt="" className="drop-shadow-xl" />
          </div>
          <div className="kanan w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-md shadow-md drop-shadow-md border border-white border-r-0 border-b-0 px-12 py-4 flex flex-col gap-5">
            <div className="title flex flex-row justify-between">
              <p className="text-xl text-fuchsia-900 font-semibold">
                To (Estimated)
              </p>
              <span className="text-xl text-fuchsia-900 font-semibold">
                Balance : <span>0.000000000</span>
              </span>
            </div>
            <div className="tList flex flex-row justify-between">
              <div className="pilihan w-[120px] bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-md drop-shdaow-md shadow-sm border border-white border-r-0 border-b-0 px-2 py-2">
                <div className="logoToken flex flex-row ">
                  <img src={SUI} alt="" className="h-8 mr-2" />
                  <span className="text-xl text-fuchsia-900 font-semibold">
                    SUI
                  </span>
                </div>
              </div>
              <span className="token text-3xl text-fuchsia-900 font-semibold">
                9999999
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="swap-info-container w-full flex mt-2 justify-center">
        <div className="swap-info-wrapper w-full max-w-[70%] flex flex-row justify-between items-center ">
          <span className="text-sm text-fuchsia-900 font-semibold ">
            <span className="text-sm text-fuchsia-900 font-bold ">1 SUI</span> =
            <span className="text-sm text-red-600 font-semibold ">
              0.0000113656{" "}
              <span className="text-sm text-fuchsia-900 font-bold ">BNB</span>{" "}
              <span className="text-sm text-fuchsia-900 font-semibold ">
                ($0.294823)
              </span>
            </span>
          </span>
          <div className="divide w-[2px] h-[28px] bg-fuchsia-900" />
          <span className="text-sm text-fuchsia-900 font-semibold ">
            Minimum Received
            <span className="text-sm text-red-600 font-semibold  "> 12345</span>
          </span>
          <div className="divide w-[2px] h-[28px] bg-fuchsia-900" />
          <span className="text-sm text-fuchsia-900 font-semibold ">
            Price Impact :<b> 0.20%</b>
          </span>
          <div className="divide w-[2px] h-[28px] bg-fuchsia-900" />
          <span className="text-sm text-fuchsia-900 font-semibold ">
            Liquidity Provider Fee :<b> 0.03398</b>
          </span>
          <div className="divide w-[2px] h-[28px] bg-fuchsia-900" />
          <span className="text-sm text-fuchsia-900 font-semibold ">
            RFI<b> 1%</b>
          </span>
        </div>
      </div>
      <div className="button-container w-full flex my-10 justify-center">
        <div className="button-wrapper w-full max-w-[70%] h-16 flex flex-row justify-center  ">
          <div className="btn px-8 py-2 bg-gradient-to-t from-fuchsia-300 to-fuchsia-600 rounded-2xl drop-shadow-md flex items-center ">
            <span className="text-3xl font-semibold text-white">
              Connect Wallet
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Swapping;
