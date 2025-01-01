import Layout from '@/Components/Layout'
import React, { useState } from 'react'

const Team = () => {

    const [activeTab, setActiveTab] = useState('test');
    const [batterTab, setBatterTab] = useState('cust-box-click-batters');
    const [batter1Tab, setBatter1Tab] = useState('cust-box-click-batters1');
    const [homeRecordTab, setHomeRecordTab] = useState('test');
         const [show, setShow] = useState(false);

            const handleTabClick = (tab) => {
              setActiveTab(tab);
            };

            const handleBatterTabClick = (tab) => {
                setBatterTab(tab);
              };

              const handleBatter1TabClick = (tab) => {
                setBatter1Tab(tab);
              };

              const handleHomeRecordTabClick = (tab) => {
                setHomeRecordTab(tab);
              };

    return (
        <Layout>
            <section className="lg:w-[1000px] mx-auto md:mb-0 my-4 px-2 lg:px-0">
                <div className="md:grid grid-cols-12 gap-4">
                    <div className="lg:col-span-8 md:col-span-7">
                        <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/assets/img/flag/b-8.png" className="h-[30px]" alt="" />
                                <h3 className="text-1xl font-semibold ">India Cricket Team</h3>
                            </div>
                            <div className="border-t-[1px] border-[#E4E9F0]" />
                            <p className="text-gray-500 font-normal pt-2">
                                The Indian Cricket Team is governed by the Board of Control for
                                Cricket in India (BCCI), the governing body of cricket in the country.
                                The first recorded match in India was in 1721 when a group of sailors
                                gathered to play in Western India. However, it was only on 25th June
                                1932 at the famous Lord's cricket ground in England that a national
                                team played an official Test match. Only the sixth team to...
                            </p>
                        </div>
                        <div id="tabs" className="mb-4">
                            <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                                <button
                                    // onclick="handleTabClick(event, 'test')"
                                    // className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                                    onClick={() => handleTabClick('test')}
                                    className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'test' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                                >
                                    Test
                                </button>
                                <button
                                    // onclick="handleTabClick(event, 'odi')"
                                    // className="font-medium py-2 px-3 whitespace-nowrap"
                                    onClick={() => handleTabClick('odi')}
                                    className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'odi' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                                >
                                    ODI
                                </button>
                                <button
                                    // onclick="handleTabClick(event, 't20')"
                                    // className="font-medium py-2 px-3 whitespace-nowrap"
                                    onClick={() => handleTabClick('t20')}
                                    className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 't20' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                                >
                                    T20
                                </button>
                                <button
                                    // onclick="handleTabClick(event, ' iccworldtwenty20')"
                                    // className="font-medium py-2 px-3 whitespace-nowrap"
                                    onClick={() => handleTabClick('iccworldtwenty20')}
                                    className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'iccworldtwenty20' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                                >
                                    Icc world twenty 20
                                </button>
                                <button
                                    // onclick="handleTabClick(event, 'iccworldcup')"
                                    // className="font-medium py-2 px-3 whitespace-nowrap"
                                    onClick={() => handleTabClick('iccworldcup')}
                                    className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'iccworldcup' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                                >
                                    Icc world cup
                                </button>
                            </div>
                        </div>
                        <div id="tab-content">
                            <div id="test" className={`tab-content ${activeTab === 'test' ? '' : 'hidden'}`}>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                    <div className="bg-white rounded-lg p-4">
                                        <a href="#">
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <img
                                                        src="/assets/img/player/t-1.png"
                                                        className="h-[40] rounded-full"
                                                        alt="R sharma (c)"
                                                    />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]">
                                                        {" "}
                                                        Gautam Gambhir{" "}
                                                        <span className="text-[#909090] font-normal">
                                                            (Coach)
                                                        </span>{" "}
                                                    </h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <a href="#">
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <img
                                                        src="/assets/img/player/t-2.png"
                                                        className="h-[40] rounded-full"
                                                        alt="R sharma (c)"
                                                    />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]">
                                                        {" "}
                                                        Rohit Sharma{" "}
                                                        <span className="text-[#909090] font-normal">
                                                            (India&nbsp;Captain)
                                                        </span>{" "}
                                                    </h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <div className="flex justify-between items-center pb-2">
                                        <div>
                                            <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                IND&nbsp;Squad 2024
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="border-t border-[#E4E9F0] mb-3" />
                                    <div className="cust-tp-pera-card-section">
                                        <div className="grid md:grid-cols-12 grid-cols-6 gap-4">
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-3.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Abhimanyu Easwaran
                                                </h3>
                                                <p className="text-xs text-gray-600">Batsman</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-4.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Abhishek Sharma
                                                </h3>
                                                <p className="text-xs text-gray-600">All-Rounder</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-5.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Akash Deep
                                                </h3>
                                                <p className="text-xs text-gray-600">Bowler</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-6.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Arshdeep Singh
                                                </h3>
                                                <p className="text-xs text-gray-600">Bowler</p>
                                            </div>
                                            {show && 
                                            <>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-3.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Abhimanyu Easwaran
                                                </h3>
                                                <p className="text-xs text-gray-600">Batsman</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-4.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Abhishek Sharma
                                                </h3>
                                                <p className="text-xs text-gray-600">All-Rounder</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-5.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Akash Deep
                                                </h3>
                                                <p className="text-xs text-gray-600">Bowler</p>
                                            </div>
                                            <div className="col-span-3 cust-tp-pera-card text-center py-4 px-2 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div className="relative">
                                                    <img
                                                        src="/assets/img/player/t-6.png"
                                                        alt="Player Image"
                                                        className="w-16 h-16 mx-auto rounded-full mb-2"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    Arshdeep Singh
                                                </h3>
                                                <p className="text-xs text-gray-600">Bowler</p>
                                            </div>
                                            </>}
                                            {!show &&
                                            <div className="col-span-12 text-center flex justify-center cursor-pointer">
                                                <button className="cust-tp-pera-load-more text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] pt-2 underline"
                                                onClick ={()=>setShow(true)}
                                                >
                                                    View More{" "}
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
                                                </button>
                                            </div>
}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    Overall Team India
                                                </h3>
                                            </div>
                                            <a href="#">
                                                <div className="md:font-semibold flex items-center justify-center md:text-[13px] text-[12px]">
                                                    Last updated on&nbsp;06 Dec 2024
                                                </div>
                                            </a>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="w-full md:col-span-3 col-span-6 pr-3 border-r-[1px]">
                                                <div className="flex justify-between items-center mb-1">
                                                    <p className="text-[#909090]">Match Played</p>
                                                    <p className="font-semibold text-[black]">585</p>
                                                </div>
                                                <div className="flex justify-between items-center mb-1">
                                                    <p className="text-[#909090]">Match Won</p>
                                                    <p className="font-semibold text-[#09BAB5]">181</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-[#909090]">Match Lost</p>
                                                    <p className="font-semibold text-[#FF4442]">182</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:col-span-4 col-span-6 pr-3 md:border-r-[1px]">
                                                <div className="flex justify-between items-center mb-1">
                                                    <p className="text-[#909090]">Match Tied</p>
                                                    <p className="font-semibold text-[black]">1</p>
                                                </div>
                                                <div className="flex justify-between items-center mb-1">
                                                    <p className="text-[#909090]">No Result</p>
                                                    <p className="font-semibold text-[black]">222</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-[#909090]">Win Percentage</p>
                                                    <p className="font-semibold text-[#09BAB5]">30.89%</p>
                                                </div>
                                            </div>
                                            <div className="w-full flex bg-[#C2D7EF] rounded-lg md:col-span-5 col-span-12">
                                                <div className="bg-[#6682A3] flex items-center rounded-l-lg text-white font-semibold p-2">
                                                    <p>Debut Match</p>
                                                </div>
                                                <div className="p-2 ">
                                                    <p className="font-semibold">
                                                        Vs&nbsp;ENG&nbsp;on&nbsp;Jun 25,
                                                        1932&nbsp;at&nbsp;Lord's..
                                                    </p>
                                                    <p className="text-[11px]">
                                                        England beat India by 158 runs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    Top performers for Cricket Team India
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div className="cust-box-click-container">
                                            <div className="mb-2">
                                                <div className="flex gap-[10px] overflow-auto items-center">
                                                    <button
                                                        // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                                        // onclick="showCustomBox(this, 'cust-box-click-batters')"
                                                        onClick={() => handleBatterTabClick('cust-box-click-batters')}
                                                        className={`cust-box-click-button font-medium px-5 py-1 ${batterTab === 'cust-box-click-batters' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                                    >
                                                        <span>Batters</span>
                                                    </button>
                                                    
                                                    
                                                    <button
                                                        // className="cust-box-click-button  font-medium px-5 py-1 bg-[#ffffff]  text-[#6A7586]  rounded-full"
                                                        // onclick="showCustomBox(this, 'cust-box-click-bowlers')"
                                                        onClick={() => handleBatterTabClick('cust-box-click-bowlers')}
                                                        className={`cust-box-click-button font-medium px-5 py-1 ${batterTab === 'cust-box-click-bowlers' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                                    >
                                                        <span>Bowlers</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-batters mt-4 ${batterTab ==="cust-box-click-batters" ?"" : "hidden"}`}>
                                                <div className="">
                                                    {/* Player 1 */}
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                01
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-7.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Sachin Tendulkar
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">200</p>
                                                                    <p>Matches</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p className="text-[#18A6ED] font-bold">15698</p>
                                                                    <p>Runs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                02
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-8.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Rahul Dravid
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">200</p>
                                                                    <p>Matches</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p className="text-[#18A6ED] font-bold">15698</p>
                                                                    <p>Runs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                02
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-9.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Sunil Gavaskar
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">200</p>
                                                                    <p>Matches</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p className="text-[#18A6ED] font-bold">15698</p>
                                                                    <p>Runs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-batters mt-4 ${batterTab ==="cust-box-click-bowlers" ?"" : "hidden"}`}>
                                                dfghj
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    Team India Best Scores/Figures in an Inning
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div className="cust-box-click-container">
                                            <div className="mb-2">
                                                <div className="flex gap-[10px] overflow-auto items-center">
                                                    <button
                                                        // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                                        // onclick="showCustomBox(this, 'cust-box-click-bowlers1')"
                                                        onClick={() => handleBatter1TabClick('cust-box-click-batters1')}
                                                        className={`cust-box-click-button font-medium px-5 py-1 ${batter1Tab === 'cust-box-click-batters1' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                                    >
                                                        <span>Bowlers</span>
                                                    </button>
                                                    <button
                                                     onClick={() => handleBatter1TabClick('cust-box-click-bowlers1')}
                                                     className={`cust-box-click-button font-medium px-5 py-1 ${batter1Tab === 'cust-box-click-bowlers1' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                                        // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                        // onclick="showCustomBox(this, 'cust-box-click-batters1')"
                                                    >
                                                        <span>Batters</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-bowlers1 mt-4 ${batter1Tab ==="cust-box-click-batters1" ?"" : "hidden"}`}>
                                                <div className="">
                                                    {/* Player 1 */}
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                01
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-10.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Anil Kumble
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">10/74</p>
                                                                    <p>Wicket</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p>Against</p>
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/16.png"
                                                                            className="h-[15px] rounded-full"
                                                                            alt="aus"
                                                                        />
                                                                        <span className="text-[black] font-medium">
                                                                            Pak
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                02
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-11.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Jasubhai Patel
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">9/69</p>
                                                                    <p>Wicket</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p>Against</p>
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/12.png"
                                                                            className="h-[15px] rounded-full"
                                                                            alt="aus"
                                                                        />
                                                                        <span className="text-[black] font-medium">
                                                                            Aus
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-1xl font-bold text-gray-700 ">
                                                                03
                                                            </div>
                                                            <img
                                                                src="/assets/img/player/t-12.png"
                                                                alt="Sachin Tendulkar"
                                                                className="rounded-full w-10 h-10"
                                                            />
                                                            <h3 className="text-1xl font-semibold text-gray-800">
                                                                Kapil Dev
                                                            </h3>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex mt-2 text-sm text-gray-500">
                                                                <div className="md:px-4 px-2 border-r-[1px] border-l-[1px] text-center">
                                                                    <p className="text-[#18A6ED] font-bold">9/83</p>
                                                                    <p>Wicket</p>
                                                                </div>
                                                                <div className="md:px-4 px-2 text-center">
                                                                    <p>Against</p>
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/b-2.png"
                                                                            className="h-[15px] rounded-full"
                                                                            alt="aus"
                                                                        />
                                                                        <span className="text-[black] font-medium">
                                                                            WI
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-bowlers1 mt-4 ${batter1Tab ==="cust-box-click-bowlers1" ?"" : "hidden"}`}>
                                                dfghj
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] p-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    IND&nbsp;win % against Cricket Teams
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div className="grid md:grid-cols-5 grid-cols-2 gap-4 justify-between">
                                            {/* Afghanistan */}
                                            <div className="flex items-center gap-2 rounded-lg border-[1px] px-3 py-2">
                                                <div className="relative w-[50px] h-[50px]">
                                                    <svg
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            className="text-gray-300"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        />
                                                        <path
                                                            className="text-blue-500"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 1 1 0 31.831
                                          a 15.9155 15.9155 0 1 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            strokeDasharray="100, 100"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-bold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#909090]">win%</span>
                                                    <span className=" font-medium">Afg</span>
                                                </div>
                                            </div>
                                            {/* Australia */}
                                            <div className="flex items-center gap-2 rounded-lg border-[1px] px-3 py-2">
                                                <div className="relative w-[50px] h-[50px]">
                                                    <svg
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            className="text-gray-300"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        />
                                                        <path
                                                            className="text-blue-500"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 1 1 0 31.831
                                          a 15.9155 15.9155 0 1 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            strokeDasharray="30, 100"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-bold">30%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#909090]">win%</span>
                                                    <span className=" font-medium">Aus</span>
                                                </div>
                                            </div>
                                            {/* Bangladesh */}
                                            <div className="flex items-center gap-2 rounded-lg border-[1px] px-3 py-2">
                                                <div className="relative w-[50px] h-[50px]">
                                                    <svg
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            className="text-gray-300"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        />
                                                        <path
                                                            className="text-blue-500"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 1 1 0 31.831
                                          a 15.9155 15.9155 0 1 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            strokeDasharray="87, 100"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-bold">87%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#909090]">win%</span>
                                                    <span className=" font-medium">Ban</span>
                                                </div>
                                            </div>
                                            {/* England */}
                                            <div className="flex items-center gap-2 rounded-lg border-[1px] px-3 py-2">
                                                <div className="relative w-[50px] h-[50px]">
                                                    <svg
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            className="text-gray-300"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        />
                                                        <path
                                                            className="text-blue-500"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 1 1 0 31.831
                                          a 15.9155 15.9155 0 1 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            strokeDasharray="27, 100"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-bold">27%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#909090]">win%</span>
                                                    <span className=" font-medium">Eng</span>
                                                </div>
                                            </div>
                                            {/* Pakistan */}
                                            <div className="flex items-center gap-2 rounded-lg border-[1px] px-3 py-2">
                                                <div className="relative w-[50px] h-[50px]">
                                                    <svg
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            className="text-gray-300"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        />
                                                        <path
                                                            className="text-blue-500"
                                                            d="M18 2.0845
                                          a 15.9155 15.9155 0 1 1 0 31.831
                                          a 15.9155 15.9155 0 1 1 0 -31.831"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            strokeDasharray="34, 100"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-bold">34%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#909090]">win%</span>
                                                    <span className=" font-medium">Pak</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    Team India Best Scores/Figures in an Inning
                                                </h3>
                                            </div>
                                            <a href="#">
                                                <div className="text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] underline">
                                                    View More{" "}
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
                                                </div>
                                            </a>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium">Team</th>
                                                            <th className="px-3 py-3 font-medium">PLD</th>
                                                            <th className="px-3 py-3 font-medium">W</th>
                                                            <th className="px-3 py-3 font-medium">L</th>
                                                            <th className="px-3 py-3 font-medium">T</th>
                                                            <th className="px-3 py-3 font-medium">W%</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7] md:w-[260px]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    1932
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    1933
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    1934
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <div className="flex justify-between items-center pb-2">
                                            <div>
                                                <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                                    Most viewed Cricket Teams
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="border-t border-[#E4E9F0] mb-3" />
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                            {/* Card */}
                                            <a href="/team">
                                                <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                                                    <img
                                                        src="/assets/img/flag/b-1.png"
                                                        alt="Pakistan-W"
                                                        className="h-[42px] mb-2"
                                                    />
                                                    <p className="font-medium">Pakistan-W</p>
                                                </div>
                                                {/* Card */}
                                            </a>
                                            <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                                                <img
                                                    src="/assets/img/flag/b-2.png"
                                                    alt="West Indies-W"
                                                    className="h-[42px] mb-2"
                                                />
                                                <p className="font-medium">West Indies-W</p>
                                            </div>
                                            {/* Card */}
                                            <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                                                <img
                                                    src="/assets/img/flag/b-3.png"
                                                    alt="Australia-W"
                                                    className="h-[42px] mb-2"
                                                />
                                                <p className="font-medium">Australia-W</p>
                                            </div>
                                            {/* Card */}
                                            <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                                                <img
                                                    src="/assets/img/flag/b-4.png"
                                                    alt="Scotland-W"
                                                    className="h-[42px] mb-2"
                                                />
                                                <p className="font-medium">Scotland-W</p>
                                            </div>
                                            {/* Card */}
                                            <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                                                <img
                                                    src="/assets/img/flag/b-5.png"
                                                    alt="South Africa-W"
                                                    className="h-[42px] mb-2"
                                                />
                                                <p className="font-medium">South Africa-W</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="odi" className={`tab-content ${activeTab === 'odi' ? '' : 'hidden'}`}>
                                hello2
                            </div>
                            <div id="t20" className={`tab-content ${activeTab === 't20' ? '' : 'hidden'}`}>
                                hello3
                            </div>
                            <div id="iccworldtwenty20" className={`tab-content ${activeTab === 'iccworldtwenty20' ? '' : 'hidden'}`}>
                                hello4
                            </div>
                            <div id="iccworldcup" className={`tab-content ${activeTab === 'iccworldcup' ? '' : 'hidden'}`}>
                                hello5
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="mb-5">
                            <div className="flex justify-between items-center pb-3">
                                <div>
                                    <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                        Player of the match <span className="text-[#909090]">(Potm)</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-7.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">
                                        S Tendulkar
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-13.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">A Kumar</h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-14.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">
                                        R Ashwin
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between items-center pb-3">
                                <div>
                                    <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                        Player of the series{" "}
                                        <span className="text-[#909090]">(Potm)</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-14.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">
                                        R Ashwin
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-7.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">
                                        S Tendulkar
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-white border-[1px] rounded-lg px-3 py-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-[14px] font-bold text-gray-700 ">01</div>
                                    <img
                                        src="/assets/img/player/t-15.png"
                                        alt="Sachin Tendulkar"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <h3 className="text-[14px] font-semibold text-gray-800">
                                        V Sehwag
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="flex mt-2 text-gray-500">
                                        <div className="px-2 border-r-[1px] border-l-[1px] text-center">
                                            <p className="text-[#18A6ED] font-bold">200</p>
                                            <p>Potm</p>
                                        </div>
                                        <div className="px-2 text-center">
                                            <p className="text-[#18A6ED] font-bold">15698</p>
                                            <p>Matches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center pb-3">
                                <div>
                                    <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                        India Records
                                    </h3>
                                </div>
                                <a href="#">
                                    <div className="text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] underline">
                                        View More{" "}
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
                                    </div>
                                </a>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <div className="cust-box-click-container">
                                    <div className="mb-4">
                                        <div className="flex gap-[10px] overflow-auto items-center">
                                            <button
                                                // className="cust-box-click-button font-medium px-3 py-1 rounded-full bg-[#081736] text-white"
                                                // onclick="showCustomBox(this, 'cust-box-click-homeground')"
                                                onClick={() => handleHomeRecordTabClick('cust-box-click-homeground')}
                                                        className={`cust-box-click-button font-medium px-3 py-1 ${homeRecordTab === 'cust-box-click-homeground' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                            >
                                                <span>Home Ground</span>
                                            </button>
                                            <button
                                                // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-3 py-1 rounded-full"
                                                // onclick="showCustomBox(this, 'cust-box-click-away')"
                                                onClick={() => handleHomeRecordTabClick('cust-box-click-away')}
                                                className={`cust-box-click-button font-medium px-3 py-1 ${homeRecordTab === 'cust-box-click-away' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                            >
                                                <span>Away</span>
                                            </button>
                                            <button
                                                // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-3 py-1 rounded-full"
                                                // onclick="showCustomBox(this, 'cust-box-click-neutral')"
                                                onClick={() => handleHomeRecordTabClick('cust-box-click-neutral')}
                                                className={`cust-box-click-button font-medium px-3 py-1 ${homeRecordTab === 'cust-box-click-neutral' ? 'bg-[#081736] text-white' : 'bg-[#ffffff]  text-[#6A7586]'} rounded-full`}
                                            >
                                                <span>Neutral</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className={`cust-box-click-content cust-box-click-homeground ${homeRecordTab === 'cust-box-click-homeground' ? '' : 'hidden'}`}>
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">
                                                    Match Played
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">292</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">Match Won</p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium text-[#00B564]">118</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">Match lost</p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">58</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">Match Tied</p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">1</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">No Results</p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">115</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">
                                                    Win Percentage
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium text-[#00B564]">40.41</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    // className="cust-box-click-content cust-box-click-away mt-4 hidden"
                                    className={`cust-box-click-content cust-box-click-away mt-4 ${homeRecordTab === 'cust-box-click-away' ? '' : 'hidden'}`}
                                    >
                                        dfghj
                                    </div>
                                    <div 
                                    // className="cust-box-click-content cust-box-click-neutral mt-4 hidden"
                                    className={`cust-box-click-content cust-box-click-neutral mt-4 ${homeRecordTab === 'cust-box-click-neutral' ? '' : 'hidden'}`}
                                    >
                                        sdfghjkl
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center pb-3">
                                <div>
                                    <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                                        Latest Cricket News
                                    </h3>
                                </div>
                                <a href="#">
                                    <div className="text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] underline">
                                        View More{" "}
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
                                    </div>
                                </a>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                {/* Single News Item */}
                                <div className="flex gap-3 my-3">
                                    <img
                                        src="/assets/img/team-2.png"
                                        alt="News thumbnail"
                                        className="rounded-lg h-[77px]"
                                    />
                                    <div>
                                        <h4 className="text-[13px] font-semibold mb-2">
                                            Women's T20 World Cup, 2nd Semifinal | WI-W Vs NZ-W Playing 11
                                            Prediction
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
                                            A Patel{" "}
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
                                            Oct 9, 2024
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
                                            AUS-W Vs SA-W Highlights: Anneke Bosch Overpowers Australia To
                                            Guide South Africa.
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
                                            A Patel{" "}
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
                                            Oct 9, 2024
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
                                            WI-W vs NZ-W Dream11 Prediction Today Match, Fantasy Cricket
                                            Tips, Pitch Report
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
                                            A Patel{" "}
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
                                            Oct 9, 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    )
}

export default Team