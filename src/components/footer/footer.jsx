import React from 'react'
import Logo from "../../img/logo.png"
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";






const Footer = () => {
  return (
    <div className="footer-container w-full h-[400px]  mt-14 flex flex-col items-center">
      <div className="footer-wrapper w-full max-w-[80%] flex flex-row justify-between mt-14 gap-5 ">
        <div className="column1 w-1/4 flex flex-col gap-2 ">
          <div className="logo-btnBuy flex flex-row justify-between items-center mb-4">
            <img src={Logo} alt="" className="h-[32px]  " />
            <button className="rounded-lg bg-gradient-to-b from-fuchsia-900 to bg-fuchsia-400 px-3 py-1 text-white font-semibold text-sm hover:drop-shadow-md hover:-rotate-3">
              Buy FUN
            </button>
          </div>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Call Center
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">Email</span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Message
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Feedback
          </span>
        </div>
        <div className="column2 w-1/4 flex flex-col gap-2 ">
          <h1 className="text-3xl text-fuchsia-900 font-bold mb-2">About Us</h1>
          <span className="text-sm text-fuchsia-900 font-semibold">
            About Fundex
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            About Naeswari Indonesia
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            About Salmonchain
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Our Ecosystem
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Whitepaper
          </span>
        </div>
        <div className="column3 w-1/4 flex flex-col gap-2 ">
          <h1 className="text-3xl text-fuchsia-900 font-bold mb-2">Products</h1>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Instant Swap
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Trading
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">NFTs</span>
        </div>
        <div className="column4 w-1/4 flex flex-col gap-2 ">
          <h1 className="text-3xl text-fuchsia-900 font-bold mb-2">Support</h1>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Help Center
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Privacy Policy
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Terms and Conditions
          </span>
          <span className="text-sm text-fuchsia-900 font-semibold">
            Partnership Information
          </span>
        </div>
      </div>
      <div className="social-icons w-full max-w-[80%] flex flex-row gap-5 mt-5  ">
        <TelegramIcon
          fontSize="medium"
          className="text-fuchsia-900 hover:-rotate-45 hover:transition-all duration-300"
        />
        <InstagramIcon
          fontSize="medium"
          className="text-fuchsia-900 hover:-rotate-45 hover:transition-all duration-300 "
        />
        <FacebookIcon
          fontSize="medium"
          className="text-fuchsia-900 hover:-rotate-45 hover:transition-all duration-300 "
        />
        <TwitterIcon
          fontSize="medium"
          className="text-fuchsia-900 hover:-rotate-45 hover:transition-all duration-300 "
        />
        <GitHubIcon
          fontSize="medium"
          className="text-fuchsia-900 hover:-rotate-45 hover:transition-all duration-300 "
        />
      </div>
    </div>
  );
}

export default Footer
