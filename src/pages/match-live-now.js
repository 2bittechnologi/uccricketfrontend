import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const MatchLiveNow = () => {
  const [activeTab, setActiveTab] = useState('cust-box-click-all');
  const [activeTab1, setActiveTab1] = useState('cust-box-click-firview');

  const handleTabClick = (event, tabName) => {
    setActiveTab(tabName);
  };

  const handleProbabilityTab = (event, tabName) => {
    setActiveTab1(tabName);
  };



  return (
    <Layout>
      <section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
        <div className="lg:w-[1000px] mx-auto">
          <div className="md:flex justify-between items-center md:py-0 py-4">
            <div className="flex items-center text-1xl text-[#FE4848] font-bold uppercase relative">
              <img src="/assets/img/home/blinking-dot.gif" className="h-[20px]" alt="" />
              LIVE NOW
              {/* <svg>
                  <circle fill="#ff0000" stroke="none" cx="60" cy="60" r="12">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
                  </circle>
                </svg> */}
            </div>
            <div className="text-[#8192B4] font-normal  text-1xl md:text-center md:mx-0 my-3">
              Bangladesh in India August,&nbsp;2nd Test,{" "}
              <span className="font-semibold text-[#b9b9b9]"> Day 4-Session 3</span>
            </div>
            <div className="flex text-[#8192B4] text-1xl font-normal  md:justify-end md:justify-start">
              <img src="/assets/img/clander.png" className="mr-2" alt="" />
              1-5 oct 2024
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#E4E9F01A]">
          <div className="lg:w-[1000px] mx-auto md:py-9 tracking-[1px]">
            <div className="md:flex py-8 justify-between items-center">
              <div className="flex gap-2 flex-row text-[#BDCCECA8] uppercase items-center w-full">
                <img
                  className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                  src="/assets/img/flg-1.png"
                  alt="ind"
                />
                <div className="flex md:flex-col md:items-start items-center md:gap-0 gap-2">
                  <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                    IND
                  </p>
                  <p className="lg:text-[18px] text-[16px] font-semibold">
                    139/4 <span className="text-[13px] font-medium">(42.0)</span>{" "}
                    &amp; 222 <span className="text-[13px] font-medium">(66.2)</span>
                  </p>
                </div>
              </div>
              <div className="text-[#8192B4] font-normal text-center w-full text-center md:my-0 my-4">
                <p className="text-[#FFBD71] lg:text-[20px] text-[16px] font-semibold">
                  Day 4-Session 3
                </p>
                <p className="text-[#C1CEEA] text-[14px] ">
                  CRR: 3.8 IND trail by 299 runs.
                </p>
              </div>
              <div className="flex gap-2 flex-row flex-row-reverse md:flex-row  items-center text-[#8192B4] font-normal w-full justify-end">
                <div className="flex md:flex-col md:items-end items-center md:gap-0 gap-2">
                  <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                    BAN
                  </p>
                  <p className="lg:text-[18px] text-[16px] font-semibold">
                    160<span className="text-[14px] font-medium"> (63.0)</span>{" "}
                    &amp; Yet To Bet
                  </p>
                </div>
                <img
                  src="/assets/img/ban.png"
                  className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                  alt="ban"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
        <div id="tabs" className="my-4">
          <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
            <Link href="/match-upcoming">
              <button
                onclick="handleTabClick(event, 'info')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                More Info
              </button>
            </Link>
            <Link href="/match-live-now">
              <button
                onclick="handleTabClick(event, 'live')"
                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
              >
                Live
              </button>
            </Link>
            <Link href="/match-scorecard">
              <button
                onclick="handleTabClick(event, 'scorecard')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Scorecard
              </button>
            </Link>
            <button
              onclick="handleTabClick(event, 'overs')"
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Squad
            </button>
            <button
              onclick="handleTabClick(event, 'points')"
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Points Table
            </button>
            <button
              onclick="handleTabClick(event, 'stats')"
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Stats
            </button>
          </div>
        </div>
        <div id="tab-content">
          {/*------------------------  More Info Seaction Start ---------------------------*/}
          <div id="info" className="tab-content hidden">
            <div className="md:grid grid-cols-12 gap-4">
              {/* Match Detail */}
              <div className="lg:col-span-8 md:col-span-7">
                <div className="rounded-lg bg-white">
                  <div className="p-4">
                    <div className="md:flex items-center justify-between">
                      <div className="flex gap-4 items-center md:mb-0 mb-[15px]">
                        <div>
                          <img
                            src="/assets/img/vs-img.png"
                            className="md:h-[auto] h-[56px]"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-[16px] text-[#909090] font-medium mb-1">
                            2nd Test
                          </p>
                          <p className="text-[16px] text-[#272B47] font-medium mb-2">
                            Bangladesh tour of India
                          </p>
                        </div>
                      </div>
                      <div className="md:text-end">
                        <p className="text-[14px] mb-1 text-[#272B47] font-medium">
                          <span className="text-[14px] text-[#909090]">Date :</span>{" "}
                          27 Sep 2024, Fri, 9:30 AM IST
                        </p>
                        <p className="text-[14px] text-[#272B47] font-medium">
                          <span className="text-[14px] text-[#909090]">Toss :</span>{" "}
                          IND won the toss &amp; elected to bowl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <div>
                    <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                      Recent Performance{" "}
                      <span className="text-[#909090]"> (Last 5 match) </span>
                    </h3>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="md:px-2">
                      <div className="performance-section">
                        <div className="flex items-center justify-between my-3">
                          <div className="flex items-center space-x-3">
                            <div>
                              <img
                                src="/assets/img/flag/17.png"
                                className="h-[25px]"
                                alt="india"
                              />
                            </div>
                            <h3 className="text-1xl font-medium">India</h3>
                          </div>
                          <div>
                            <div className="ml-auto flex gap-1 items-center">
                              <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                W
                              </span>
                              <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                W
                              </span>
                              <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                L
                              </span>
                              <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                L
                              </span>
                              <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                W
                              </span>
                              <span>
                                <button className="arro-button">
                                  <img
                                    src="/assets/img/arrow.png"
                                    className="rotate-180"
                                    alt=""
                                  />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="md:px-3 open-Performance-data">
                          {/* full screen teame data */}
                          <div className="overflow-x-auto lg:block hidden">
                            <table className="w-full text-left rtl:text-right">
                              <tbody>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1 ">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                        <div className="flex items-center space-x-1">
                                          <img
                                            src="/assets/img/flag/18.png"
                                            className="h-[24px] rounded-full"
                                            alt="aus"
                                          />
                                          <span className="text-[#909090]">AUS</span>
                                        </div>
                                        <p>274/10 &amp; 170/10</p>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                        <p>274/10 &amp; 170/10</p>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-[#909090]">IND</span>
                                          <img
                                            src="/assets/img/flag/17.png"
                                            className="h-[24px]"
                                            alt="ind"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <div className="flex items-center space-x-1">
                                          <img
                                            src="/assets/img/flag/18.png"
                                            className="h-[24px] rounded-full"
                                            alt="aus"
                                          />
                                          <span className="text-[#909090]">AUS</span>
                                        </div>
                                        <p className="">540/10 &amp; 220/10</p>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <p>140/10 &amp; 420/10</p>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-[#909090]">IND</span>
                                          <img
                                            src="/assets/img/flag/17.png"
                                            className="h-[24px]"
                                            alt="aus"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                        L
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <div className="flex items-center space-x-1">
                                          <img
                                            src="/assets/img/flag/19.png"
                                            className="h-[24px] rounded-full"
                                            alt="pak"
                                          />
                                          <span className="text-[#909090]">PAK</span>
                                        </div>
                                        <p className="">274/10 &amp; 170/10</p>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <p>250/10 &amp; 160/10</p>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-[#909090]">IND</span>
                                          <img
                                            src="/assets/img/flag/17.png"
                                            className="h-[24px]"
                                            alt="aus"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        250/10 &amp; 160/10
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                        L
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <div className="flex items-center space-x-1">
                                          <img
                                            src="/assets/img/flag/19.png"
                                            className="h-[24px] rounded-full"
                                            alt="aus"
                                          />
                                          <span className="text-[#909090]">PAK</span>
                                        </div>
                                        <p className="">274/10 &amp; 170/10</p>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <p>280/10 &amp; 190/10</p>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-[#909090]">IND</span>
                                          <img
                                            src="/assets/img/flag/17.png"
                                            className="h-[24px]"
                                            alt="aus"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <div className="flex items-center space-x-1">
                                          <img
                                            src="/assets/img/flag/18.png"
                                            className="h-[24px] rounded-full"
                                            alt="aus"
                                          />
                                          <span className="text-[#909090]">PAK</span>
                                        </div>
                                        <p className="">174/10 &amp; 160/10</p>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <a href="#">
                                      <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                        <p>380/10 &amp; 250/10</p>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-[#909090]">IND</span>
                                          <img
                                            src="/assets/img/flag/17.png"
                                            className="h-[24px]"
                                            alt="aus"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* responsive teame data  */}
                          <div className="lg:hidden block">
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <a href="#">
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/18.png"
                                        className="h-[18px] rounded-full"
                                        alt="aus"
                                      />
                                      <span className="text-[#909090]">AUS</span>
                                    </div>
                                    <p>274/10 &amp; 170/10</p>
                                  </div>
                                </a>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                          VS
                                      </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>274/10 &amp; 170/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/18.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">AUS</span>
                                  </div>
                                  <p>540/10 &amp; 220/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                      VS
                                  </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>140/10 &amp; 420/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                      L
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                  VS
                              </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                      L
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                              VS
                          </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                          VS
                      </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                      VS
                  </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="performance-section">
                        <div className="mt-6">
                          <div className="flex items-center justify-between my-3">
                            <div className="flex items-center space-x-3">
                              <div>
                                <img
                                  src="/assets/img/flag/3.png"
                                  alt="ban"
                                  className="h-[25px]"
                                />
                              </div>
                              <h3 className="text-1xl font-medium">Bangladesh</h3>
                            </div>
                            <div>
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                  W
                                </span>
                                <span>
                                  <button className="arro-button">
                                    <img src="/assets/img/arrow.png" alt="" />
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-t-[1px] border-[#E4E9F0]" />
                        </div>
                        <div className="md:px-3 open-Performance-data hidden">
                          {/* full screen teame data */}
                          <div className="overflow-x-auto lg:block hidden">
                            <table className="w-full text-left rtl:text-right">
                              <tbody>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1 ">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                      <div className="flex items-center space-x-1">
                                        <img
                                          src="/assets/img/flag/18.png"
                                          className="h-[24px] rounded-full"
                                          alt="aus"
                                        />
                                        <span className="text-[#909090]">AUS</span>
                                      </div>
                                      <p>274/10 &amp; 170/10</p>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                      <p>274/10 &amp; 170/10</p>
                                      <div className="flex items-center space-x-1">
                                        <span className="text-[#909090]">IND</span>
                                        <img
                                          src="/assets/img/flag/17.png"
                                          className="h-[24px]"
                                          alt="ind"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <div className="flex items-center space-x-1">
                                        <img
                                          src="/assets/img/flag/18.png"
                                          className="h-[24px] rounded-full"
                                          alt="aus"
                                        />
                                        <span className="text-[#909090]">AUS</span>
                                      </div>
                                      <p className="">540/10 &amp; 220/10</p>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <p>140/10 &amp; 420/10</p>
                                      <div className="flex items-center space-x-1">
                                        <span className="text-[#909090]">IND</span>
                                        <img
                                          src="/assets/img/flag/17.png"
                                          className="h-[24px]"
                                          alt="aus"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                        L
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <div className="flex items-center space-x-1">
                                        <img
                                          src="/assets/img/flag/19.png"
                                          className="h-[24px] rounded-full"
                                          alt="pak"
                                        />
                                        <span className="text-[#909090]">PAK</span>
                                      </div>
                                      <p className="">274/10 &amp; 170/10</p>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <p>250/10 &amp; 160/10</p>
                                      <div className="flex items-center space-x-1">
                                        <span className="text-[#909090]">IND</span>
                                        <img
                                          src="/assets/img/flag/17.png"
                                          className="h-[24px]"
                                          alt="aus"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        250/10 &amp; 160/10
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                        L
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <div className="flex items-center space-x-1">
                                        <img
                                          src="/assets/img/flag/19.png"
                                          className="h-[24px] rounded-full"
                                          alt="aus"
                                        />
                                        <span className="text-[#909090]">PAK</span>
                                      </div>
                                      <p className="">274/10 &amp; 170/10</p>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <p>280/10 &amp; 190/10</p>
                                      <div className="flex items-center space-x-1">
                                        <span className="text-[#909090]">IND</span>
                                        <img
                                          src="/assets/img/flag/17.png"
                                          className="h-[24px]"
                                          alt="aus"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                  <td className="px-4 pl-0 py-1">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <div className="flex items-center space-x-1">
                                        <img
                                          src="/assets/img/flag/18.png"
                                          className="h-[24px] rounded-full"
                                          alt="aus"
                                        />
                                        <span className="text-[#909090]">PAK</span>
                                      </div>
                                      <p className="">174/10 &amp; 160/10</p>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                    VS
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                      <p>380/10 &amp; 250/10</p>
                                      <div className="flex items-center space-x-1">
                                        <span className="text-[#909090]">IND</span>
                                        <img
                                          src="/assets/img/flag/17.png"
                                          className="h-[24px]"
                                          alt="aus"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td className="md:px-4 py-2">
                                    <div className="text-right leading-6">
                                      <p className="font-medium">2nd TEST</p>
                                      <p className="text-[#909090] font-normal">
                                        AUS VS IND 2024
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                    <div className="text-center">
                                      <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                        W
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* responsive teame data  */}
                          <div className="lg:hidden block">
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/18.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">AUS</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                          VS
                                      </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>274/10 &amp; 170/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/18.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">AUS</span>
                                  </div>
                                  <p>540/10 &amp; 220/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                      VS
                                  </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>140/10 &amp; 420/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                      L
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                  VS
                              </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                      L
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                              VS
                          </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                          VS
                      </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                              <div className="">
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                  <div className="flex items-center space-x-1">
                                    <img
                                      src="/assets/img/flag/19.png"
                                      className="h-[18px] rounded-full"
                                      alt="aus"
                                    />
                                    <span className="text-[#909090]">PAK</span>
                                  </div>
                                  <p>274/10 &amp; 170/10</p>
                                </div>
                                {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                      VS
                  </div> */}
                                <div>
                                  <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                    <div className="flex items-center space-x-1">
                                      <img
                                        src="/assets/img/flag/17.png"
                                        className="h-[18px]"
                                        alt="ind"
                                      />
                                      <span className="text-[#909090]">IND</span>
                                    </div>
                                    <p>250/10 &amp; 160/10</p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right leading-6">
                                  <p className="font-medium">2nd TEST</p>
                                  <p className="text-[#909090] font-normal">
                                    AUS VS IND 2024
                                  </p>
                                </div>
                                <div>
                                  <div className="text-center">
                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                      W
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <div>
                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                      Head To Head (Last 10 matches)
                    </h3>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-4 text-1xl flex justify-between items-center">
                      <div className="font-bold uppercase flex items-center">
                        <img className="h-[30px]" src="/assets/img/flg-1.png" alt="" />
                        <p className="mx-2 font-semibold uppercase">IND</p>
                      </div>
                      <div className=" font-normal text-center">
                        <p className="text-[#D28505] text-[17px] font-semibold">
                          10 <span className="text-[#009900]">- 10</span>
                        </p>
                      </div>
                      <div className="font-bold uppercase flex items-center">
                        <p className="mx-2 font-semibold uppercase">BAN</p>
                        <img className="h-[30px]" src="/assets/img/ban.png" alt="ban" />
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-4 flex justify-between items-center">
                      <div className="font-medium  w-full">
                        <p className="mx-2 font-semibold uppercase">BAN</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          227 &amp; 231
                        </p>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF]">IND Won</p>
                        <p className="text-[#586577] font-medium">
                          2nd TEST, BAN vs IND 2022
                        </p>
                      </div>
                      <div className="font-medium text-right w-full">
                        <p className="mx-2 font-semibold uppercase">IND</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          314 &amp; 145/7
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-4 flex justify-between items-center">
                      <div className="font-medium w-full">
                        <p className="mx-2 font-semibold uppercase">BAN</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          150 &amp; 324
                        </p>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF]">IND Won</p>
                        <p className="text-[#586577] font-medium">
                          2nd TEST, BAN vs IND 2022
                        </p>
                      </div>
                      <div className="font-medium text-right w-full">
                        <p className="mx-2 font-semibold uppercase">IND</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          404 &amp; 258/2
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-4 flex justify-between items-center">
                      <div className="font-medium w-full">
                        <p className="mx-2 font-semibold uppercase">IND</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          347/9 (89.2)
                        </p>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF]">IND Won</p>
                        <p className="text-[#586577] font-medium">
                          2nd TEST, BAN vs IND 2022
                        </p>
                      </div>
                      <div className="font-medium text-right w-full">
                        <p className="mx-2 font-semibold uppercase">BAN</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          106 &amp; 195
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-4 flex justify-between items-center">
                      <div className="font-medium w-full">
                        <p className="mx-2 font-semibold uppercase">IND</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          493/6 (114.0)
                        </p>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF]">IND Won</p>
                        <p className="text-[#586577] font-medium">
                          2nd TEST, BAN vs IND 2022
                        </p>
                      </div>
                      <div className="font-medium text-right w-full">
                        <p className="mx-2 font-semibold uppercase">BAN</p>
                        <p className="mx-2 font-medium uppercase text-[#586577]">
                          150 &amp; 113
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <div className="cust-box-click-container">
                    <div className="md:flex justify-between items-center  mb-3">
                      <h3 className="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                        Team Comparison (Last 10 matches)
                      </h3>
                      <div className="flex items-center md:justify-center justify-end md:mt-0 mt-4">
                        <button
                          className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                          onclick="showCustomBox(this, 'cust-box-click-overall1')"
                        >
                          <span>Overall</span>
                        </button>
                        <button
                          className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                          onclick="showCustomBox(this, 'cust-box-click-onvenue1')"
                        >
                          <span>On Venue</span>
                        </button>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="cust-box-click-content cust-box-click-overall1 mt-4">
                      <div>
                        <div className="py-4 flex justify-between items-center">
                          <div className="font-bold flex items-center">
                            <img className="h-[30px]" src="/assets/img/flg-1.png" alt="" />
                            <p className="mx-2 text-1xl font-semibold">
                              IND
                              <span className="text-[13px] text-[#9094b6] font-medium block">
                                vs all teams
                              </span>
                            </p>
                          </div>
                          <div className="font-bold flex items-center">
                            <p className="mx-2 text-1xl font-semibold text-right">
                              BAN
                              <span className="text-[13px] text-[#9094b6] font-medium block">
                                vs all teams
                              </span>
                            </p>
                            <img className="h-[30px]" src="/assets/img/ban.png" alt="ban" />
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="py-2 flex justify-between items-center">
                          <div className="font-medium text-[#586577] w-full">
                            <p className="mx-2 font-semibold uppercase">1</p>
                          </div>
                          <div className=" font-semibold text-center w-full">
                            <p className="text-[#73758B] font-normal">
                              Matches Played
                            </p>
                          </div>
                          <div className="font-medium text-right w-full">
                            <p className="text-[#586577] font-medium">1</p>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="py-2 flex justify-between items-center">
                          <div className="font-medium text-[#586577] w-full">
                            <p className="mx-2 font-semibold text-[#439F76] uppercase">
                              100%
                            </p>
                          </div>
                          <div className=" font-semibold text-center w-full">
                            <p className="text-[#73758B] font-normal">Win</p>
                          </div>
                          <div className="font-medium text-right w-full">
                            <p className="text-[#586577] font-medium">0%</p>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="py-2 flex justify-between items-center">
                          <div className="font-medium text-[#586577] w-full">
                            <p className="mx-2 font-semibold uppercase text-[#439F76]">
                              119
                            </p>
                          </div>
                          <div className=" font-semibold text-center w-full">
                            <p className="text-[#73758B] font-normal">Avg Score</p>
                          </div>
                          <div className="font-medium text-right w-full">
                            <p className="text-[#586577] font-medium">123</p>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="py-2 flex justify-between items-center">
                          <div className="font-medium text-[#586577] w-full">
                            <p className="mx-2 font-semibold uppercase text-[#439F76]">
                              212
                            </p>
                          </div>
                          <div className=" font-semibold text-center w-full">
                            <p className="text-[#73758B] font-normal">
                              Highest Score
                            </p>
                          </div>
                          <div className="font-medium text-right w-full">
                            <p className="text-[#586577] font-medium">231</p>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div className="py-2 flex justify-between items-center">
                          <div className="font-medium text-[#586577] w-full">
                            <p className="mx-2 font-semibold uppercase text-[#E14848]">
                              152
                            </p>
                          </div>
                          <div className=" font-semibold text-center w-full">
                            <p className="text-[#73758B] font-normal">Lowest Score</p>
                          </div>
                          <div className="font-medium text-right w-full">
                            <p className="text-[#586577] font-medium">112</p>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                      </div>
                    </div>
                    <div className="cust-box-click-content cust-box-click-onvenue1 mt-4 hidden">
                      <p>View Content</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <div className="relative">
                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Weather Condition
                    </h3>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="flex lg:grid md:grid-cols-12 justify-between md:gap-4 items-center py-3">
                      <div className="col-span-3">
                        <div>
                          <img
                            src="/assets/img/weather.png"
                            className="md:h-[75px] h-[60px]"
                            alt=""
                          />
                          <p className="text-1xl ml-2 font-semibold">Sunny</p>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="font-normal text-[#616161] mb-2">
                          <p className="lg:relative lg:top-0 lg:right-0 lg:text-left lg:text-[13px] absolute top-[4px] right-0 text-right text-[10px]">
                            <span className="lg:block"> Last Updated: </span>
                            12:00AM / 18th Nov 2024
                          </p>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <p className="font-bold	md:text-[28px] text-[24px]">30.81°C</p>
                      </div>
                      <div className="col-span-3 text-[#616161] md:text-[13px] text-[11px]">
                        <div className="flex justify-between pb-1 items-center">
                          <div className="flex space-x-2 items-center">
                            <img src="/assets/img/w-1.png" className="h-[16px]" alt="" />
                            <p className="">Humidity:</p>
                          </div>
                          <div>
                            <span className="text-[#FEA126]">95%</span>
                          </div>
                        </div>
                        <div className="flex justify-between pb-1 space-x-2 items-center">
                          <div className="flex space-x-2 items-center">
                            <img src="/assets/img/w-2.png" className="h-[16px]" alt="" />
                            <p className="">Rain chance: </p>
                          </div>
                          <div>
                            <span className="text-[#16A1EF]">40%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2 items-center">
                            <img src="/assets/img/wind.png" className="h-[16px]" alt="" />
                            <p className="">Wind:</p>
                          </div>
                          <div>
                            <span className="text-[#1565c0]">5km/h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="flex space-x-2 pt-3 items-center">
                      <img src="/assets/img/map.png" alt="location" />
                      <p className="text-[#3E436D]">
                        Molana Azad Stadium, Jammu, India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    Venue Stats
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  {/* full screen view */}
                  <div className="lg:flex hidden justify-between items-center py-4">
                    <div className="col-span-1 relative">
                      <img src="/assets/img/ring.png" className="h-[90px]" alt="" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="font-bold text-[18px]">7</p>
                        <p className="text-[10px]">Matches</p>
                      </div>
                    </div>
                    <div className="col-span-1 relative">
                      <div className="pb-5">
                        <p className="text-[#13b76dbd] font-semibold">43%</p>
                        <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                      </div>
                      <div className="">
                        <p className="text-[#B7132B] font-semibold">29%</p>
                        <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                      </div>
                    </div>
                    <div className="col-span-1 relative">
                      <div className="pb-5">
                        <p className="font-semibold">398</p>
                        <p className="text-[13px] text-[#3E436D]">Avg 1st Innings</p>
                      </div>
                      <div className="">
                        <p className="font-semibold">405</p>
                        <p className="text-[13px] text-[#3E436D]">Avg 2st Innings</p>
                      </div>
                    </div>
                    <div className="col-span-1 relative">
                      <div className="pb-5">
                        <p className="font-semibold">222</p>
                        <p className="text-[13px] text-[#3E436D]">Avg 3st Innings</p>
                      </div>
                      <div className="">
                        <p>43%</p>
                        <p className="text-[13px] text-[#3E436D]">Avg 4st Innings</p>
                      </div>
                    </div>
                    <div className="col-span-1 relative">
                      <p className="text-[13px] text-center font-semibold  pb-5">
                        Highest Total
                      </p>
                      <p className="text-[13px] text-center font-semibold ">
                        Lowest Total
                      </p>
                    </div>
                    <div className="col-span-1 relative">
                      <p className="text-[13px] text-center text-[#3E436D] pb-5">
                        by ENG vs IND
                      </p>
                      <p className="text-[13px] text-center text-[#3E436D]">
                        by AUS vs IND
                      </p>
                    </div>
                    <div className="col-span-1 relative text-center">
                      <p className="font-bold pb-5">759-7</p>
                      <p className="font-bold">50-2</p>
                    </div>
                  </div>
                  {/* responsive screen view */}
                  <div className="lg:hidden">
                    <div className="flex items-center justify-around my-2 py-3 rounded-lg bg-[#f7faff]">
                      <div className="col-span-1 relative">
                        <div
                          className="flex justify-center items-center w-[81px] h-[81px] rounded-full"
                          style={{
                            background:
                              "conic-gradient(#3e436d 0 29%, #b7132b 0 50%, #13b76dbd 0 100%)"
                          }}
                        >
                          <div className="flex flex-col items-center w-[65px] h-[64px] p-4 rounded-full bg-white">
                            <p className="font-bold text-[18px]">7</p>
                            <p className="text-[10px]">Matches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 relative">
                        <div className="flex items-center space-x-8 mb-4">
                          <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                          <p className="text-[#13b76dbd] font-semibold text-1xl">
                            43%
                          </p>
                        </div>
                        <div className="flex items-center space-x-8">
                          <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                          <p className="text-[#B7132B] font-semibold text-1xl">29%</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 mb-3 pb-3 border-b border-[#e4e9f0]">
                      <div className="flex flex-col items-start space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Avg 1st Innings</p>
                        <p className="font-medium text-1xl">398</p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Avg 2st Innings</p>
                        <p className="font-medium text-1xl">405</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#e4e9f0]">
                      <div className="flex flex-col items-start space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Avg 3st Innings</p>
                        <p className="font-medium text-1xl">222</p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Avg 4st Innings</p>
                        <p className="font-medium text-1xl">43%</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end pb-3 mb-3 border-b border-[#e4e9f0]">
                      <div className="flex flex-col items-start space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Highest</p>
                        <p className="font-medium text-1xl">
                          759-7{" "}
                          <span className="text-[13px] text-[#3E436D]">by ENG</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <p className="text-[13px] text-[#3E436D]">ENG vs IND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end pb-3 mb-3 border-b border-[#e4e9f0]">
                      <div className="flex flex-col items-start space-y-1">
                        <p className="text-[13px] text-[#3E436D]">Lowest</p>
                        <p className="font-medium text-1xl">
                          50-2{" "}
                          <span className="text-[13px] text-[#3E436D]">by AUS</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <p className="text-[13px] text-[#3E436D]">AUS vs IND</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 md:hidden">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                      <h3 className="text-1xl font-semibold mb-2 mb-3">
                        Pace vs Spin on Venue{" "}
                        <span className="text-[#909090]">
                          {" "}
                          &nbsp;(Last 10 matches){" "}
                        </span>
                      </h3>
                    </div>
                    <div className="w-full">
                      <div className="bg-[#B7132B] h-[4px] mr-2 mb-2">
                        <div
                          className="bg-[#13b76dbd] h-[4px]"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className=" text-gray-500">
                          {" "}
                          Pace:{" "}
                          <span className="text-[#13b76dbd] text-[15px] font-semibold">
                            40%{" "}
                          </span>
                        </p>
                        <p className="text-gray-500 ">
                          {" "}
                          Spin:{" "}
                          <span className="text-[#B7132B] text-[15px] font-semibold">
                            60%{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    Umpires
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="py-2 flex justify-between items-center">
                    <div className="">
                      <p className="mx-2 font-medium">On-field Umpire :</p>
                    </div>
                    <div className="">
                      <p className="mx-2 text-[#586577] font-medium ">
                        Claire Polosak, Lauren Agenbag
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="py-2 flex justify-between items-center">
                    <div className="">
                      <p className="mx-2 font-medium">Third Umpire :</p>
                    </div>
                    <div className="">
                      <p className="mx-2 text-[#586577] font-medium ">Sue Redfern</p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="py-2 pb-0 flex justify-between items-center">
                    <div className="">
                      <p className="mx-2 font-medium">Referee :</p>
                    </div>
                    <div className="">
                      <p className="mx-2 text-[#586577] font-medium ">GS Lakshmi</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* right section */}
              <div className="lg:col-span-4 md:col-span-5">
                <div className="rounded-lg bg-[#ffffff]">
                  <div className="p-4 cust-box-click-container">
                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] mb-3 border-l-[3px] border-[#229ED3]">
                      Playing XI
                    </h3>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="flex items-center justify-around py-4">
                      <button
                        className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                        onclick="showCustomBox(this, 'cust-box-click-india')"
                      >
                        <span>India</span>
                      </button>
                      <button
                        className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                        onclick="showCustomBox(this, 'cust-box-click-bangladesh')"
                      >
                        <span>Bangladesh</span>
                      </button>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="cust-box-click-content cust-box-click-india mt-4">
                      <div>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> R sharma (c) </h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="S Gill" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> S Gill</h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="L Rahul" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> L Rahul </h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R Jadeja" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> R Jadeja </h2>
                              <p className="text-[#909090] font-normal">
                                All Rounder{" "}
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="J Bumrah" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> J Bumrah </h2>
                              <p className="text-[#909090] font-normal">Bowler</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="A Deep" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> A Deep </h2>
                              <p className="text-[#909090] font-normal">Bowler </p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="Y Jaiswal" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> Y Jaiswal </h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="V Kholi" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> V Kholi </h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="M Siraj" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> M Siraj </h2>
                              <p className="text-[#909090] font-normal">Bowler</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R Pant (WK)" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> R Pant (WK) </h2>
                              <p className="text-[#909090] font-normal">Batter</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 pb-0">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R Ashwin" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> R Ashwin </h2>
                              <p className="text-[#909090] font-normal">
                                All Rounder{" "}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="cust-box-click-content cust-box-click-bangladesh mt-4 hidden">
                      <p>View Content</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 hidden md:block">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                      <h3 className="text-1xl font-semibold mb-2 mb-3">
                        Pace vs Spin on Venue{" "}
                        <span className="text-[#909090]">
                          {" "}
                          &nbsp;(Last 10 matches){" "}
                        </span>
                      </h3>
                    </div>
                    <div className="w-full">
                      <div className="bg-[#B7132B] h-[4px] mr-2 mb-2">
                        <div
                          className="bg-[#13b76dbd] h-[4px]"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className=" text-gray-500">
                          {" "}
                          Pace:{" "}
                          <span className="text-[#13b76dbd] text-[15px] font-semibold">
                            40%{" "}
                          </span>
                        </p>
                        <p className="text-gray-500 ">
                          {" "}
                          Spin:{" "}
                          <span className="text-[#B7132B] text-[15px] font-semibold">
                            60%{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*------------------------  More Info Seaction end  ---------------------------*/}
          {/*------------------------  LIVE Seaction Start ---------------------------*/}
          <div id="live" className="tab-content ">
            <div className="md:grid grid-cols-12 gap-4">
              <div className="lg:col-span-8 md:col-span-7 lg:grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <div className="rounded-lg bg-white">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <Link href="/profile">
                          <div className="flex items-center gap-3">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                            </div>
                            <div className="font-medium">
                              <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                                R Sharma{" "}
                              </h2>
                              <p className="md:text-[15px] text-[14px] flex items-center">
                                54{" "}
                                <span className="md:text-[13px] text-[12px] text-[#909090] pt-[4px] px-1">
                                  (21)
                                </span>
                                <img
                                  src="/assets/img/home/bat.png"
                                  className="h-[14px]"
                                  alt=""
                                />
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="font-medium text-center">
                          <p className="md:text-[18px] text-[15px] text-[#13b76dbd]">
                            60{" "}
                            <span className="md:text-[15px] text-[13px] text-black">
                              (32)
                            </span>
                          </p>
                          <p>Partnership</p>
                        </div>
                        <Link href="/profile">
                          <div className="flex items-center justify-end flex-row-reverse gap-3">
                            <div>
                              <img src="/assets/img/player/2.png" alt="R sharma (c)" />
                            </div>
                            <div className="font-medium text-end">
                              <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                                S Gill
                              </h2>
                              <p className="md:text-[15px] text-[14px] flex items-center">
                                23{" "}
                                <span className="md:text-[13px] text-[12px] text-[#909090] pt-[4px] pl-1">
                                  (10)
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 my-4 lg:my-0">
                  <div className="rounded-lg bg-white p-4">
                    <Link href="/profile">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src="/assets/img/player/13.png"
                            className="h-[40px]"
                            alt="T Ahmed"
                          />
                          <img
                            src="/assets/img/player/ball.png"
                            className="absolute -bottom-1.5 -right-0.5 h-[13px] bg-white rounded-full p-[2px]"
                            alt=""
                          />
                          <p />
                        </div>
                        <div className="font-medium">
                          <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                            T Ahmed
                          </h2>
                          <p className="md:text-[15px] text-[14px] flex items-center">
                            0-44{" "}
                            <span className="md:text-[13px] text-[12px] text-[#909090] pt-[4px] px-1">
                              (2.5)
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 mb-4 md:mb-0">
                  <div className="rounded-lg bg-white p-4 flex lg:flex-row flex-col items-center md:gap-8 gap-4">
                    {/* Last Over Section */}
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#909090]">Last Over:</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          2
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          0
                        </span>
                        <span className="px-2 py-1 border rounded bg-[#13b76dbd] text-white">
                          6
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          0
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                      </div>
                      <span className="font-medium text-1xl text-[#6A7586]">
                        = 10
                      </span>
                    </div>
                    {/* This Over Section */}
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#909090]">This Over:</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                        <span className="px-2 py-1 border rounded bg-orange-500 text-white">
                          4
                        </span>
                        <span className="px-2 py-1 border rounded bg-orange-500 text-white">
                          4
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                        <span className="px-2 py-1 border rounded text-gray-700">
                          1
                        </span>
                      </div>
                      <span className="font-medium text-1xl text-[#6A7586]">
                        = 12
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-5">
                <div className="rounded-lg bg-[#ffffff]">
                  <div className="p-4 cust-box-click-container">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                        <h3 className="text-1xl font-semibold">Probability</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                          // onclick="showCustomBox(this, 'cust-box-click-firview')"
                          onClick={(e) => handleProbabilityTab(e, 'cust-box-click-firview')}
                          className={` cust-box-click-button font-medium px-5 py-1 rounded-full ${activeTab1 === 'cust-box-click-firview' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                        >
                          <span>% View</span>
                        </button>
                        <button
                          // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                          // onclick="showCustomBox(this, 'cust-box-click-oddsview')"
                          onClick={(e) => handleProbabilityTab(e, 'cust-box-click-oddsview')}
                          className={` cust-box-click-button font-medium px-5 py-1 rounded-full ${activeTab1 === 'cust-box-click-oddsview' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                        >
                          <span>Odds View</span>
                        </button>
                      </div>
                    </div>
                    <div className={`cust-box-click-content cust-box-click-firview mt-4 ${activeTab1 === 'cust-box-click-firview' ? "" : "hidden"}`}>
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="font-semibol">Day 4 : Session 3</p>
                          <p className="text-[#909090]">
                            Overs left today:{" "}
                            <span className="font-semibol text-black">40.0</span>
                          </p>
                        </div>
                        <div className="relative mt-4 h-[4px] bg-gray-200 overflow-hidden">
                          <div
                            className="absolute h-full bg-[#13b76dbd]"
                            style={{ width: "40%" }}
                          />
                          <div
                            className="absolute h-full bg-[#EB9D29]"
                            style={{ width: "20%", left: "40%" }}
                          ></div>
                          <div
                            className="absolute h-full bg-[#B7132B]"
                            style={{ width: "40%", left: "60%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                          <p className="text-green-600 font-medium">Ind: 40%</p>
                          <p className="text-yellow-600 font-medium">Drew: 20%</p>
                          <p className="text-red-600 font-medium">Ban: 40%</p>
                        </div>
                      </div>
                    </div>
                    <div className={`cust-box-click-content cust-box-click-oddsview mt-4 ${activeTab1 === 'cust-box-click-oddsview' ? "" : "hidden"}`}>
                      <p>Odds View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cust-box-click-container">
              <div className="my-2">
                <div className="flex gap-[10px] justify-between overflow-auto items-center py-2">
                  <p className="font-medium text-[14px]">Commentary</p>
                  <button
                    // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                    // onclick="showCustomBox(this, 'cust-box-click-all')"
                    onClick={(e) => handleTabClick(e, 'cust-box-click-all')}
                    className={` cust-box-click-button font-medium px-5 py-1 rounded-full ${activeTab === 'cust-box-click-all' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                  >
                    <span>All</span>
                  </button>
                  <button
                    onClick={(e) => handleTabClick(e, 'cust-box-click-view')}
                    className={` cust-box-click-button font-medium px-5 py-1 rounded-full ${activeTab === 'cust-box-click-view' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                  // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                  // onclick="showCustomBox(this, 'cust-box-click-view')"
                  >
                    <span>View</span>
                  </button>
                  <button
                    // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                    // onclick="showCustomBox(this, 'cust-box-click-result')"
                    onClick={(e) => handleTabClick(e, 'cust-box-click-result')}
                    className={` cust-box-click-button font-medium px-5 py-1 rounded-full ${activeTab === 'cust-box-click-result' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                  >
                    <span>Overs</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Wicket</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>6s</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>4s</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Inn1</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Inn2</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Inn3</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Inn4</span>
                  </button>
                  <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                    <span>Milestone</span>
                  </button>
                </div>
              </div>
              <div className={`cust-box-click-content cust-box-click-all mt-4 ${activeTab === 'cust-box-click-all' ? '' : 'hidden'}`}>
                <div>
                  <div className="rounded-lg bg-white p-4 mb-4">
                    <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                      <div className="text-[14px] font-normal">
                        IND 1st Innings : 235/4
                      </div>
                      <div className="text-[14px] font-normal">
                        10{" "}
                        <span className="text-[#909090] font-medium text-[13px]">
                          End Of Over
                        </span>
                      </div>
                      <div className="text-[14px] font-normal text-black">
                        6 4 4 1 4 4
                      </div>
                      <div className="text-[14px] font-normal">
                        R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                        Gill: 98 <span className="text-[#909090]">(106) </span>
                      </div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed{" "}
                        <span className="text-[#909090]">2.5-0-45-0</span>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.6</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                          6{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed To Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Six
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                          Pandya Hangs In The Crease And Showcases Power-Hitting
                          Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                          Wicket For A Colossal Maximum!
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.5</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the off stump, Hardik
                          Pandya hangs in the crease, plays cut in the air to deep
                          point. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.3</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                          1{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Nitish Kumar Reddy,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            1 Run
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                          Reddy hangs in the crease and plays the shot, but the ball
                          goes straight to the fielder at deep mid wicket for 1 run.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.2</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 px-3 pb-0 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.1</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                      <div className="text-[14px] font-normal">
                        IND 1st Innings : 235/4
                      </div>
                      <div className="text-[14px] font-normal">
                        10{" "}
                        <span className="text-[#909090] font-medium text-[13px]">
                          End Of Over
                        </span>
                      </div>
                      <div className="text-[14px] font-normal text-black">
                        6 4 4 1 4 4
                      </div>
                      <div className="text-[14px] font-normal">
                        R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                        Gill: 98 <span className="text-[#909090]">(106) </span>
                      </div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed{" "}
                        <span className="text-[#909090]">2.5-0-45-0</span>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.6</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                          6{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed To Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Six
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                          Pandya Hangs In The Crease And Showcases Power-Hitting
                          Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                          Wicket For A Colossal Maximum!
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.5</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the off stump, Hardik
                          Pandya hangs in the crease, plays cut in the air to deep
                          point. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.3</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                          1{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Nitish Kumar Reddy,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            1 Run
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                          Reddy hangs in the crease and plays the shot, but the ball
                          goes straight to the fielder at deep mid wicket for 1 run.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.2</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 px-3 pb-0 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.1</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 my-4">
                    <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                      <div className="text-[14px] font-normal">
                        IND 1st Inning&nbsp;:&nbsp;215/4
                      </div>
                      <div className="text-[14px] font-normal">
                        9{" "}
                        <span className="text-[#909090] font-medium text-[13px]">
                          End Of Over
                        </span>
                      </div>
                      <div className="text-[14px] font-normal text-black">
                        6 4 4 1 4 4
                      </div>
                      <div className="text-[14px] font-normal">
                        R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                        Gill: 98 <span className="text-[#909090]">(106) </span>
                      </div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed{" "}
                        <span className="text-[#909090]">2.5-0-45-0</span>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">8.6</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                          6{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed To Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Six
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                          Pandya Hangs In The Crease And Showcases Power-Hitting
                          Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                          Wicket For A Colossal Maximum!
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.5</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the off stump, Hardik
                          Pandya hangs in the crease, plays cut in the air to deep
                          point. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.3</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                          1{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed to Nitish Kumar Reddy,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            1 Run
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                          Reddy hangs in the crease and plays the shot, but the ball
                          goes straight to the fielder at deep mid wicket for 1 run.
                        </p>
                      </div>
                    </div>
                    <div className="my-4">
                      <div
                        className="text-white p-4 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, #3C1492 0%, #6D1E93 100%)"
                        }}
                      >
                        <h2 className="text-[14px] font-normal mb-4">
                          New Batter On Crease
                        </h2>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* Player Image */}
                            <img
                              src="/assets/img/player/14.png"
                              alt="Player"
                              className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                            />
                            {/* Player Info */}
                            <div>
                              <h2 className="md:text-xl text-[16px] font-semibold">
                                V Kohli
                              </h2>
                              <p className="text-[14px] font-normal">
                                30 Year (Batter)
                              </p>
                            </div>
                          </div>
                          {/* Best Score */}
                          <div className="flex gap-3 items-center">
                            <p className="text-1xl font-normal">Best</p>
                            <h1 className="md:text-2xl text-[16px] font-semibold">
                              96
                            </h1>
                          </div>
                        </div>
                        {/* Player Stats */}
                        <div className="mt-4 md:flex grid grid-cols-12 justify-between md:gap-4 text-center border-t border-[#9d9d9d] pt-3">
                          <div className="col-span-6 flex gap-2 items-center">
                            <p className="md:text-[14px] text-[13px] font-normal">
                              MATCHES
                            </p>
                            <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                              79
                            </h2>
                          </div>
                          <div className="col-span-6 flex gap-2 items-center justify-end">
                            <p className="md:text-[14px] text-[13px] font-normal">
                              RUNS
                            </p>
                            <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                              1523
                            </h2>
                          </div>
                          <div className="col-span-6 flex gap-2 items-center">
                            <p className="md:text-[14px] text-[13px] font-normal">
                              SR
                            </p>
                            <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                              141.00
                            </h2>
                          </div>
                          <div className="col-span-6 flex gap-2 items-center justify-end">
                            <p className="md:text-[14px] text-[13px] font-normal ">
                              AVG
                            </p>
                            <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                              26.00
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-1xl font-medium mb-4">
                      Virat Kholi&nbsp;Comes Out To Bat At 5.
                    </div>
                    <div className="my-4">
                      <div
                        className="text-white p-4 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, #D20A5E 0%, #9C0C0C 100%)"
                        }}
                      >
                        <div className="md:flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/assets/img/player/15.png"
                              alt="Player"
                              className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                            />
                            <div>
                              <h2 className="md:text-xl text-[16px] font-semibold flex gap-3">
                                <span>KL rahul</span>{" "}
                                <span className="text-[#BFEF50] text-[14px]">
                                  29(12)
                                </span>
                              </h2>
                              <p className="text-[14px] font-normal">
                                c R Hossain b Miraz{" "}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4 justify-end">
                            <div>
                              <p className="md:text-1xl text-[14px] font-normal">
                                4s/6s
                              </p>
                              <p className="md:text-2xl text-[16px] font-semibold">
                                6/0
                              </p>
                            </div>
                            <div className="text-end">
                              <p className="md:text-1xl text-[14px] font-normal">
                                SR
                              </p>
                              <p className="md:text-2xl text-[16px] font-semibold">
                                153.63
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-[14px] font-normal">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal">Four</span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                      <div className="text-[14px] font-normal">
                        IND 1st Innings : 235/4
                      </div>
                      <div className="text-[14px] font-normal">
                        10{" "}
                        <span className="text-[#909090] font-medium text-[13px]">
                          End Of Over
                        </span>
                      </div>
                      <div className="text-[14px] font-normal text-black">
                        6 4 4 1 4 4
                      </div>
                      <div className="text-[14px] font-normal">
                        R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                        Gill: 98 <span className="text-[#909090]">(106) </span>
                      </div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed{" "}
                        <span className="text-[#909090]">2.5-0-45-0</span>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.6</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                          6{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed To Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Six
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                          Pandya Hangs In The Crease And Showcases Power-Hitting
                          Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                          Wicket For A Colossal Maximum!
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.5</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the off stump, Hardik
                          Pandya hangs in the crease, plays cut in the air to deep
                          point. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.4</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.3</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                          1{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Nitish Kumar Reddy,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            1 Run
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                          Reddy hangs in the crease and plays the shot, but the ball
                          goes straight to the fielder at deep mid wicket for 1 run.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">9.2</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                      <div className="flex items-center gap-[10px] md:py-4 pb-4">
                        <p className="text-[16px] font-semibold">7.1</p>
                        <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                          4{" "}
                        </p>
                      </div>
                      <div>
                        <div className="text-gray-500 font-normal text-[14px] mb-2">
                          Taskin Ahmed to Hardik Pandya,{" "}
                          <span className="text-[14px] font-normal text-black">
                            {" "}
                            Four
                          </span>
                        </div>
                        <p className="text-[14px] font-normal">
                          Four !! fast ball, good length, on the stumps, Hardik Pandya
                          hangs in the crease, plays uppercut in the air to deep fine
                          leg. Ball finds the ropes for four.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <div
                      className="text-white p-4 rounded-lg"
                      style={{
                        background: "linear-gradient(90deg, #2D71D6 0%, #114DA6 100%)"
                      }}
                    >
                      <h2 className="text-[14px] font-normal mb-4">
                        New bowler spell
                      </h2>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {/* Player Image */}
                          <img
                            src="/assets/img/player/14.png"
                            alt="Player"
                            className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                          />
                          {/* Player Info */}
                          <div>
                            <h2 className="md:text-xl text-[16px] font-semibold">
                              M Rahman
                            </h2>
                            <p className="text-[14px] font-normal">
                              35 year (bowler)
                            </p>
                          </div>
                        </div>
                        {/* Best Score */}
                        <div className="flex gap-3 items-center">
                          <p className="text-1xl font-normal">Best</p>
                          <h1 className="md:text-2xl text-[16px] font-semibold">
                            4/12
                          </h1>
                        </div>
                      </div>
                      {/* Player Stats */}
                      <div className="mt-4 md:flex grid grid-cols-12 justify-between md:gap-4 text-center border-t border-[#9d9d9d] pt-3">
                        <div className="col-span-6 flex gap-2 items-center">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            MATCHES
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            79
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center justify-end">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            Wickets
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            123
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            Econ
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            5.00
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center justify-end">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            AVG
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            26.00
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`cust-box-click-content cust-box-click-all mt-4 ${activeTab === 'cust-box-click-view' ? '' : 'hidden'}`}>
                <p>View Content</p>
              </div>
              <div className={`cust-box-click-content cust-box-click-all mt-4 ${activeTab === 'cust-box-click-result' ? '' : 'hidden'}`}>
                <p>Result Content</p>
              </div>
            </div>
          </div>
          {/*------------------------  LIVE Seaction End ---------------------------*/}
          {/*------------------------  Scorecard Seaction Start ---------------------------*/}
          <div id="scorecard" className="tab-content hidden cust-box-click-container">
            <div className="flex items-center gap-3 md:mb-4 mb-2 md:pb-0 pb-2 font-medium text-[14px] whitespace-nowrap overflow-auto">
              <button
                className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                onclick="showCustomBox(this, 'cust-box-click-ind1stinning')"
              >
                <span>IND 1st Inning</span>
              </button>
              <button
                className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                onclick="showCustomBox(this, 'cust-box-click-ban1stinning')"
              >
                <span>BAN 1st Inning</span>
              </button>
              <button
                className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                onclick="showCustomBox(this, 'cust-box-click-ind2stinning')"
              >
                <span>IND 2nd Inning</span>
              </button>
              <button
                className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                onclick="showCustomBox(this, 'cust-box-click-ban2stinning')"
              >
                <span>BAN 2nd Inning</span>
              </button>
            </div>
            <div className="cust-box-click-content cust-box-click-ind1stinning mt-4">
              <div className="md:grid grid-cols-12 gap-4">
                <div className="lg:col-span-8 md:col-span-7">
                  <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                    <div className="flex justify-between items-center text-[16px]">
                      <div className="">
                        <p className="mx-2 font-semibold">Total Score</p>
                      </div>
                      <div className="">
                        <p className="mx-2 font-semibold ">
                          {" "}
                          172-2 <span className="text-[#586577]">(33.0)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                    <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Batting
                    </h3>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-600 whitespace-nowrap">
                          <thead className="bg-gray-100">
                            <tr>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                Batter
                              </th>
                              <th
                                scope="col"
                                className="md:px-4 py-2 font-medium text-gray-700 hidden md:block"
                              ></th>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                R
                              </th>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                B
                              </th>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                4s
                              </th>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                6s
                              </th>
                              <th
                                scope="col"
                                className="md:px-4 px-2 py-2 font-medium text-gray-700"
                              >
                                SR
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Row 1 */}
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="">
                                  {" "}
                                  R Sharma
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Das B Rana
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Das B Rana
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                56
                              </td>
                              <td className="md:px-4 py-2">115</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                9
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">74.65</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Shubman Gill
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Islam B Rana
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Islam B Rana
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                6
                              </td>
                              <td className="md:px-4 py-2">15</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                1
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">10.5</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Yashasvi Jaiswal
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Islam B Rana
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Islam B Rana
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                0
                              </td>
                              <td className="md:px-4 py-2">10</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">45.78</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Virat Kohli
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    Lbw B Miraz
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                Lbw B Miraz
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                6
                              </td>
                              <td className="md:px-4 py-2">6</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                1
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">74.65</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Rishabh Pant(WK)
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C&amp;B Miraz
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C&amp;B Miraz
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                36
                              </td>
                              <td className="md:px-4 py-2">52</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                2
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">23.47</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Lokesh Rahul
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    B Bumrah
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                B Bumrah
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                24
                              </td>
                              <td className="md:px-4 py-2">16</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                2
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                1
                              </td>
                              <td className="md:px-4 py-2">45.78</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Ravindra Jadeja
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Rohit Sharma
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Islam b Rana
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                86
                              </td>
                              <td className="md:px-4 py-2">124</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                6
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                5
                              </td>
                              <td className="md:px-4 py-2">45.3</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Ravichandran Ashwin
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Mohammed Siraj
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Das B Ahmed
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                113
                              </td>
                              <td className="md:px-4 py-2">133</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                12
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                6
                              </td>
                              <td className="md:px-4 py-2">74.65</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Akash Deep
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Shanto B Ahmed
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Shanto B Ahmed
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                17
                              </td>
                              <td className="md:px-4 py-2">30</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                9
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">53.52</td>
                            </tr>
                            <tr className="border-b">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Jasprit Bumrah
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Hasan B Mahmud
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Hasan B Mahmud
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                0
                              </td>
                              <td className="md:px-4 py-2">1</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                2
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                0
                              </td>
                              <td className="md:px-4 py-2">0</td>
                            </tr>
                            <tr className="">
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                <a href="#">
                                  Mohammed Siraj
                                  <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                    C Mohammed Siraj
                                  </p>
                                </a>
                              </td>
                              <td className="md:px-4 py-2 hidden md:block text-[13px]">
                                C Islam B Rana
                              </td>
                              <td className="md:px-4 py-2 font-medium text-gray-800">
                                21
                              </td>
                              <td className="md:px-4 py-2">12</td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                1
                              </td>
                              <td className="md:px-4 py-2 text-center md:text-start">
                                2
                              </td>
                              <td className="md:px-4 py-2">74.65</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-2 py-2 px-4 bg-[#ecf2fd]">
                        <p className="flex justify-between text-[14px]">
                          <span className="font-medium text-gray-800">Extras: </span>
                          <span className="text-sm text-gray-500">
                            {" "}
                            <span className="font-medium text-gray-800"> 0</span>(B 0,
                            Lb 0, W 0, Nb 0, P 0)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                    <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Bowling
                    </h3>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                          <thead className="bg-blue-50 text-gray-700 ">
                            <tr>
                              <th className="px-4 py-3 font-medium">Bowling</th>
                              <th className="md:px-4 pl-[14px] py-3 font-medium">
                                O
                              </th>
                              <th className="md:px-4 pl-[14px] py-3 font-medium">
                                M
                              </th>
                              <th className="md:px-4 pl-[14px] py-3 font-medium">
                                R
                              </th>
                              <th className="md:px-4 pl-[14px] py-3 font-medium">
                                W
                              </th>
                              <th className="md:px-4 pl-[14px] py-3 font-medium">
                                ER
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="px-4 py-3 font-medium text-gray-800">
                                Taskin Ahmed
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">7.0</td>
                              <td className="md:px-4 pl-[14px] py-3">1</td>
                              <td className="md:px-4 pl-[14px] py-3">22</td>
                              <td className="md:px-4 pl-[14px] py-3">1</td>
                              <td className="md:px-4 pl-[14px] py-3">74.65</td>
                            </tr>
                            <tr>
                              <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                                Hasan Mahmud
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">11.0</td>
                              <td className="md:px-4 pl-[14px] py-3">1</td>
                              <td className="md:px-4 pl-[14px] py-3">43</td>
                              <td className="md:px-4 pl-[14px] py-3">0</td>
                              <td className="md:px-4 pl-[14px] py-3">10.5</td>
                            </tr>
                            <tr>
                              <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                                Nahid Rana
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">6.0</td>
                              <td className="md:px-4 pl-[14px] py-3">0</td>
                              <td className="md:px-4 pl-[14px] py-3">21</td>
                              <td className="md:px-4 pl-[14px] py-3">2</td>
                              <td className="md:px-4 pl-[14px] py-3">45.78</td>
                            </tr>
                            <tr>
                              <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                                Shakib Al Hasan
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">13.0</td>
                              <td className="md:px-4 pl-[14px] py-3">0</td>
                              <td className="md:px-4 pl-[14px] py-3">79</td>
                              <td className="md:px-4 pl-[14px] py-3">0</td>
                              <td className="md:px-4 pl-[14px] py-3">74.65</td>
                            </tr>
                            <tr>
                              <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                                Mehidy Hasan Miraz
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">25.0</td>
                              <td className="md:px-4 pl-[14px] py-3">3</td>
                              <td className="md:px-4 pl-[14px] py-3">103</td>
                              <td className="md:px-4 pl-[14px] py-3">2</td>
                              <td className="md:px-4 pl-[14px] py-3">23.47</td>
                            </tr>
                            <tr>
                              <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                                Mominul Haque
                              </td>
                              <td className="md:px-4 pl-[14px] py-3">2.0</td>
                              <td className="md:px-4 pl-[14px] py-3">0</td>
                              <td className="md:px-4 pl-[14px] py-3">15</td>
                              <td className="md:px-4 pl-[14px] py-3">1</td>
                              <td className="md:px-4 pl-[14px] py-3">45.87</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                    <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Fall of Wickets
                    </h3>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                          <thead className="bg-blue-50 text-gray-700">
                            <tr>
                              <th className="px-4 py-3 font-medium">Batter</th>
                              <th className="px-4 py-3 font-medium">Score</th>
                              <th className="px-4 py-3 font-medium">Overs</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="px-4 py-3 font-medium text-gray-800">
                                R Sharma
                              </td>
                              <td className="px-4 py-3">15-1</td>
                              <td className="px-4 py-3">2.3</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-3 font-medium text-gray-800">
                                Shubman Gill
                              </td>
                              <td className="px-4 py-3">28-2</td>
                              <td className="px-4 py-3">6.4</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-3 font-medium text-gray-800">
                                Yashasvi Jaiswal
                              </td>
                              <td className="px-4 py-3">67-3</td>
                              <td className="px-4 py-3">19.2</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-gray-800">
                                Virat Kohli
                              </td>
                              <td className="px-4 py-3">234-4</td>
                              <td className="px-4 py-3">55.3</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                    <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Partnership
                    </h3>
                    <div className="flex justify-between items-center bg-blue-50 text-gray-700 text-sm px-4 py-3 font-medium">
                      <div>Batter 1</div>
                      <div>Batter 2</div>
                    </div>
                    <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                      <div className="w-full ">
                        <p className="text-[13px] text-[#909090]">1st Wicket</p>
                        <div className="flex md:flex-row flex-col md:gap-2">
                          S Yadav
                          <p>
                            <span>10</span>
                            <span className="text-[13px] text-[#909090]">(8)</span>
                          </p>
                        </div>
                      </div>
                      <div className=" w-full">
                        <p className="mb-1 text-center">
                          20 <span className="text-[#909090]">(15)</span>
                        </p>
                        <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                          <div
                            className="bg-[#13b76dbd] h-[4px]"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                      <div className=" w-full flex md:flex-row flex-col md:gap-2 items-end md:items-center  justify-end">
                        <p>Y Jaiswal</p>
                        <p>
                          10 <span className="text-[#909090]">(7)</span>
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                      <div className="w-full ">
                        <p className="text-[13px] text-[#909090]">2nd Wicket</p>
                        <div className="flex md:flex-row flex-col md:gap-2">
                          S Yadav
                          <p>
                            {" "}
                            <span>10</span>{" "}
                            <span className="text-[13px] text-[#909090]">(8)</span>
                          </p>
                        </div>
                      </div>
                      <div className=" w-full">
                        <p className="mb-1 text-center">
                          20 <span className="text-[#909090]">(15)</span>
                        </p>
                        <div className="bg-[#B7132B]  w-[75px] mx-auto h-[4px]">
                          <div
                            className="bg-[#13b76dbd] h-[4px]"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                      <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                        <p>S Gill</p>
                        <p>
                          0 <span className="text-[#909090]">(8)</span>
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                      <div className="w-full">
                        <p className="text-[13px] text-[#909090]">3rd Wicket</p>
                        <div className="flex md:flex-row flex-col md:gap-2">
                          R Jadeja
                          <p>
                            {" "}
                            <span>53</span>{" "}
                            <span className="text-[13px] text-[#909090]">(8)</span>
                          </p>
                        </div>
                      </div>
                      <div className=" w-full">
                        <p className="mb-1 text-center">
                          20 <span className="text-[#909090]">(15)</span>
                        </p>
                        <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                          <div
                            className="bg-[#13b76dbd] h-[4px]"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                      <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                        <p>L Rahul</p>
                        <p>
                          16 <span className="text-[#909090]">(50)</span>
                        </p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                      <div className="w-full">
                        <p className="text-[13px] text-[#909090]">3th Wicket</p>
                        <div className="flex md:flex-row flex-col md:gap-2">
                          R Jadeja
                          <p>
                            {" "}
                            <span>23</span>{" "}
                            <span className="text-[13px] text-[#909090]">(8)</span>
                          </p>
                        </div>
                      </div>
                      <div className=" w-full">
                        <p className="mb-1 text-center">
                          20 <span className="text-[#909090]">(15)</span>
                        </p>
                        <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                          <div
                            className="bg-[#13b76dbd] h-[4px]"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                      <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                        <p>R Ashwin</p>
                        <p>
                          106 <span className="text-[#909090]">(118)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-5">
                  <div className="rounded-lg bg-[#ffffff]">
                    <div className="p-4">
                      <h3 className="text-1xl font-semibold mb-2 pl-[7px] mb-3 border-l-[3px] border-[#229ED3]">
                        Yet to bat
                      </h3>
                      <div className="border-t-[1px] border-[#E4E9F0]" />
                      <div className="">
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]">A Deep </h2>
                              <p className="text-[#909090] font-normal">Avg 7.34</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                            <div>
                              <img src="/assets/img/player/1.png" alt="S Gill" />
                            </div>
                            <div className="font-medium">
                              <h2 className="text-[15px]"> V Kholi</h2>
                              <p className="text-[#909090] font-normal">Avg 8.34</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="#">
                        <div className="flex items-center space-x-3 py-3">
                          <div>
                            <img src="/assets/img/player/1.png" alt="L Rahul" />
                          </div>
                          <div className="font-medium">
                            <h2 className="text-[15px]"> R Pant </h2>
                            <p className="text-[#909090] font-normal">Avg 5.34</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cust-box-click-content cust-box-click-ban1stinning mt-4 hidden">
              <p>View Content</p>
            </div>
            <div className="cust-box-click-content cust-box-click-ind2stinning mt-4 hidden">
              <p>Result Content</p>
            </div>
            <div className="cust-box-click-content cust-box-click-ban2stinning mt-4 hidden">
              <p>Result Content</p>
            </div>
          </div>
          {/*------------------------  Scorecard Seaction End ---------------------------*/}
          <div id="overs" className="tab-content hidden">
            This is Squad content.
          </div>
          <div id="points" className="tab-content hidden">
            <div className="md:grid grid-cols-12 gap-4">
              <div className="lg:col-span-8 md:col-span-7">
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-1">
                    South Africa Women vs New Zealand Women, Final
                  </h3>
                  <p className="text-gray-500 font-normal">
                    The biggest tournament in the cricketing circuit, the ICC T20
                    WORLD Cup is underway in the USAs and the West Indies. The
                    tournament received excellent response from the fans worldwide...
                  </p>
                  <a href="#">
                    <p className="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">
                      Read more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
                <div className="rounded-lg bg-[#ffffff] mb-2 p-4">
                  <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                    IPl 2024 Pointe Table
                  </h3>
                  <div>
                    <div
                      className="overflow-x-auto  [&::-webkit-scrollbar] [&::-webkit-scrollbar]:h-[8px] 
                              [&::-webkit-scrollbar-track]:bg-gray-100 
                              [&::-webkit-scrollbar-thumb]:bg-[#DFE9F6] 
                              dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
                              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                      <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                        <thead className="bg-blue-50 text-gray-700 ">
                          <tr>
                            <th className="md:px-2 pl-[14px] py-3 font-medium w-[10px]">
                              No
                            </th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                              Team
                            </th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">M</th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">W</th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">L</th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">T</th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                              N/R
                            </th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                              PTS
                            </th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                              Net RR
                            </th>
                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                              Form
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-[#fffae5]">
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">1</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <Link href="/kkrSeries">
                                <div className="flex items-center gap-[5px] w-[120px]">
                                  <div>
                                    <img
                                      src="/assets/img/ipl/1.png"
                                      className="h-[20px]"
                                      alt=""
                                    />
                                  </div>
                                  <p>
                                    KKR<span className="text-[#00B564]"> (Q)</span>
                                  </p>
                                </div>
                              </Link>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">2</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/2.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>
                                  SH<span className="text-[#00B564]"> (Q)</span>
                                </p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">3</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/3.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>
                                  RR<span className="text-[#00B564]"> (Q)</span>
                                </p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">4</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/4.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>
                                  RCB<span className="text-[#00B564]"> (Q)</span>
                                </p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">5</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/5.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>CSK</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">6</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/6.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>DC</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">7</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/7.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>LSG</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">8</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/8.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>GT</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">9</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/9.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>PK</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">10</td>
                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                              <div className="flex items-center gap-[5px]">
                                <div>
                                  <img
                                    src="/assets/img/ipl/10.png"
                                    className="h-[20px]"
                                    alt=""
                                  />
                                </div>
                                <p>MI</p>
                              </div>
                            </td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">5</td>
                            <td className="md:px-2 pl-[14px] py-3">123</td>
                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                            <td className="md:px-2 pl-[14px] py-3">9</td>
                            <td className="md:px-2 pl-[14px] py-3">0</td>
                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                            <td className="md:px-2 pl-[14px] py-3">
                              <div className="ml-auto flex gap-1 items-center">
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  L
                                </span>
                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                  W
                                </span>
                                <span className="flex">
                                  <button className="arro-button">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">
                    {" "}
                    Last Updated On 17 Oct 2024, 22:49 IST
                  </p>
                  <p className="text-[14px] text-gray-500">
                    <span className="font-semibold text-[#1F2937]">M:</span>
                    Matches,<span className="font-semibold text-[#1F2937]">
                      {" "}
                      W:
                    </span>{" "}
                    Won, <span className="font-semibold text-[#1F2937]">L:</span>{" "}
                    Lost, <span className="font-semibold text-[#1F2937]">T:</span>{" "}
                    Tie, <span className="font-semibold text-[#1F2937]">N/R:</span> No
                    Result, <span className="font-semibold text-[#1F2937]">PTS:</span>{" "}
                    Points,{" "}
                    <span className="font-semibold text-[#1F2937]">Net RR:</span> Net
                    run rate, <span className="font-semibold text-[#1F2937]">Q:</span>{" "}
                    Qualified
                  </p>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-1">
                    India vs Zimbabwe 2024
                  </h3>
                  <p className="text-gray-500 font-normal">
                    The biggest tournament in the cricketing circuit, the ICC T20
                    WORLD Cup is underway in the USAs and the West Indies. The
                    tournament received excellent response from the fans worldwide...
                  </p>
                  <a href="#">
                    <p className="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">
                      Read more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <div className="">
                    <h2 className="text-1xl font-semibold mb-1">
                      FAQs on IPL Points Table
                    </h2>
                    <div className="border-t-[1px] border-[#E7F2F4]" />
                    <div className="space-y-2 my-2">
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq1')"
                        >
                          <span className="text-[14px] font-medium">
                            What is NRR?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq1" className="hidden mt-2 px-4 text-gray-600">
                          Apart from the exception set out in the following paragraph,
                          the position, brand and visual identity of each Commercial
                          Logo on the Playing Clothing must remain the same throughout
                          the season, unless approved this in advance by the BCCI, at
                          its sole discretion.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2"
                          onclick="toggleFaq('faq2')"
                        >
                          <span className="text-[14px] font-medium">
                            How To Calculate NRR?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq2" className="hidden mt-2 px-4 text-gray-600">
                          NRR is calculated by the difference between runs scored and
                          runs conceded divided by the number of overs.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq3')"
                        >
                          <span className="text-[14px] font-medium">
                            How Many Teams Will Qualify For IPL 2024 Playoffs?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq3"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq3" className="hidden mt-2 px-4 text-gray-600">
                          Four teams will qualify for the IPL playoffs based on their
                          positions in the points table.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq4')"
                        >
                          <span className="text-[14px] font-medium">
                            What happens when teams have the same points in the table?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq4" className="hidden mt-2 px-4 text-gray-600">
                          Four teams will qualify for the IPL playoffs based on their
                          positions in the points table.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq5')"
                        >
                          <span className="text-[14px] font-medium">
                            Which team is the topper in the points table in IPL 2024?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq5"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq5" className="hidden mt-2 px-4 text-gray-600">
                          Four teams will qualify for the IPL playoffs based on their
                          positions in the points table.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq6')"
                        >
                          <span className="text-[14px] font-medium">
                            What are the top 4 teams in the points table as of now?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq6"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq6" className="hidden mt-2 px-4 text-gray-600">
                          Four teams will qualify for the IPL playoffs based on their
                          positions in the points table.
                        </p>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                          onclick="toggleFaq('faq7')"
                        >
                          <span className="text-[14px] font-medium">
                            What are the bottom-ranked 2 teams in IPL points table
                            2024 as of now?
                          </span>
                          <span
                            className="transition-transform transform rotate-0"
                            id="icon-faq7"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <p id="faq7" className="hidden mt-2 px-4 text-gray-600">
                          Four teams will qualify for the IPL playoffs based on their
                          positions in the points table.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    News
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="lg:grid grid-cols-12 gap-4 mt-4">
                    {/* Main News Item */}
                    <div className="col-span-6 border-r-[1px] border-[#E7F2F4] pr-[16px]">
                      <img
                        src="/assets/img/team-1.png"
                        alt="Main news"
                        className="rounded-lg w-full h-48 object-cover mb-3"
                      />
                      <h3 className="text-1xl font-semibold mb-1">
                        Live - Jagadeesan hits a century; Haryana trounce
                      </h3>
                      <p className="text-gray-500 font-normal">
                        India will go into the home Test series against New Zealand
                        with pretty much the same squad that took on Bangladesh in
                        September - India's last red-ball action ahead of the
                        five-Test...
                      </p>
                      <div className="border-l-[1px] border-[#E7F2F4]" />
                    </div>
                    {/* Side News Items */}
                    <div className="col-span-6">
                      {/* Single News Item */}
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-2.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            Women's T20 World Cup, 2nd Semifinal | WI-W Vs NZ-W
                            Playing 11 Prediction
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            Akshita Patel{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-3.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            AUS-W Vs SA-W Highlights: Anneke Bosch Overpowers
                            Australia To Guide South Africa.
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            Akshita Patel{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-4.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            WI-W vs NZ-W Dream11 Prediction Today Match, Fantasy
                            Cricket Tips, Pitch Report
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            P Bhattachar{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-5">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex gap-1 items-center justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="col-span-4 relative">
                        <img src="/assets/img/home/trofi.png" className="h-[75px]" alt="" />
                      </div>
                      <div className="col-span-8 relative">
                        <h3 className="font-semibold text-[19px] mb-1">
                          Weekly challenge
                        </h3>
                        <p className="font-semibold text-[13px] text-[#1a80f8]">
                          <span className="text-[#586577]">Time Left:</span>2 Days 12h
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cust-slider-container w-full overflow-hidden">
                  <div
                    className="cust-slider w-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: "translateX(0%)" }}
                  >
                    {/* Slide 1 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="/assets/img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="/assets/img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="/assets/img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Navigation Buttons */}
                  <div className="cust-slider-nav flex justify-between items-center">
                    <button className="cust-prev-btn bg-[#ffffff] p-[7px] rounded-full border-2">
                      <span className="text-[20px] font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex justify-center space-x-2">
                      <span
                        className="dot w-[13px] h-[4px] rounded-full cursor-pointer bg-blue-500"
                        data-index={0}
                      />
                      <span
                        className="dot w-[13px] h-[4px] bg-gray-400 rounded-full cursor-pointer"
                        data-index={1}
                      />
                      <span
                        className="dot w-[13px] h-[4px] bg-gray-400 rounded-full cursor-pointer"
                        data-index={2}
                      />
                    </div>
                    <button className="cust-next-btn bg-[#ffffff] p-[7px] rounded-full border-2">
                      {/* Right Arrow Icon */}
                      <span className="text-[20px] font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className=" pb-2 my-4">
                  <div className="py-2">
                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                      POPULAR
                    </h3>
                  </div>
                  <div className="">
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2">
                        <div>
                          <img src="/assets/img/1.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          ICC World cup
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="/assets/img/2.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          ICC Champion Trophy
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="/assets/img/3.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          T20 World Cup
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="/assets/img/4.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          Indian Premium League
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="/assets/img/5.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          Pakistan Super League
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="img/6.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          Bangladesh Premium Leaguge
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                        <div>
                          <img src="/assets/img/7.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">
                          Big Bash Leaguge
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3">
                        <div>
                          <img src="/assets/img/8.png" alt="" />
                        </div>
                        <div className="font-medium text-[#394351]">Super Smash</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="stats" className="tab-content hidden">
            <div className="md:grid grid-cols-12 gap-4">
              <div className="lg:col-span-3 md:col-span-4">
                <div className="rounded-lg p-4 mb-4 bg-[#ffffff]">
                  <div className="py-2 mb-2">
                    <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                      Batting
                    </h3>
                  </div>
                  <div id="team-buttons" className="">
                    <button
                      className="state-btn new-class border-b border-t px-2 py-3 w-full font-medium active text-left text-[#394351] bg-[#ecf2fd] rounded-md text-[#1a80f8]"
                      data-target="most-runs"
                    >
                      Most Runs
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="highest-scores"
                    >
                      Highest Scores
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="batting-average"
                    >
                      Best Batting Average
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Best Batting Strike Rate
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most Hundreds
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most Fifties
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most Fours
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most Sixes
                    </button>
                    <button
                      className="state-btn new-class px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most Nineties
                    </button>
                  </div>
                </div>
                <div className="rounded-lg p-4 mb-4 bg-[#ffffff]">
                  <div className="py-2 mb-2">
                    <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                      Bowler
                    </h3>
                  </div>
                  <div id="team-buttons" className="">
                    <button
                      className="state-btn new-class border-b border-t px-2 py-3 w-full font-medium active text-left text-[#394351]"
                      data-target="most-2"
                    >
                      Most Wickets
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="highest-scores"
                    >
                      Best Bowling Average
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="batting-average"
                    >
                      Best Bowling
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Most 5 Wickets Haul
                    </button>
                    <button
                      className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Best Economy
                    </button>
                    <button
                      className="state-btn new-class px-2 py-3 w-full font-medium text-left text-[#394351]"
                      data-target="state-team"
                    >
                      Best Bowling Strike Rate
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9 md:col-span-8">
                <div id="most-runs" className="state-content">
                  <div>
                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                      <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                        Bowling
                      </h3>
                      <div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                            <thead className="bg-blue-50 text-gray-700 ">
                              <tr>
                                <th className="px-4 py-3 font-medium w-[10px]" />
                                <th className="px-4 py-3 font-medium">Batter</th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  Match
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  Inns
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  Runs
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  Avg
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  4s
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  6s
                                </th>
                                <th className="md:px-2 pl-[14px] py-3 font-medium">
                                  SR
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">1</td>
                                <td className="md:px-2 py-3 text-[#217AF7]">
                                  <a href="#">Virat Kohli</a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">2</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma</a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">3</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">4</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">5</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">6</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">7</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">8</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">9</td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  10
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  11
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  12
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  13
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  14
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  15
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  16
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  17
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                              <tr>
                                <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                  18
                                </td>
                                <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                  <a href="#">Rohit Sharma </a>
                                </td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">5</td>
                                <td className="md:px-2 pl-[14px] py-3">123</td>
                                <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                <td className="md:px-2 pl-[14px] py-3">9</td>
                                <td className="md:px-2 pl-[14px] py-3">0</td>
                                <td className="md:px-2 pl-[14px] py-3">74.65</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="highest-scores" className="state-content hidden">
                  sdfuysdfytsd
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default MatchLiveNow