import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <>
      <header className="bg-[#081736] lg:px-0 px-3">
        <div className="lg:w-[1000px] w-full mx-auto text-white py-5 flex items-center justify-between">
          <div>
            <Link href="/">
              <img className="h-[2.375rem]" src="/assets/img/logo.png" alt="" />
            </Link>
          </div>
          {/* Toggle Button for Mobile */}
          <button
            id="menu-toggle"
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* Navbar Links */}
          <nav id="menu" className="hidden lg:flex space-x-4 text-1xl">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Fixtures
            </Link>
            <Link href="" className="hover:text-yellow-400"></Link>
            <div className="group">
              <Link href="" className="hover:text-yellow-400"></Link>
              <a
                // href="#!"
                className="hover:text-yellow-400 flex items-center"
                // id="drop-series-trigger"
                onClick={toggleDropdown}
              >
                Series
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <Link href="" className="hover:text-yellow-400">
              Teams
            </Link>
            <Link href="/icc-ranking" className="hover:text-yellow-400">
              ICC Ranking
            </Link>
            <Link href="" className="hover:text-yellow-400">
              News
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Fantasy Tips
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Point Table
            </Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#081736] text-1xl text-white space-y-4 py-5 hidden"
        >
          <Link href="/" className="block hover:text-yellow-400">
            Home
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Fixtures
          </Link>
          <Link href="#" className="block hover:text-yellow-400">
            Series
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Teams
          </Link>
          <Link href="/icc-ranking" className="block hover:text-yellow-400">
            ICC Ranking
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            News
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Fantasy Tips
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Point Table
          </Link>
        </div>
      </header>

      {isDropdownOpen &&
        <div
          id="drop-series-slider"
          className="text-white w-full overflow-hidden transition-all duration-300 absolute z-[1] h-[200vh] bg-[#0000004f]"
        >
          {/* Slider Navigation */}
          <div className="bg-[#081736]">
            <div className="flex items-center lg:w-[1000px] w-full mx-auto">
              <div>
                <button id="drop-slider-prev" className="text-yellow-400 text-xl">
                  ❮
                </button>
              </div>
              {/* Slider Content */}
              <div
                id="drop-slider"
                className="flex gap-4 overflow-hidden scroll-smooth mx-[25px] my-4"
              >
                <Link href="/t20series">
                  <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                    <img
                      src="/assets/img/series/series-1.png"
                      alt="BGT 2024-25"
                      className="rounded-lg w-[100px]"
                    />
                    <p className="mt-2 text-center">BGT 2024-25</p>
                  </div>
                </Link>
                <Link href="/iplseries">
                  <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                    <img
                      src="/assets/img/series/ipl.png"
                      alt="WBBL 2024"
                      className="rounded-lg w-[80px]"
                    />
                    <p className="mt-2 text-center">WBBL 2024</p>
                  </div>
                </Link>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/series-1.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/ipl.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/series-1.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/ipl.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/series-1.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/ipl.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/series-1.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                  <img
                    src="/assets/img/series/ipl.png"
                    alt="Abu Dhabi T10"
                    className="rounded-lg w-[80px]"
                  />
                  <p className="mt-2 text-center">Abu Dhabi T10</p>
                </div>
                {/* Add more items as needed */}
              </div>
              <div className="">
                <button id="drop-slider-next" className="text-yellow-400 text-xl">
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Header
