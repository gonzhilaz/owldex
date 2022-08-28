import React from 'react'

const Tokenic = () => {
  return (
    <>
      <div className="tokenomic w-full h-40 flex mt-4 justify-center">
        <div className="isi w-full max-w-[80%] flex flex-row justify-between items-center ">
          <div className="value-locked-usd flex flex-col w-1/3 items-start">
            <span className="text-4xl font-semibold text-fuchsia-900">
              $ <span>50.998.998,00</span>
            </span>
            <p className="text-xl text-fuchsia-900">Total Value Locked (USD)</p>
          </div>
          <div className="divide w-[2px] h-[80px] bg-fuchsia-900" />
          <div className="sui-market-cap flex flex-col w-1/3 items-center">
            <span className="text-4xl font-semibold text-fuchsia-900">
              $ <span>50.998.998,00</span>
            </span>
            <p className="text-xl text-fuchsia-900">SUI Market Cap (BNB)</p>
          </div>
          <div className="divide w-[2px] h-[80px] bg-fuchsia-900" />
          <div className="holders flex flex-col w-1/3 items-end">
            <span className="text-4xl font-semibold text-fuchsia-900">
              10.000
            </span>
            <p className="text-xl text-fuchsia-900">SUI Holders</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tokenic