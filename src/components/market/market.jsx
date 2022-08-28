import React from "react";
import SUI from "../../img/logo-salmon.png";
import BNB from "../../img/logo-bnb.png"


const Trend = () => {
  const rows = [
    {
      id: "1",
      img: SUI,
      token: "SUI / BNB",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "2",
      img: SUI,
      token: "SUI / BUSD",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "3",
      img: SUI,
      token: "SUI / USDT",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "4",
      img: SUI,
      token: "SUI / USDC",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "5",
      img: BNB,
      token: "BNB / BTC",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "6",
      img: BNB,
      token: "BNB / BUSD",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "7",
      img: BNB,
      token: "BNB / ETH",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
    {
      id: "8",
      img: BNB,
      token: "BNB / USDT",
      lastPrice: "99999",
      changed: "+9999",
      marketcap: "99999"
    },
  ];
  return (
    <>
      <div className="table-container w-full flex flex-col justify-center items-center ">
        <div className="table-header w-full max-w-[80%] flex flex-col justify-start items-start pt-10">
          <div className="box w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-md shadow-md drop-shadow-md border border-white border-r-0 border-b-0 px-12 py-4 flex flex-col ">
            <div className="table-container w-full flex  justify-center items-center">
              <div className="table-header w-full flex flex-col justify-start items-start">
                <div className="table-title">
                  <span className="text-4xl text-fuchsia-900 font-semibold">
                    MARKET TREND
                  </span>
                </div>
                <div className="table-button flex flex-row ">
                  <button className="text-md font-semibold text-fuchsia-900 cursor-pointer pr-4">
                    Spot Exchange
                  </button>
                  <button className="text-md font-semibold text-fuchsia-100 cursor-pointer">
                    New Listing
                  </button>
                </div>
              </div>
            </div>
            <div className="table-container w-full flex flex-col justify-center items-center">
              <div className="table-header w-full flex flex-row justify-center items-center">
                <div className="column1 w-1/4  flex flex-row justify-start">
                  <span className="font-semibold text-md text-fuchsia-900">
                    TOKEN
                  </span>
                </div>
                <div className="column2 w-1/4 flex flex-row justify-center ">
                  <span className="font-semibold text-lg text-fuchsia-900">
                    LAST PRICE
                  </span>
                </div>
                <div className="column3 w-1/4 flex flex-row justify-center ">
                  <h1 className="font-semibold text-lg text-fuchsia-900">
                    24h Changed
                  </h1>
                </div>
                <div className="column4 w-1/4 flex flex-row justify-center ">
                  <h1 className="font-semibold text-lg text-fuchsia-900">
                    Marketcap
                  </h1>
                </div>
              </div>
              {rows.map((row) => (
                <div
                  key={row.id}
                  className="table-wrapper w-full flex flex-row justify-center items-center pt-3 "
                >
                  <div className="column1 w-1/4  flex flex-row justify-start">
                    <img
                      src={row.img}
                      alt=""
                      className="w-[24px] h-[24px] mr-2"
                    />
                    <span className="font-semibold text-md text-fuchsia-900">
                      {row.token}
                    </span>
                  </div>
                  <div className="column2 w-1/4 flex justify-center">
                    <span className="font-semibold text-lg text-fuchsia-900">
                      {row.lastPrice}
                    </span>
                  </div>
                  <div className="column3 w-1/4 flex justify-center">
                    <h1 className="font-semibold text-lg text-green-700">
                      {row.changed}
                    </h1>
                  </div>
                  <div className="column4 w-1/4 flex justify-center">
                    <h1 className="font-semibold text-lg text-fuchsia-900 ">
                      {row.marketcap}
                    </h1>
                  </div>
                </div>
              ))}
              ,
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
