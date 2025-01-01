import Layout from '@/Components/Layout'
import WeeklySlider from '@/Components/WeeklySlider';
import React, { useState } from 'react'

const KKRSeries = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [activeSubTab, setActiveSubTab] = useState('all');
    const [activeTeam, setActiveTeam] = useState("south-team");
    const [activeStats, setActiveStats] = useState("most-runs");

    const handleTabClick = (event, tabName) => {
        setActiveTab(tabName);
    };
    const handleSubTabChange = (tab) => {
        setActiveSubTab(tab);
    };
    const handleTeamChange = (team) => {
        setActiveTeam(team);
    };
    const handleStatsChange = (team) => {
        setActiveStats(team);
    };

    const [open, setOpen] = useState({
        mostRuns: false,
        mostHundreds: false,
        mostFifties: false,
        mostDucks: false,
        highestBattingAverage: false,
        highestScore: false,
        mostMatchesAsCaptain: false,
    });

    const toggleOpen = (key) => {
        setOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return (
        <Layout>
            <section className="bg-[#0E2149]">
                <div className="lg:w-[1000px] mx-auto text-white md:pt-10 pt-5 pb-10">
                    <div className="flex items-center justify-between md:p-4 max-w-6xl mx-auto">
                        {/* Left Arrow */}
                        <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                            <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        {/* Content Section */}
                        {/* Content Section full screen  */}
                        <div className="hidden md:flex flex-grow items-center justify-between px-6">
                            {/* Left Section */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/assets/img/series/kkr.png"
                                    alt="Event Logo"
                                    className="md:h-[70px] lg:h-[auto]"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/img/home/win.png" alt="" className="h-[35px]" />
                                        <p className="bg-[#3d548736] px-4 py-1 rounded-full font-medium">
                                            2012, 2014, 2024
                                        </p>
                                    </div>
                                    <h2 className="lg:text-2xl md:text-[17px] font-semibold">
                                        Kolkata Knight Riders
                                    </h2>
                                    <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right Section */}
                            <div className="bg-[#3d548736] py-5 rounded-lg px-[30px] font-semibold">
                                <div className="flex space-x-4 pb-[13px]">
                                    <p className="text-[#92a3bb]">Owener :</p>
                                    <p>Knight Riders Sports Private Ltd</p>
                                </div>
                                <div className="border-[1px] border-b border-[#3D5487]" />
                                <div className="flex space-x-6 py-[13px]">
                                    <p className="text-[#92a3bb]">Coach :</p>
                                    <p>Chandrakant Pandi</p>
                                </div>
                                <div className="border-[1px] border-b border-[#3D5487]" />
                                <div className="flex space-x-4 pt-[13px]">
                                    <p className="text-[#92a3bb]">Captain :</p>
                                    <p>Shreyas Iyer</p>
                                </div>
                            </div>
                        </div>
                        {/* Content Section mobile screen  */}
                        <div className="md:hidden">
                            <div className=" relative">
                                <button
                                    id="left-arrow"
                                    className="absolute left-[6px] top-1/2 -translate-y-1/2  bg-[#ffffff] p-[7px] rounded-full border-2 hidden"
                                    style={{ zIndex: "1", display: "none" }}
                                >
                                    <span className="text-[20px] font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-3 text-[black]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5 8.25 12l7.5-7.5"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                                <div className="relative overflow-hidden mx-6">
                                    {/* Left Arrow */}
                                    {/* series Wrapper */}
                                    <div
                                        id="series"
                                        className="flex gap-3 transition-transform duration-300"
                                        style={{ transform: "translateX(0px)" }}
                                    >
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* Right Arrow */}
                                </div>
                                <button
                                    id="right-arrow"
                                    className="absolute right-[6px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2"
                                    style={{ display: "block" }}
                                >
                                    <span className="text-[20px] font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-3 text-[black]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="px-4 mt-5">
                                <div className="flex items-center gap-1 mb-2">
                                    <img src="/assets/img/home/win.png" alt="" className="h-[25px]" />
                                    <p className="bg-[#3d548736] px-4 py-1 rounded-full font-medium">
                                        2012, 2014, 2024
                                    </p>
                                </div>
                                <h2 className="text-[17px] font-semibold">Kolkata Knight Riders</h2>
                                <a href="#" className="text-green-400 hover:underline mt-2">
                                    More Seasons »
                                </a>
                            </div>
                        </div>
                        {/* Right Arrow */}
                        <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                            <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section class="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
                <div id="tabs" class="my-4">
                    <div class="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <button
                            // onclick="handleTabClick(event, 'info')"
                            //     class="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            onClick={(e) => handleTabClick(e, 'info')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'info' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Overview
                        </button>
                        <button
                            // onclick="handleTabClick(event, 'schedule&results')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'schedule&results')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'schedule&results' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Schedule & Results
                        </button>
                        <button
                            // onclick="handleTabClick(event, 'squads')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'squads')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'squads' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Squads
                        </button>
                        <button
                            // onclick="handleTabClick(event, 'pointstable')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'pointstable')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'pointstable' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Points Table
                        </button>
                        <button
                            // onclick="handleTabClick(event, 'news')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'news')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'news' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            News
                        </button>
                        <button
                            //  onclick="handleTabClick(event, 'stats')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'stats')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'stats' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Stats
                        </button>
                        <button
                            //  onclick="handleTabClick(event, 'stadiums')" class="font-medium py-2 px-3 whitespace-nowrap"
                            onClick={(e) => handleTabClick(e, 'stadiums')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'stadiums' ? 'bg-[#1A80F8] text-white' : ''} rounded-md`}
                        >
                            Stadiums
                        </button>
                    </div>
                </div>
                <div id="tab-content">
                    <div id="info" className={`tab-content ${activeTab === 'info' ? '' : 'hidden'}`}>

                        <div class="md:grid grid-cols-12 gap-4">
                            <div class="lg:col-span-8 md:col-span-7">
                                <div class="rounded-lg bg-white mb-4">
                                    <div class="p-4">
                                        <h3 class="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Info
                                        </h3>
                                        <div class="border-t border-[#E4E9F0]"></div>

                                        {/* <!-- Responsive Grid Section --> */}
                                        <div class="grid gap-2 grid-cols-1 py-3 px-2">
                                            <div class="flex items-center gap-16">
                                                <h2 class="font-normal text-[#586577]">Coach :</h2>
                                                <p class="text-[14px] font-medium">Unknown </p>
                                            </div>
                                            <div class="flex items-center gap-12">
                                                <h2 class="font-normal text-[#586577]">Country :</h2>
                                                <p class="text-[14px] font-medium flex gap-[3px]"><img src="/assets/img/flag/17.png"
                                                    class="h-[20px]" alt="" /> <span> India </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="rounded-lg bg-white">
                                    <div class="p-4">
                                        <h3 class="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Venue
                                        </h3>
                                        <div class="border-t border-[#E4E9F0]"></div>

                                        {/* <!-- Responsive Grid Section --> */}
                                        <div class="grid gap-2 grid-cols-1 py-3 px-2">
                                            <div class="flex items-center gap-16">
                                                <h2 class="font-normal text-[#586577]">Name :</h2>
                                                <p class="text-[14px] font-medium"> Eden Gardens </p>
                                            </div>
                                            <div class="flex items-center gap-12">
                                                <h2 class="font-normal text-[#586577]">Capacity :</h2>
                                                <p class="text-[14px] font-medium"> 66000</p>
                                            </div>

                                            <div class="flex items-center gap-14">
                                                <h2 class="font-normal text-[#586577]">City :</h2>
                                                <p class="text-[14px] font-medium"> Kolkata, India</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="rounded-lg bg-[#ffffff] my-4 p-4">

                                    <h3 class="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Last Match Result
                                    </h3>


                                    {/* <!-- Featured Matches desktop view  --> */}
                                    <div class="border-t-[1px] border-[#E4E9F0]"></div>
                                    <div class="hidden lg:block">
                                        <div class="py-3 flex justify-between items-center">
                                            <div class="flex space-x-2 font-medium	w-full">
                                                <div class="flex items-center space-x-1 flex-col">
                                                    <img src="/assets/img/ipl/b-5.png" class="h-[35px] rounded-full" alt="csk" />
                                                    <span class="text-[#909090]">CSK</span>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-1xl font-semibold">120/8</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>

                                                </div>

                                            </div>

                                            <div class=" font-semibold text-center w-full">
                                                <p class="text-[#3D4DCF] text-[14px]">KKR Won</p>
                                                <p class="text-[#909090] text-[12px] font-normal">2nd Semi Final WT20 World Cup
                                                    2024</p>
                                            </div>

                                            <div class="flex space-x-2 font-medium justify-end w-full">

                                                <div class="mt-1 text-end">
                                                    <p class="text-1xl font-semibold">128/9</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>

                                                </div>

                                                <div class="flex items-center space-x-1 flex-col font-medium">
                                                    <img src="/assets/img/ipl/b-2.png" class="h-[35px] rounded-full" alt="nz" />
                                                    <span class="text-[#909090]">SRH</span>
                                                </div>

                                            </div>

                                        </div>



                                        <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                        <h3 class="text-1xl font-semibold mt-2">
                                            Upcoming Match
                                        </h3>

                                        <div class="py-3 pb-0 flex justify-between items-center">
                                            <div class="flex space-x-2 font-medium	w-full">
                                                <div class="flex items-center space-x-1 flex-row">
                                                    <img src="/assets/img/ipl/b-3.png" class="h-[35px] rounded-full" alt="wiw" />
                                                    <span class="text-[#909090]">RR</span>
                                                </div>
                                            </div>

                                            <div class=" font-semibold text-center w-full">
                                                <p class="text-[#414143] text-[14px]">Final T20 on</p>
                                                <p class="text-[#909090] text-[12px] font-normal">Oct 20, 7:30 PM</p>
                                            </div>

                                            <div class="flex space-x-2 font-medium justify-end w-full">

                                                <div class="flex items-center gap-1 flex-row-reverse font-medium">
                                                    <img src="/assets/img/ipl/b-4.png" class="h-[35px] rounded-full" alt="nz" />
                                                    <span class="text-[#909090]">RCB</span>
                                                </div>

                                            </div>

                                        </div>





                                    </div>

                                    {/* <!-- Featured Matches responsive view view  --> */}

                                    <div class="lg:hidden">
                                        <div class="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p class="text-[#909090] text-[12px] mb-4 font-normal">2nd Semi Final WT20 World Cup
                                                2024
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="">
                                                    <div
                                                        class="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-1.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">CSK</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">120/8</p>
                                                            <p class="text-[#909090]">(20.0 overs)</p>
                                                        </div>
                                                    </div>

                                                    <div class="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-2.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">SRH</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">128/9</p>
                                                            <p class="text-[#909090]">(20.0 overs)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="h-[60px] border-l-[1px] border-[#d0d3d7]"></div>

                                                <div class=" font-semibold text-right">
                                                    <p class="text-[#3D4DCF]">KKR Won</p>

                                                </div>

                                            </div>
                                        </div>



                                        <div class="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p class="text-[#909090] text-[12px] mb-4 font-normal">2nd Semi Final WT20 World Cup
                                                2024
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="">
                                                    <div
                                                        class="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                                                        <div class="flex items-center space-x-1 ">
                                                            <img src="/assets/img/ipl/b-3.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">RR</span>
                                                        </div>

                                                    </div>

                                                    <div class="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                                                        <div class="flex items-center space-x-1 ">
                                                            <img src="/assets/img/ipl/b-4.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">RCB</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="h-[60px] border-l-[1px] border-[#d0d3d7]"></div>

                                                <div class=" font-semibold text-right">
                                                    <p class="text-[#414143]">Final T20 on</p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>



                                <div class="rounded-lg bg-[#ffffff] mb-2 p-4">
                                    <h3 class="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        IPl 2024 Pointe Table
                                    </h3>

                                    <div>
                                        <div class="overflow-x-auto  [&amp;::-webkit-scrollbar] [&amp;::-webkit-scrollbar]:h-[5px] 
                        [&amp;::-webkit-scrollbar-track]:bg-gray-100 
                        [&amp;::-webkit-scrollbar-thumb]:bg-[#DFE9F6] 
                        dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 
                        dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
                                            <table class="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                <thead class="bg-blue-50 text-gray-700 ">
                                                    <tr>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium w-[10px]">No</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Team</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">M</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">W</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">L</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">T</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">N/R</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">PTS</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Net RR</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Form</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-gray-200">
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">1</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <Link href="/kkrSeries">
                                                                <div class="flex items-center gap-[5px] w-[120px]">
                                                                    <div>
                                                                        <img src="/assets/img/ipl/1.png" class="h-[20px]" alt="" />
                                                                    </div>
                                                                    <p>
                                                                        KKR<span class="text-[#00B564]"> (Q)</span>
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">2</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/2.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    SH<span class="text-[#00B564]"> (Q)</span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">3</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/3.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    RR<span class="text-[#00B564]"> (Q)</span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">4</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/4.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    RCB<span class="text-[#00B564]"> (Q)</span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/5.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    CSK
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">6</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/6.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    DC
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">7</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/7.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    LSG
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">8</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/8.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    GT
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/9.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    PK
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                                                        </svg>

                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="md:px-2 pl-[14px] py-3 w-[10px]">10</td>
                                                        <td class="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/ipl/10.png" class="h-[20px]" alt="" />
                                                                </div>
                                                                <p>
                                                                    MI
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">5</td>
                                                        <td class="md:px-2 pl-[14px] py-3">123</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>
                                                        <td class="md:px-2 pl-[14px] py-3">9</td>
                                                        <td class="md:px-2 pl-[14px] py-3">0</td>
                                                        <td class="md:px-2 pl-[14px] py-3">74.65</td>
                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="ml-auto flex gap-2 items-center">
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#F63636] text-white text-[13px] px-[4px] py-[0px] rounded">L</span>
                                                                <span
                                                                    class="bg-[#13B76D] text-white text-[13px] px-[4px] py-[0px] rounded">W</span>
                                                                <span class="flex">
                                                                    <button class="arro-button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                                            stroke="currentColor" class="size-4">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
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


                                <div class="rounded-lg bg-[#ffffff] mb-2 p-4">
                                    <div class="mb-3 flex justify-between items-center">
                                        <h3 class="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Top Player
                                        </h3>
                                        <div>
                                            <select class="border-[1px] rounded-sm" name="" id="">
                                                <option value="">Indian Premier League</option>
                                                <option value="1">Player 1</option>
                                                <option value="2">Player 2</option>
                                            </select>
                                            <select name="" id="" class="border-[1px] rounded-sm">
                                                <option value="">2024</option>
                                                <option value="1">Player 1</option>
                                                <option value="2">Player 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="overflow-x-auto  [&amp;::-webkit-scrollbar] [&amp;::-webkit-scrollbar]:h-[5px] 
                        [&amp;::-webkit-scrollbar-track]:bg-gray-100 
                        [&amp;::-webkit-scrollbar-thumb]:bg-[#DFE9F6] 
                        dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 
                        dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
                                            <table class="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                <thead class="bg-blue-50 text-gray-700 ">
                                                    <tr>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium w-[10px]">Player</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Mat</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Inns</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">HS</th>
                                                        <th class="md:px-2 pl-[14px] py-3 font-medium">Avg</th>


                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-gray-200">
                                                    <tr class="">

                                                        <td class="md:px-2 pl-[14px] py-3">
                                                            <div class="flex items-center gap-[5px] md:w-[240px] w-[185px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">S Narine</p>
                                                                    <p class="text-[12px]">All Rounder</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>
                                                    <tr>

                                                        <td class="px-3 py-3">
                                                            <div class="flex items-center gap-[5px] md:w-[240px] w-[185px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">Riyan Parag</p>
                                                                    <p class="text-[12px]">Batter</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>
                                                    <tr class="bg-[#FFF9F5]">
                                                        <td class="px-3 py-3 md:w-[240px] w-[185px]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">V Iyer</p>
                                                                    <p class="text-[12px]">Batter</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>

                                                    <tr>
                                                        <td class="px-3 py-3 md:w-[240px] w-[185px]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">Shreyas Iyer</p>
                                                                    <p class="text-[12px]">Batter</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>

                                                    <tr>
                                                        <td class="px-3 py-3 md:w-[240px] w-[185px]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">A Russell</p>
                                                                    <p class="text-[12px]">All Rounder</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>

                                                    <tr>
                                                        <td class="px-3 py-3 md:w-[240px] w-[185px]">
                                                            <div class="flex items-center gap-[5px]">
                                                                <div>
                                                                    <img src="/assets/img/player/8.png" class="h-[33px]" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p class="text-[#3e3e3e] font-medium">Rinku Singh</p>
                                                                    <p class="text-[12px]">Batter</p>
                                                                </div>

                                                            </div>
                                                        </td>
                                                        <td class="md:px-2 pl-[14px] py-3">15</td>
                                                        <td class="md:px-2 pl-[14px] py-3">741</td>
                                                        <td class="md:px-2 pl-[14px] py-3">113</td>
                                                        <td class="md:px-2 pl-[14px] py-3">45.50</td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>



                                <div class="rounded-lg bg-[#ffffff] mb-4 p-4">

                                    <h3 class="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Kolkata knight Rider 2024
                                    </h3>


                                    {/* <!-- Featured Matches desktop view  --> */}
                                    <div class="border-t-[1px] border-[#E4E9F0]"></div>
                                    <div class="hidden lg:block">
                                        <div class="py-3 flex justify-between items-center">
                                            <div class="flex space-x-2 font-medium	w-full">
                                                <div class="flex items-center space-x-1 flex-col">
                                                    <img src="/assets/img/ipl/b-1.png" class="h-[35px] rounded-full" alt="csk" />
                                                    <span class="text-[#909090]">CSK</span>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-1xl font-semibold">120/8</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>

                                                </div>

                                            </div>

                                            <div class=" font-semibold text-center w-full">
                                                <p class="text-[#3D4DCF] text-[14px]">KKR Won</p>
                                                <p class="text-[#909090] text-[12px] font-normal">2nd Semi Final WT20 World Cup
                                                    2024</p>
                                            </div>

                                            <div class="flex space-x-2 font-medium justify-end w-full">

                                                <div class="mt-1 text-end">
                                                    <p class="text-1xl font-semibold">128/9</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>

                                                </div>

                                                <div class="flex items-center space-x-1 flex-col font-medium">
                                                    <img src="/assets/img/ipl/b-5.png" class="h-[35px] rounded-full" alt="nz" />
                                                    <span class="text-[#909090]">KKR</span>
                                                </div>

                                            </div>

                                        </div>



                                        <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                        <div class="py-3 flex justify-between items-center">
                                            <div class="flex space-x-2 font-medium	w-full">
                                                <div class="flex items-center space-x-1 flex-col">
                                                    <img src="/assets/img/ipl/b-2.png" class="h-[35px] rounded-full" alt="srh" />
                                                    <span class="text-[#909090]">SRH</span>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-1xl font-semibold">134/5</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>

                                                </div>

                                            </div>

                                            <div class=" font-semibold text-center w-full">
                                                <p class="text-[#3D4DCF] text-[14px]">SRH Won</p>
                                                <p class="text-[#909090] text-[12px] font-normal">1st Semi Final WT20 World Cup
                                                    2024</p>
                                            </div>

                                            <div class="flex space-x-2 font-medium justify-end w-full">

                                                <div class="mt-1 text-end">
                                                    <p class="text-1xl font-semibold">135/2</p>
                                                    <p class="text-[#909090]">(17.2 overs)</p>

                                                </div>

                                                <div class="flex items-center space-x-1 flex-col font-medium">
                                                    <img src="/assets/img/ipl/b-5.png" class="h-[35px] rounded-full" alt="nz" />
                                                    <span class="text-[#909090]">KKR</span>
                                                </div>

                                            </div>

                                        </div>


                                        <div class="border-t-[1px] border-[#E4E9F0]"></div>


                                        <div class="py-3 flex justify-between items-center">
                                            <div class="flex space-x-2 font-medium	w-full">
                                                <div class="flex items-center space-x-1 flex-col">
                                                    <img src="/assets/img/ipl/b-3.png" class="h-[35px] rounded-full" alt="srh" />
                                                    <span class="text-[#909090]">RR</span>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-1xl font-semibold">134/5</p>
                                                    <p class="text-[#909090]">(20.0 overs)</p>
                                                </div>
                                            </div>

                                            <div class=" font-semibold text-center w-full">
                                                <p class="text-[#3D4DCF] text-[14px]">SRH Won</p>
                                                <p class="text-[#909090] text-[12px] font-normal">1st Semi Final WT20 World Cup
                                                    2024</p>
                                            </div>

                                            <div class="flex space-x-2 font-medium justify-end w-full">

                                                <div class="mt-1 text-end">
                                                    <p class="text-1xl font-semibold">135/2</p>
                                                    <p class="text-[#909090]">(17.2 overs)</p>

                                                </div>

                                                <div class="flex items-center space-x-1 flex-col font-medium">
                                                    <img src="/assets/img/ipl/b-5.png" class="h-[35px] rounded-full" alt="nz" />
                                                    <span class="text-[#909090]">KKR</span>
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    {/* <!-- Featured Matches responsive view view  --> */}

                                    <div class="lg:hidden">
                                        <div class="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p class="text-[#909090] text-[12px] mb-4 font-normal">2nd Semi Final WT20 World Cup
                                                2024
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="">
                                                    <div
                                                        class="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-1.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">CSK</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">120/8</p>
                                                            <p class="text-[#909090]">(20.0 overs)</p>
                                                        </div>
                                                    </div>

                                                    <div class="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-2.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">SRH</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">128/9</p>
                                                            <p class="text-[#909090]">(20.0 overs)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="h-[60px] border-l-[1px] border-[#d0d3d7]"></div>

                                                <div class=" font-semibold text-right">
                                                    <p class="text-[#3D4DCF]">KKR Won</p>

                                                </div>

                                            </div>
                                        </div>

                                        <div class="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p class="text-[#909090] text-[12px] mb-4 font-normal">1st Semi Final WT20 World Cup
                                                2024
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="">
                                                    <div
                                                        class="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-2.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">SRH</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">134/5</p>
                                                            <p class="text-[#909090]">(20.0 overs)</p>
                                                        </div>
                                                    </div>

                                                    <div class="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                                                        <div class="flex items-center space-x-1 flex-col">
                                                            <img src="/assets/img/ipl/b-3.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">RR</span>
                                                        </div>
                                                        <div class="flex items-center gap-2 mt-1">
                                                            <p class="text-1xl font-semibold">135/2</p>
                                                            <p class="text-[#909090]">(17.2 overs)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="h-[60px] border-l-[1px] border-[#d0d3d7]"></div>

                                                <div class=" font-semibold text-right">
                                                    <p class="text-[#3D4DCF]">SRH Won</p>

                                                </div>

                                            </div>
                                        </div>

                                        <div class="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p class="text-[#909090] text-[12px] mb-4 font-normal">2nd Semi Final WT20 World Cup
                                                2024
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="">
                                                    <div
                                                        class="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                                                        <div class="flex items-center space-x-1 ">
                                                            <img src="/assets/img/ipl/b-3.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">RR</span>
                                                        </div>

                                                    </div>

                                                    <div class="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                                                        <div class="flex items-center space-x-1 ">
                                                            <img src="/assets/img/ipl/b-4.png" class="h-[25px] rounded-full" alt="wiw" />
                                                            <span class="text-[#909090]">RCB</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="h-[60px] border-l-[1px] border-[#d0d3d7]"></div>

                                                <div class=" font-semibold text-right">
                                                    <p class="text-[#414143]">Final T20 on</p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="rounded-lg bg-[#ffffff] p-4 mb-4">

                                    <div>

                                        <div class="mb-3 flex justify-between items-center">
                                            <h3 class="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Players
                                            </h3>
                                            {/* <!-- <div>
                                <select class="border-[1px] rounded-sm" name="" id="">
                                    <option value="">Box View</option>
                                    <option value="1">Player 1</option>
                                    <option value="2">Player 2</option>
                                </select>

                            </div> --> */}
                                        </div>

                                        <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
                                            {/* <!-- All-Rounder Cards --> */}
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-1.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Ander Russell</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/b-2.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>
                                            {/* <!-- Repeat similar cards for other players --> */}
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-2.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Rinku Singh</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/17.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">Batter</p>
                                                </div>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-3.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Rahmanullah G</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/1.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">Batter</p>
                                                </div>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-4.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Sunil Narine</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/b-2.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-5.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Mitchell Starc</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/2.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-6.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Shreyas Iyer</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/17.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-7.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Phil Salt</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/b-2.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">Batter</p>
                                                </div>
                                            </div>

                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-8.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">S Rutheford</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/b-2.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>

                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-9.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Venketesh Iyer</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/17.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>

                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-10.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />
                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Varun Chakar</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/17.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>

                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-11.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Am Ghazanfar</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/b-1.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>

                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/player/b-12.png" alt="Player Image"
                                                        class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Manish Pandey</h3>
                                                <div class="flex gap-1 items-center justify-center">
                                                    <img src="/assets/img/flag/17.png" class="h-[15px] rounded-full" alt="" />
                                                    <p class="text-xs text-gray-600">All-Rounder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <div>
                                        <h3 class="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Support Staff
                                        </h3>
                                        <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
                                            {/* <!-- Bowler Cards --> */}
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/staff/s-1.png" alt="Player Image" class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Nathan Andrew</h3>
                                                <p class="text-xs text-gray-600">Analyst</p>
                                            </div>
                                            {/* <!-- Repeat similar cards for other players --> */}
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/staff/s-2.png" alt="Player Image" class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Abhisheck Nayar</h3>
                                                <p class="text-xs text-gray-600">Assistant Coach</p>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/staff/s-3.png" alt="Player Image" class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Abhisheck Ashok</h3>
                                                <p class="text-xs text-gray-600">Assistant Physio</p>
                                            </div>
                                            <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                <div class="relative">
                                                    <img src="/assets/img/staff/s-4.png" alt="Player Image" class="h-[55px] mx-auto rounded-full mb-2" />

                                                </div>
                                                <h3 class="text-[14px] font-medium text-gray-800">Bharathi Arun</h3>
                                                <p class="text-xs text-gray-600">Bowling Coach</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div class="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <h3 class="text-1xl font-semibold mb-1">
                                        India vs Zimbabwe 2024
                                    </h3>
                                    <p class="text-gray-500 font-normal">The biggest tournament in the cricketing circuit, the
                                        ICC T20 WORLD Cup is underway in
                                        the USAs and the West Indies. The tournament received excellent response from the fans
                                        worldwide and the finals of the gran...</p>

                                    <p class="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">Read
                                        more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                                        </svg>
                                    </p>
                                </div>

                                <div class="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <h3 class="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        News
                                    </h3>

                                    <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                    <div class="lg:grid grid-cols-12 gap-4 mt-4">
                                        {/* <!-- Main News Item --> */}

                                        <div class="col-span-6 border-r-[1px] border-[#E7F2F4] pr-[16px]">
                                            <img src="/assets/img/team-1.png" alt="Main news"
                                                class="rounded-lg w-full h-48 object-cover mb-3" />
                                            <h3 class="text-1xl font-semibold mb-1">Live - Jagadeesan hits a century; Haryana
                                                trounce</h3>
                                            <p class="text-gray-500 font-normal">
                                                India will go into the home Test series against New Zealand with pretty much the
                                                same squad that took on Bangladesh in September - India's last red-ball action
                                                ahead
                                                of the five-Test...
                                            </p>

                                            <div class="border-l-[1px] border-[#E7F2F4]"></div>

                                        </div>


                                        {/* <!-- Side News Items --> */}
                                        <div class="col-span-6">
                                            {/* <!-- Single News Item --> */}
                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-2.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">Women's T20 World Cup, 2nd
                                                        Semifinal | WI-W Vs NZ-W Playing 11 Prediction</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-3.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">AUS-W Vs SA-W Highlights: Anneke
                                                        Bosch Overpowers Australia To Guide South Africa.</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-4.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">WI-W vs NZ-W Dream11 Prediction
                                                        Today Match, Fantasy Cricket Tips, Pitch Report</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> P Bhattachar <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>

                            <div class="lg:col-span-4 md:col-span-5">
                                <div class="bg-white rounded-lg p-4 mb-4">
                                    <div class="flex gap-1 items-center justify-between">
                                        <div class="flex gap-1 items-center">
                                            <div class="col-span-4 relative">
                                                <img src="/assets/img/home/trofi.png" class="h-[75px]" alt="" />
                                            </div>
                                            <div class="col-span-8 relative">
                                                <h3 class="font-semibold text-[19px] mb-1">Weekly challenge</h3>
                                                <p class="font-semibold text-[13px] text-[#1a80f8]"><span
                                                    class="text-[#586577]">Time
                                                    Left:</span>{" "}
                                                    2 Days 12h</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Slider 1 --> */}

                                <WeeklySlider />

                                <div className="my-4">
                                    <div className="mb-2">
                                        <h3 className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8]">
                                            IPL Records
                                        </h3>
                                    </div>
                                    <div className="bg-white rounded-lg px-4">
                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3 pt-4"
                                                onClick={() => toggleOpen("mostRuns")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Most Runs in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.mostRuns && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("mostHundreds")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Most Hundreds in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.mostHundreds && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("mostFifties")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Most Fifties in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.mostFifties && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 text-[#1A80F8] mr-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        Bangabandhu T20 C
                                                    </p>
                                                    <p className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 text-[#1A80F8] mr-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        Bangladesh Premier
                                                    </p>
                                                    <p className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 text-[#1A80F8] mr-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        Bangladesh Tri-Series
                                                    </p>
                                                    <p className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 text-[#1A80F8] mr-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        BCB Presidents Cup
                                                    </p>
                                                    <p className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 text-[#1A80F8] mr-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        Dhaka Premier League
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("mostDucks")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Most Ducks in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.mostDucks && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("highestBattingAverage")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Highest Batting Average in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.highestBattingAverage && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("highestScore")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Highest Individual Score in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.highestScore && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <button
                                                className="w-full flex text-[14px] justify-between items-center pb-3"
                                                onClick={() => toggleOpen("mostMatchesAsCaptain")}
                                            >
                                                <span className="flex items-center font-medium text-[#394351]">
                                                    Most Matches as Captain in IPL
                                                </span>
                                                <span className="transform transition-transform ">
                                                    <img src="/assets/img/arrow.png" className="h-[7px]" alt="arrow" />
                                                </span>
                                            </button>
                                            {open.mostMatchesAsCaptain && (
                                                <div className="pl-8 py-2 space-y-2 font-normal text-[14px] text-[#51555E]">
                                                    <p>Bangabandhu T20 C</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div class="pb-2 mb-4">
                                    <div class="py-2">
                                        <h3 class="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                            POPULAR</h3>

                                    </div>
                                    <div class="">
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2">
                                            <div>
                                                <img src="/assets/img/1.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                ICC World cup
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/2.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                ICC Champion Trophy
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/3.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                T20 World Cup
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/4.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                Indian Premium League
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/5.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                Pakistan Super League
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/6.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                Bangladesh Premium Leaguge
                                            </div>
                                        </div>
                                        <div
                                            class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/7.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                Big Bash Leaguge
                                            </div>
                                        </div>
                                        <div class="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/8.png" alt="" />
                                            </div>
                                            <div class="font-medium text-[#394351]">
                                                Super Smash
                                            </div>
                                        </div>


                                    </div>

                                </div>

                                <div class="mb-4">
                                    <div class="py-2">
                                        <h3 class="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                            Fantasy Tips</h3>
                                    </div>

                                    <div class="bg-[#ffffff] rounded-lg ">
                                        <div class="p-4">
                                            <div class=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p class="text-[13px] font-semibold">NZ-W Vs WI-W Highlights: Eden Carson,
                                                    Amelia
                                                    Kerr Pummel West
                                                    Indies In Semis As NZ Set Date With SA</p>
                                                <p class="text-[#586577] pt-2">15 hrs ago</p>

                                            </div>
                                            <div class=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p class="text-[13px] font-semibold">Probably Took Wrong Risk': Alyssa Healy
                                                    Regrets
                                                    Sitting Out
                                                    As SA Stuns AUS In T20 WC</p>
                                                <p class="text-[#586577] pt-2">17 hrs ago</p>

                                            </div>
                                            <div class=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p class="text-[13px] font-semibold">Women's T20 World Cup, NZ vs WI: Unchanged
                                                    New
                                                    Zealand Opt To
                                                    Bat; Check Out The Playing XIs</p>
                                                <p class="text-[#586577] pt-2">19 hrs ago</p>

                                            </div>
                                            <div class=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p class="text-[13px] font-semibold">SA Cricketers Get Emotional After Historic
                                                    Win
                                                    Against
                                                    Australia To Enter T20 World Cup 2024 Final - Watch</p>
                                                <p class="text-[#586577] pt-2">18 Oct 2024</p>

                                            </div>
                                            <div class=" pb-2 mb-2">
                                                <p class="text-[13px] font-semibold">'Probably Took Wrong Risk': Alyssa Healy
                                                    Regrets Sitting Out
                                                    As SA Stuns AUS In T20 WC</p>
                                                <p class="text-[#586577] pt-2">18 Oct 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div id="schedule&results" className={`tab-content ${activeTab === 'schedule&results' ? '' : 'hidden'}`}>

                        <div className="md:grid grid-cols-12 gap-4">
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    {/* Buttons */}
                                    <div className="flex space-x-4">
                                        <button
                                            // className="suide-pera-all bg-[#1A80F8] text-white rounded-md px-4 py-2 font-medium"
                                            className={`suide-pera-all ${activeSubTab === 'all' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                            onClick={() => handleSubTabChange('all')}
                                        >
                                            All
                                        </button>
                                        <button
                                            // className="suide-pera-all1  rounded-md px-4 py-2 font-medium"
                                            className={`suide-pera-all ${activeSubTab === 'all1' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                            // onclick="showData('all1')"
                                            onClick={() => handleSubTabChange('all1')}
                                        >
                                            SCHEDULED
                                        </button>
                                        <button
                                            // className="suide-pera-all3 rounded-md px-4 py-2 font-medium"
                                            className={`suide-pera-all ${activeSubTab === 'all3' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                            // onclick="showData('all3')"
                                            onClick={() => handleSubTabChange('all3')}
                                        >
                                            RESULT
                                        </button>
                                    </div>
                                    {/* Data Sections */}
                                </div>
                                <div
                                    // className="suide-pera-all-data"
                                    className={`suide-pera-all-data ${activeSubTab === 'all' ? 'block' : 'hidden'}`}>

                                    {/* SCHEDULED match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#A45B09] rounded-full pr-2 font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> SCHEDULED
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-[13px] font-medium">SA</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                        <a href="#">
                                            <div className="py-4 px-3">
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                            Final, WT20 World Cup 2024
                                                        </p>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/sa.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="sa"
                                                                />
                                                                <span className="font-semibold">SA-W</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/nz.png"
                                                                        className="h-[30px]"
                                                                        alt="ind"
                                                                    />
                                                                    <span className="font-semibold">NZ-W</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" font-medium text-center">
                                                        <p className="text-[#FC9014] text-[14px]">
                                                            20th September - Fri, <br /> 5:30 PM GMT
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-3">
                                            <div className="flex items-center">
                                                <a href="#">
                                                    <p className=" text-[#909090] font-medium"> Points Table</p>
                                                </a>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <a href="#">
                                                    <p className="text-[#909090] font-medium">Schedule</p>
                                                </a>
                                            </div>
                                            <a href="#">
                                                <div className="flex mt-2 justify-end items-center space-x-2">
                                                    <img src="/assets/img/home/handshake.png" alt="" />
                                                    <span className="text-[#909090] font-medium">H2H</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* SCHEDULED match desktopn view End */}
                                    {/* SCHEDULED match desktopn view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#A45B09] rounded-full font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> SCHEDULED
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-[12px] top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    Final, WT20 World Cup 2024
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/sa.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/nz.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                NZ-W
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=" font-medium text-center">
                                                            <p className="text-[#FC9014] font-medium mt-1 text-[11px]">
                                                                20th September - Fri,
                                                                <br />
                                                                5:30 PM GMT
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 text-[11px]">
                                                    <span className="text-[#909090] font-medium">BAN</span>
                                                    <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-md text-[#0B773C] pr-2">
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
                                                    <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-md text-[#A70B0B] pr-2">
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
                                        </div>
                                    </div>
                                    {/* SCHEDULED match desktopn view End */}
                                    {/* RESULT match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2  font-medium">
                                                <span className="text-[13px]">AUS</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                    37
                                                </span>
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                    40
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="py-4 px-3">
                                            <div className="flex justify-between items-center text-[14px]">
                                                <a href="#">
                                                    <div className="">
                                                        <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                            1st Semi Final,WT20 World Cup
                                                        </p>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <span className="text-[#909090] font-semibold">
                                                                    SA-W -{" "}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                <span className=" font-semibold">135/3</span>
                                                                <span className="text-[#909090] text-[13px]">
                                                                    {" "}
                                                                    (17.3 overs)
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/aus.png"
                                                                        className="h-[30px]"
                                                                        alt="ind"
                                                                    />
                                                                    <span className="text-[#909090] font-semibold">
                                                                        AU-W -{" "}
                                                                    </span>
                                                                </div>
                                                                <p>
                                                                    <span className=" font-semibold">134/10</span>
                                                                    <span className="text-[#909090] text-[13px]">
                                                                        {" "}
                                                                        (20 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className="flex flex-col items-center">
                                                    <img src="/assets/img/player/g-5.png" alt="" />
                                                    <p className=" font-semibold">Anneke Bosch</p>
                                                    <p>Man of the match</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT match desktopn view End */}
                                    {/* RESULT match Mobile view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-4 top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                    1st Semi Final,WT20 World Cup
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W -
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">135/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (17.3 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/aus.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                AU-W -
                                                                            </span>
                                                                        </span>
                                                                        <p className="flex items-end gap-2">
                                                                            <span className=" font-semibold">134/10</span>
                                                                            <span className="text-[#909090] text-[12px] font-normal">
                                                                                (20 overs)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                    <div className=" font-semibold flex flex-col items-center">
                                                        <img src="/assets/img/home/win.png" alt="" />
                                                        <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                            SA won by 7 wickets
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="/assets/img/player/g-5.png"
                                                            className="h-[32px]"
                                                            alt=""
                                                        />
                                                        <div>
                                                            <p className=" font-semibold">Anneke Bosch</p>
                                                            <p className="text-[11px]">Man of the match</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT match Mobile view End */}
                                    {/* RESULT 2 match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2  font-medium">
                                                <span className="text-[13px]">AUS</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                    37
                                                </span>
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                    40
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="py-4 px-3">
                                            <div className="flex justify-between items-center text-[14px]">
                                                <a href="#">
                                                    <div className="">
                                                        <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                            16 Match,WT20 World Cup
                                                        </p>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <span className="text-[#909090] font-semibold">
                                                                    SA-W -{" "}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                <span className=" font-semibold">107/3</span>
                                                                <span className="text-[#909090] text-[13px]">
                                                                    {" "}
                                                                    (17.2 overs)
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/ban.png"
                                                                        className="h-[30px]"
                                                                        alt="ban"
                                                                    />
                                                                    <span className="text-[#909090] font-semibold">
                                                                        BN-W -{" "}
                                                                    </span>
                                                                </div>
                                                                <p>
                                                                    <span className=" font-semibold">106/3</span>
                                                                    <span className="text-[#909090] text-[13px]">
                                                                        {" "}
                                                                        (20 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className="flex flex-col items-center">
                                                    <img src="/assets/img/player/g-6.png" alt="" />
                                                    <p className=" font-semibold">Tazmin Brits</p>
                                                    <p>Man of the match</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT 2 match desktopn view End */}
                                    {/* RESULT 2 match Mobile view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-4 top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                    16 Match,WT20 World Cup
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W -{" "}
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">107/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (17.2 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/aus.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                BN-W -
                                                                            </span>
                                                                        </span>
                                                                        <p className="flex items-end gap-2">
                                                                            <span className=" font-semibold">106/3</span>
                                                                            <span className="text-[#909090] text-[12px] font-normal">
                                                                                (20 overs)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                    <div className=" font-semibold flex flex-col items-center">
                                                        <img src="/assets/img/home/win.png" alt="" />
                                                        <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                            SA won by 7 wickets
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="/assets/img/player/g-6.png"
                                                            className="h-[32px]"
                                                            alt=""
                                                        />
                                                        <div>
                                                            <p className=" font-semibold">Tazmin Brits</p>
                                                            <p className="text-[11px]">Man of the match</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT 2 match Mobile view End */}
                                </div>
                                <div
                                    // className="suide-pera-all1-data hidden"
                                    className={`suide-pera-all-data ${activeSubTab === 'all1' ? 'block' : 'hidden'}`}>

                                    {/* SCHEDULED match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#A45B09] rounded-full pr-2 font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> SCHEDULED
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-[13px] font-medium">SA</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                        <div className="py-4 px-3">
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                        Final, WT20 World Cup 2024
                                                    </p>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/sa.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="sa"
                                                            />
                                                            <span className="font-semibold">SA-W</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/nz.png"
                                                                    className="h-[30px]"
                                                                    alt="ind"
                                                                />
                                                                <span className="font-semibold">NZ-W</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" font-medium text-center">
                                                    <p className="text-[#FC9014] text-[14px]">
                                                        20th September - Fri, <br /> 5:30 PM GMT
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-3">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] font-medium"> Points Table</p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <p className="text-[#909090] font-medium">Schedule</p>
                                            </div>
                                            <div className="flex mt-2 justify-end items-center space-x-2">
                                                <img src="/assets/img/home/handshake.png" alt="" />
                                                <span className="text-[#909090] font-medium">H2H</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* SCHEDULED match desktopn view End */}
                                    {/* SCHEDULED match desktopn view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#A45B09] rounded-full font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> SCHEDULED
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-[12px] top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    Final, WT20 World Cup 2024
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/sa.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/nz.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                NZ-W
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=" font-medium text-center">
                                                            <p className="text-[#FC9014] font-medium mt-1 text-[11px]">
                                                                20th September - Fri,
                                                                <br />
                                                                5:30 PM GMT
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 text-[11px]">
                                                    <span className="text-[#909090] font-medium">BAN</span>
                                                    <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-md text-[#0B773C] pr-2">
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
                                                    <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-md text-[#A70B0B] pr-2">
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
                                        </div>
                                    </div>
                                    {/* SCHEDULED match desktopn view End */}
                                </div>
                                <div
                                    // className="suide-pera-all3-data hidden"
                                    className={`suide-pera-all-data ${activeSubTab === 'all3' ? 'block' : 'hidden'}`}>
                                    {/* RESULT match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2  font-medium">
                                                <span className="text-[13px]">AUS</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                    37
                                                </span>
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                    40
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="py-4 px-3">
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                        1st Semi Final,WT20 World Cup
                                                    </p>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                SA-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">135/3</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (17.3 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/aus.png"
                                                                    className="h-[30px]"
                                                                    alt="ind"
                                                                />
                                                                <span className="text-[#909090] font-semibold">
                                                                    AU-W -{" "}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                <span className=" font-semibold">134/10</span>
                                                                <span className="text-[#909090] text-[13px]">
                                                                    {" "}
                                                                    (20 overs)
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className="flex flex-col items-center">
                                                    <img src="/assets/img/player/g-5.png" alt="" />
                                                    <p className=" font-semibold">Anneke Bosch</p>
                                                    <p>Man of the match</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT match desktopn view End */}
                                    {/* RESULT match Mobile view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-4 top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                    1st Semi Final,WT20 World Cup
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W -
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">135/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (17.3 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/aus.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                AU-W -
                                                                            </span>
                                                                        </span>
                                                                        <p className="flex items-end gap-2">
                                                                            <span className=" font-semibold">134/10</span>
                                                                            <span className="text-[#909090] text-[12px] font-normal">
                                                                                (20 overs)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                    <div className=" font-semibold flex flex-col items-center">
                                                        <img src="/assets/img/home/win.png" alt="" />
                                                        <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                            SA won by 7 wickets
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="/assets/img/player/g-5.png"
                                                            className="h-[32px]"
                                                            alt=""
                                                        />
                                                        <div>
                                                            <p className=" font-semibold">Anneke Bosch</p>
                                                            <p className="text-[11px]">Man of the match</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT match Mobile view End */}
                                    {/* RESULT 2 match desktopn view Start */}
                                    <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2  font-medium">
                                                <span className="text-[13px]">AUS</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                    37
                                                </span>
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                    40
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="py-4 px-3">
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                        16 Match,WT20 World Cup
                                                    </p>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                SA-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">107/3</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (17.2 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/ban.png"
                                                                    className="h-[30px]"
                                                                    alt="ban"
                                                                />
                                                                <span className="text-[#909090] font-semibold">
                                                                    BN-W -{" "}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                <span className=" font-semibold">106/3</span>
                                                                <span className="text-[#909090] text-[13px]">
                                                                    {" "}
                                                                    (20 overs)
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                                <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className="flex flex-col items-center">
                                                    <img src="/assets/img/player/g-6.png" alt="" />
                                                    <p className=" font-semibold">Tazmin Brits</p>
                                                    <p>Man of the match</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT 2 match desktopn view End */}
                                    {/* RESULT 2 match Mobile view Start */}
                                    <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                    style={{ gap: 3 }}
                                                >
                                                    <span className="rounded-full">●</span> RESULT
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                        Women's T20 World Cup 2024
                                                    </h4>
                                                </div>
                                                <span className="absolute right-4 top-[19px]">
                                                    <button className="arro-button">
                                                        <img src="/assets/img/arrow.png" className="" alt="" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="open-Performance-data">
                                            <div className="py-2 pb-3">
                                                <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                    16 Match,WT20 World Cup
                                                </p>
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <div className="">
                                                        <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/eng.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            SA-W -{" "}
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">107/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (17.2 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <img
                                                                        src="/assets/img/aus.png"
                                                                        className="h-[30px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <div>
                                                                        <span className="flex items-center gap-1">
                                                                            <span className="text-[#5e5e5e] font-medium">
                                                                                BN-W -
                                                                            </span>
                                                                        </span>
                                                                        <p className="flex items-end gap-2">
                                                                            <span className=" font-semibold">106/3</span>
                                                                            <span className="text-[#909090] text-[12px] font-normal">
                                                                                (20 overs)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {"{"}/*{" "}
                                                    {/* <div class="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}{" "}
                                                    */{"}"}
                                                    <div className=" font-semibold flex flex-col items-center">
                                                        <img src="/assets/img/home/win.png" alt="" />
                                                        <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                            SA won by 7 wickets
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E7F2F4]" />
                                            <div className="flex items-center justify-between space-x-5 mt-2">
                                                <div className="flex items-center">
                                                    <p className=" text-[#909090] text-[11px] font-medium">
                                                        {" "}
                                                        Points Table
                                                    </p>
                                                    <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                    <div className="flex justify-end items-center space-x-2">
                                                        <img
                                                            src="/assets/img/home/handshake.png"
                                                            className="h-[15px]"
                                                            alt=""
                                                        />
                                                        <span className="text-[#909090] text-[11px] font-medium">
                                                            H2H
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="/assets/img/player/g-6.png"
                                                            className="h-[32px]"
                                                            alt=""
                                                        />
                                                        <div>
                                                            <p className=" font-semibold">Tazmin Brits</p>
                                                            <p className="text-[11px]">Man of the match</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* RESULT 2 match Mobile view End */}
                                </div>
                                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <h3 className="text-1xl font-semibold mb-1">
                                        South Africa Women vs Australia Women, Semi Final
                                    </h3>
                                    <p className="text-gray-500 font-normal">
                                        The biggest tournament in the cricketing circuit, the ICC T20
                                        WORLD Cup is underway in the USAs and the West Indies. The
                                        tournament received excellent response from the fans worldwide and
                                        the finals of the gran...
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
                            </div>
                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="bg-white rounded-lg p-4 mb-4">
                                    <div className="flex gap-1 items-center justify-between">
                                        <div className="flex gap-1 items-center">
                                            <div className="col-span-4 relative">
                                                <img
                                                    src="/assets/img/home/trofi.png"
                                                    className="h-[75px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-span-8 relative">
                                                <h3 className="font-semibold text-[19px] mb-1">
                                                    Weekly challenge
                                                </h3>
                                                <p className="font-semibold text-[13px] text-[#1a80f8]">
                                                    <span className="text-[#586577]">Time Left:</span>{" "}2 Days 12h
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



                                {/* Slider 1 */}

                                <WeeklySlider />









                                <div className=" my-4">
                                    <div className="py-2 mb-2">
                                        <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                            Fantasy Tips
                                        </h3>
                                    </div>
                                    <div className="bg-[#ffffff] rounded-lg ">
                                        <div className="p-4">
                                            <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p className="text-[13px] font-semibold">
                                                    NZ-W Vs WI-W Highlights: Eden Carson, Amelia Kerr Pummel
                                                    West Indies In Semis As NZ Set Date With SA
                                                </p>
                                                <p className="text-[#586577] pt-2">15 hrs ago</p>
                                            </div>
                                            <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p className="text-[13px] font-semibold">
                                                    Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                                                    As SA Stuns AUS In T20 WC
                                                </p>
                                                <p className="text-[#586577] pt-2">17 hrs ago</p>
                                            </div>
                                            <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p className="text-[13px] font-semibold">
                                                    Women's T20 World Cup, NZ vs WI: Unchanged New Zealand Opt
                                                    To Bat; Check Out The Playing XIs
                                                </p>
                                                <p className="text-[#586577] pt-2">19 hrs ago</p>
                                            </div>
                                            <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                <p className="text-[13px] font-semibold">
                                                    SA Cricketers Get Emotional After Historic Win Against
                                                    Australia To Enter T20 World Cup 2024 Final - Watch
                                                </p>
                                                <p className="text-[#586577] pt-2">18 Oct 2024</p>
                                            </div>
                                            <div className=" pb-2 mb-2">
                                                <p className="text-[13px] font-semibold">
                                                    'Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                                                    As SA Stuns AUS In T20 WC
                                                </p>
                                                <p className="text-[#586577] pt-2">18 Oct 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-2 my-4">
                                    <div className="py-2 mb-2">
                                        <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                            POPULAR
                                        </h3>
                                    </div>
                                    <div className="">
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2">
                                            <div>
                                                <img src="/assets/img/1.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">ICC World cup</div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/2.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">
                                                ICC Champion Trophy
                                            </div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/3.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">T20 World Cup</div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/4.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">
                                                Indian Premium League
                                            </div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/5.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">
                                                Pakistan Super League
                                            </div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/6.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">
                                                Bangladesh Premium Leaguge
                                            </div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                            <div>
                                                <img src="/assets/img/7.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">
                                                Big Bash Leaguge
                                            </div>
                                        </div>
                                        <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/8.png" alt="" />
                                            </div>
                                            <div className="font-medium text-[#394351]">Super Smash</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Scorecard Tab --> */}
                    <div id="squads" className={`tab-content ${activeTab === 'squads' ? '' : 'hidden'}`}>
                        <div class="py-2 mb-2">
                            <h3 class="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                WT20 World Cup 2024 Squads
                            </h3>
                        </div>



                        <div class="md:grid grid-cols-12 gap-4">
                            <div class="lg:col-span-4 md:col-span-5">
                                <div class="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                    <div id="team-buttons" class="">

                                        <button
                                            // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "aus-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("aus-team")}
                                        // data-target="aus-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Afghanistan Flag" />
                                            Australia-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "ind-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("ind-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="ind-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            India-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "eng-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("eng-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="eng-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            England-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "south-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("south-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center active"
                                        // data-target="south-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            South Africa-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "nz-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("nz-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="nz-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            New Zealand-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "sri-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("sri-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="sri-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            Sri Lanka-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "west-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("west-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="west-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            West Indies-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "ban-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("ban-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="ban-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            Bangladesh-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "pak-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("pak-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="pak-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            Pakistan-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "Scot-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("Scot-team")}
                                        // class="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="Scot-team"
                                        >
                                            <img src="/assets/img/flag/1.png" class="mr-3" alt="Bangladesh Flag" />
                                            Scotland-W
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-8 md:col-span-7">
                                <div id="aus-team" className={`team-content ${activeTeam === "aus-team" ? "" : "hidden"}`}>
                                    <p>I am Afg Team</p>
                                </div>

                                <div id="south-team" className={`team-content ${activeTeam === "south-team" ? "" : "hidden"}`}>
                                    <div class="max-w-7xl mx-auto bg-white rounded-lg p-6">
                                        <div class="flex items-center space-x-4 mb-6">
                                            <img src="/assets/img/flag/b-5.png" alt="South Africa Flag" class="h-[45px] rounded-full" />
                                            <h1 class="text-[16px] font-semibold text-gray-800">South Africa Women <span
                                                class="text-gray-500">(15 players)</span></h1>
                                        </div>


                                        <div class="space-y-6">

                                            <div>
                                                <h2
                                                    class="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    Batsman</h2>
                                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-7.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-blue-500 ">L Wolvaardt<span
                                                            class="text-blue-500">(c)</span></h3>
                                                        <p class="text-xs text-gray-600">Batsman</p>
                                                    </div>

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-8.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">T Brits</h3>
                                                        <p class="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-9.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-blue-500">M Ridder<span
                                                            class="text-blue-500">(wk)</span></h3>
                                                        <p class="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-10.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">S Jafta<span
                                                            class="text-blue-500">(wk)</span></h3>
                                                        <p class="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div>
                                                <h2
                                                    class="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    Bowler</h2>
                                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-11.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                class="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">A Hlubi</h3>
                                                        <p class="text-xs text-gray-600">Bowler</p>
                                                    </div>

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-12.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                class="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">A Khaka</h3>
                                                        <p class="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-13.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                class="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">N Mlaba</h3>
                                                        <p class="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-14.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                class="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">T Sekhukhune</h3>
                                                        <p class="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div>
                                                <h2
                                                    class="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    All-Rounder</h2>
                                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-15.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">A Bosch</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>

                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-16.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">N Klerk</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-17.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">A Dercksen</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-18.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-19.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-20.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div class="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div class="relative">
                                                            <img src="/assets/img/player/g-21.png" alt="Player Image"
                                                                class="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                class="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 class="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p class="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-lg bg-[#ffffff] p-4 mt-4">
                                    <h3 class="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        News
                                    </h3>

                                    <div class="border-t-[1px] border-[#E4E9F0]"></div>

                                    <div class="lg:grid grid-cols-12 gap-4 mt-4">


                                        <div class="col-span-6 border-r-[1px] border-[#E7F2F4] pr-[16px]">
                                            <img src="/assets/img/team-1.png" alt="Main news"
                                                class="rounded-lg w-full h-48 object-cover mb-3" />
                                            <h3 class="text-1xl font-semibold mb-1">Live - Jagadeesan hits a century; Haryana
                                                trounce</h3>
                                            <p class="text-gray-500 font-normal">
                                                India will go into the home Test series against New Zealand with pretty much the
                                                same squad that took on Bangladesh in September - India's last red-ball action
                                                ahead
                                                of the five-Test...
                                            </p>

                                            <div class="border-l-[1px] border-[#E7F2F4]"></div>

                                        </div>



                                        <div class="col-span-6">

                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-2.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">Women's T20 World Cup, 2nd
                                                        Semifinal | WI-W Vs NZ-W Playing 11 Prediction</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-3.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">AUS-W Vs SA-W Highlights: Anneke
                                                        Bosch Overpowers Australia To Guide South Africa.</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div class="flex gap-3 my-3">
                                                <img src="/assets/img/team-4.png" alt="News thumbnail" class="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 class="text-[13px] font-semibold mb-2">WI-W vs NZ-W Dream11 Prediction
                                                        Today Match, Fantasy Cricket Tips, Pitch Report</h4>
                                                    <p class="text-[12px] text-gray-500 flex items-center"><span
                                                        class="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> P Bhattachar <span class="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                class="size-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Overs Tab --> */}
                    <div id="pointstable" className={`tab-content ${activeTab === 'pointstable' ? '' : 'hidden'}`}>jhds</div>
                    {/* <!-- Points Table Tab --> */}
                    <div id="news" className={`tab-content ${activeTab === 'news' ? '' : 'hidden'}`}>
                        <div class="rounded-lg py-4 px-4 bg-[#ffffff] mb-4">
                            <div class="lg:grid grid-cols-12 gap-4">
                                <div class="col-span-6 ">
                                    <img src="/assets/img/team-1.png" alt="Main news" class="rounded-lg w-full h-48 object-cover mb-3" />
                                </div>
                                <div class="col-span-6">
                                    <p class="text-gray-500 font-normal text-[13px] mb-2 flex items-center">By <span
                                        class="ml-2 pr-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                            viewBox="0 0 48 48">
                                            <polygon fill="#42a5f5"
                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                            </polygon>
                                            <polygon fill="#fff"
                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                            </polygon>
                                        </svg>
                                    </span> Uc Team <span class="ml-2 pr-[1px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-3">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                </path>
                                            </svg>
                                        </span> October 9, 2024</p>
                                    <h3 class="text-1xl font-semibold mb-1" style={{ lineHeight: "21px" }}>Live - Jagadeesan hits
                                        a century; Haryana trounce
                                    </h3>
                                    <p class="text-gray-500 font-normal">India will go into the home Test series
                                        against New Zealand with pretty much the same squad that took on Bangladesh in September
                                        - India's last red-ball action ahead of the five-Test...</p>
                                    <p class="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">Read
                                        more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                                        </svg>
                                    </p>
                                </div>
                            </div>


                            <div class="lg:grid grid-cols-12 gap-4">

                                <div class="col-span-6">
                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-1.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">Action ahead of the five-Test
                                                series in Australia to close out this year.into the home Test series
                                                against</h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024</p>
                                        </div>
                                    </div>

                                    <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-2.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">Star South African spinner to opt
                                                central contract this is cricket
                                            </h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024
                                            </p>
                                        </div>
                                    </div>

                                    <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-3.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">After a campaign that never
                                                really took off, they have some reflecting to do.
                                            </h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-6">
                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-1.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">Action ahead of the five-Test
                                                series in Australia to close out this year.into the home Test series
                                                against</h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024</p>
                                        </div>
                                    </div>

                                    <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-2.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">Star South African spinner to opt
                                                central contract this is cricket
                                            </h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024
                                            </p>
                                        </div>
                                    </div>

                                    <div class="border-t-[1px] border-[#E7F2F4]"></div>

                                    <div class="flex gap-3 my-5">
                                        <img src="/assets/img/flag/p-3.png" alt="News thumbnail" class="rounded-lg h-[90px]" />
                                        <div>
                                            <h4 class="text-[13px] font-semibold mb-2">After a campaign that never
                                                really took off, they have some reflecting to do.
                                            </h4>
                                            <p class="text-[12px] text-gray-500 flex items-center">By <span
                                                class="ml-2 pr-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                    height="15" viewBox="0 0 48 48">
                                                    <polygon fill="#42a5f5"
                                                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                    </polygon>
                                                    <polygon fill="#fff"
                                                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                    </polygon>
                                                </svg>
                                            </span> Uc Team <span class="ml-2 pr-[1px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                        </path>
                                                    </svg>
                                                </span> October 9, 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div
                                class="text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] pt-2 underline">
                                More from News <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </div>



                        </div>
                    </div>
                    {/* <!-- Live Stats Tab --> */}
                    <div id="stats" className={`tab-content ${activeTab === 'stats' ? '' : 'hidden'}`}>
                        <div className="md:grid grid-cols-12 gap-4">
                            <div className="lg:col-span-3 md:col-span-4">
                                <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                    <div className="py-2 mb-2">
                                        <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                                            Batting
                                        </h3>
                                    </div>
                                    <div id="team-buttons" className="">
                                        <button
                                            // className="state-btn new-class border-b border-t px-2 py-3 w-full font-medium active text-left "
                                            // data-target="most-runs"
                                            className={`state-btn new-class border-b ${activeStats === "most-runs" ? "border-t" : ""} px-2 py-3 w-full font-medium ${activeStats === "most-runs" ? "active" : ""} text-left ${activeStats === "most-runs" ? "text-[#394351] bg-[#ecf2fd] rounded-md text-[#1a80f8]" : ""}`}
                                            onClick={() => handleStatsChange("most-runs")}
                                        >
                                            Most Runs
                                        </button>
                                        <button
                                            className={`state-btn new-class border-b ${activeStats === "highest-scores" ? "border-t" : ""} px-2 py-3 w-full font-medium ${activeStats === "highest-scores" ? "active" : ""} text-left ${activeStats === "highest-scores" ? "text-[#394351] bg-[#ecf2fd] rounded-md text-[#1a80f8]" : ""}`}
                                            onClick={() => handleStatsChange("highest-scores")}
                                        // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                        // data-target="highest-scores"
                                        >
                                            Highest Scores
                                        </button>
                                        <button
                                            // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            // data-target="batting-average"
                                            className={`state-btn new-class border-b ${activeStats === "batting-average" ? "border-t" : ""} px-2 py-3 w-full font-medium ${activeStats === "batting-average" ? "active" : ""} text-left ${activeStats === "batting-average" ? "text-[#394351] bg-[#ecf2fd] rounded-md text-[#1a80f8]" : ""}`}
                                            onClick={() => handleStatsChange("batting-average")}
                                        >
                                            Best Batting Average
                                        </button>
                                        <button
                                            // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            // data-target="state-team"
                                            className={`state-btn new-class border-b ${activeStats === "state-team" ? "border-t" : ""} px-2 py-3 w-full font-medium ${activeStats === "state-team" ? "active" : ""} text-left ${activeStats === "state-team" ? "text-[#394351] bg-[#ecf2fd] rounded-md text-[#1a80f8]" : ""}`}
                                            onClick={() => handleStatsChange("state-team")}
                                        >
                                            Best Batting Strike Rate
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            data-target="state-team"
                                        >
                                            Most Hundreds
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left "
                                            data-target="state-team"
                                        >
                                            Most Fifties
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left "
                                            data-target="state-team"
                                        >
                                            Most Fours
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium text-left "
                                            data-target="state-team"
                                        >
                                            Most Sixes
                                        </button>
                                        <button
                                            className="state-btn new-class px-2 py-3 w-full font-medium text-left "
                                            data-target="state-team"
                                        >
                                            Most Nineties
                                        </button>
                                    </div>
                                </div>
                                <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                    <div className="py-2 mb-2">
                                        <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                                            Bowler
                                        </h3>
                                    </div>
                                    <div id="team-buttons" className="">
                                        <button
                                            className="state-btn new-class border-b border-t px-2 py-3 w-full font-medium active text-left "
                                            data-target="most-2"
                                        >
                                            Most Wickets
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            data-target="highest-scores"
                                        >
                                            Best Bowling Average
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            data-target="batting-average"
                                        >
                                            Best Bowling
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            data-target="state-team"
                                        >
                                            Most 5 Wickets Haul
                                        </button>
                                        <button
                                            className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                            data-target="state-team"
                                        >
                                            Best Economy
                                        </button>
                                        <button
                                            className="state-btn new-class px-2 py-3 w-full font-medium text-left "
                                            data-target="state-team"
                                        >
                                            Best Bowling Strike Rate
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-9 md:col-span-8">
                                <div id="most-runs" className={`state-content ${activeStats === "most-runs" ? "" : "hidden"}`} >
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
                                                                    Virat Kohli
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                                                    Rohit Sharma
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
                                <div id="highest-scores" className={`state-content ${activeStats === "highest-scores" ? "" : "hidden"}`}>
                                    sdfuysdfytsd
                                </div>
                                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        News
                                    </h3>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="lg:grid grid-cols-12 gap-4 mt-4">
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
                        </div>
                    </div>
                    {/* <!-- Stadiums Tab --> */}
                    <div id="stadiums" className={`tab-content ${activeTab === 'stadiums' ? '' : 'hidden'}`}>dfghjk</div>
                </div>
            </section>
        </Layout>
    )
}

export default KKRSeries