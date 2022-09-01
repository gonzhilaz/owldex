import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dots from "../../img/Group 57.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export default function DropDownMenu() {




  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-row justify-center items-center w-full drop-shadow-md ">
          <img src={Dots} alt="FUNDEX" />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-5">
            <Menu.Item>
              {({ active }) => (
                <p
                  
                  className={classNames(
                    active ? "bg-gray-200 font-semibold text-fuchsia-900" : "text-fuchsia-700 font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About Us
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  
                  className={classNames(
                    active ? "bg-gray-200 font-semibold text-fuchsia-900" : "text-fuchsia-700 font-semibold",
                    "block px-4 py-2 text-sm mt-2"
                  )}
                >
                  Contact Us
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? "bg-gray-200 font-semibold text-fuchsia-900" : "text-fuchsia-700 font-semibold",
                    "block px-4 py-2 text-sm mt-2"
                  )}
                >
                  Our Social Media
                </p>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick=""
                  className={classNames(
                    active ? "bg-gray-200 font-semibold text-fuchsia-900" : "text-fuchsia-700 font-semibold",
                    "block w-full text-left px-4 py-2 text-sm mt-2"
                  )}
                >
                  Whitepaper
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
