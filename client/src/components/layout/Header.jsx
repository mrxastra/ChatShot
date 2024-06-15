import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom"
import Chats from "../../pages/Chats";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenuBar = () => {
    setMenu(!menu);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);


  const handleMobile = () => {
   setIsMobile((prev) => !prev)
  }
  const openNotification = () => {
   setIsNotification((prev) => !prev)
  }
  const openGroup = () => {
   setIsGroup((prev) => !prev)
  }

  return (
    <nav
      id="header"
      className="fixed w-full py-1 bg-white shadow-lg border border-blue-400"
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <label
          for="menu-toggle"
          className="cursor-pointer md:hidden block"
          onClick={openMenuBar}
        >
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <div className=" max-[768px]:hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
              />
            </div>
            <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700" onClick={openNotification}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>
            </button>
            <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700" onClick={openGroup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
              </svg>
            </button>
            <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menu ? (
        <div className="block w-full bg-white min-[768px]:hidden absolute">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
              />
            </li>
            <li>
              <a
                className="block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2 border-blue-400 border text-blue-600 transition-transform ease-in-out duration-700"
                href="#"
              >
                adfs
              </a>
            </li>
            <li>
              <a
                className="block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2 border-blue-400 border text-blue-600 transition-transform ease-in-out duration-700"
                href="#"
              >
                sfasfs
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      {isNotification && <h1>isNotification is working</h1>}
      {isGroup && <div>working</div>}
    </nav>
  );
};

export default Header;
