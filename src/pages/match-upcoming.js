import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const MatchUpcoming = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [comparisonTab, setComparisonTab] = useState('cust-box-click-overall1');
    const [playingTab, setPlayingTab] = useState('cust-box-click-india');
    const [activeTeam, setActiveTeam] = useState("south-team");
    const [activeStats, setActiveStats] = useState("most-runs");
    const [activeRecent, setActiveRecent] = useState("cust-box-click-mga");

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleComparisonTabClick = (tab) => {
        setComparisonTab(tab);
    };

    const handlePlayingTabClick = (tab) => {
        setPlayingTab(tab);
    };

    const handleTeamChange = (team) => {
        setActiveTeam(team);
    };
    const handleStatsChange = (team) => {
        setActiveStats(team);
    };

    const handleRecentChange = (team) => {
        setActiveRecent(team);
    };



    return (
        <Layout>
            <section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
                <div className="lg:w-[1000px] mx-auto">
                    <div className="md:flex justify-between items-center md:py-0 py-4">
                        <div className=" text-1xl text-[#FF912C] font-bold uppercase w-full">
                            <span className="h-[10px] w-[10px] inline-block	bg-[#FF912C] rounded-full" />
                            upcoming
                        </div>
                        <div className="text-[#8192B4] font-normal w-full text-1xl md:text-center md:mx-0 my-3">
                            Bangladesh in India August,&nbsp;3rd Test
                        </div>
                        <div className="flex text-[#8192B4] text-1xl font-normal w-full md:justify-end md:justify-start">
                            <img src="/assets/img/clander.png" className="mr-2" alt="" />
                            1-5 oct 2024
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F01A] h-48">
                    <div className="lg:w-[1000px] mx-auto md:py-8 tracking-[1px]">
                        <div className="flex py-8 justify-between items-center">
                            <div className="flex flex-col md:flex-row text-[#FF912C] font-bold uppercase  md:items-center items-start w-full">
                                <img
                                    className="md:h-[42px] md:w-[42px] h-[30px] w-[30px]"
                                    src="/assets/img/flg-1.png"
                                    alt="ind"
                                />
                                <p className="text-[#BDCCECA8] md:mx-3 mx-0 md:text-[19px] text-[14px] font-semibold uppercase">
                                    IND
                                </p>
                            </div>
                            <div className="text-[#8192B4] font-normal text-center w-full text-center">
                                <p className="text-[#C1CEEA] text-1xl">7:00 PM</p>
                                <p className="text-[#FFBD71] md:text-[24px] text-[16px] font-semibold">
                                    1 October
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center items-end text-[#8192B4] font-normal w-full justify-end">
                                <p className="text-[#BDCCECA8] md:block hidden md:text-[19px] text-[14px] md:mx-3 mx-0 font-semibold uppercase">
                                    BAN
                                </p>
                                <img
                                    src="/assets/img/ban.png"
                                    className="md:h-[42px] md:w-[42px] h-[30px] w-[30px]"
                                    alt="ban"
                                />
                                <p className="text-[#BDCCECA8] md:hidden md:text-[19px] text-[14px] md:mx-3 mx-0 font-semibold uppercase">
                                    BAN
                                </p>
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
                                //  onClick={() => handleTabClick('info')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'info' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            // onclick="handleTabClick(event, 'info')"
                            // className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                More Info
                            </button>
                        </Link>
                        <Link href="/match-live-now">
                            <button
                                // onClick={() => handleTabClick('live')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'live' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            // onclick="handleTabClick(event, 'live')"
                            // className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="/match-scorecard">
                            <button
                                // onClick={() => handleTabClick('scorecard')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'scorecard' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            // onclick="handleTabClick(event, 'scorecard')"
                            // className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Scorecard
                            </button>
                        </Link>
                        <button
                            onClick={() => handleTabClick('squads')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'squads' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                        // onclick="handleTabClick(event, 'squads')"
                        // className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Squads
                        </button>
                        <button
                            onClick={() => handleTabClick('points')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'points' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                        // onclick="handleTabClick(event, 'points')"
                        // className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Points Table
                        </button>
                        <button
                            onClick={() => handleTabClick('stats')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'stats' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                        // onclick="handleTabClick(event, 'stats')"
                        // className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Stats
                        </button>
                        <button
                            onClick={() => handleTabClick('Fantasy')}
                            className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'Fantasy' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                        // onclick="handleTabClick(event, 'Fantasy')"
                        // className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Fantasy Tips
                        </button>
                    </div>
                </div>
                <div id="tab-content">
                    <div id="info" className={`tab-content ${activeTab === 'info' ? '' : 'hidden'}`}>
                        <div className="md:grid grid-cols-12 gap-4">
                            {/* Match Detail */}
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="rounded-lg bg-white">
                                    <div className="p-4">
                                        <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Match Detail
                                        </h3>
                                        <div className="border-t border-[#E4E9F0]" />
                                        {/* Responsive Grid Section */}
                                        <div className="grid md:gap-6 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 px-2">
                                            <div>
                                                <h2 className="text-[15px] font-medium">Series :</h2>
                                                <p className="font-normal text-[#586577]">
                                                    Bangladesh tour of India
                                                </p>
                                            </div>
                                            <div>
                                                <h2 className="text-[15px] font-medium">Date :</h2>
                                                <p className="font-normal text-[#586577]">
                                                    27 Sep 2024, Fri, 9:30 AM IST
                                                </p>
                                            </div>
                                            <div>
                                                <h2 className="text-[15px] font-medium">Stadium :</h2>
                                                <p className="font-normal text-[#586577]">
                                                    IND won the toss &amp; elected to bowl
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-t border-[#E4E9F0]" />
                                        {/* Responsive Grid Section */}
                                        <div className="grid md:gap-6 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 px-2">
                                            <div>
                                                <h2 className="text-[15px] font-medium">Third Umpire :</h2>
                                                <p className="font-normal text-[#586577]">Sue Redfern</p>
                                            </div>
                                            <div>
                                                <h2 className="text-[15px] font-medium">On-field Umpire :</h2>
                                                <p className="font-normal text-[#586577]">
                                                    Claire Polosak, Lauren Agenbag
                                                </p>
                                            </div>
                                            <div>
                                                <h2 className="text-[15px] font-medium">Referee :</h2>
                                                <p className="font-normal text-[#586577]">GS Lakshmi</p>
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
                                                    // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                    // onclick="showCustomBox(this, 'cust-box-click-overall1')"
                                                    onClick={() => handleComparisonTabClick('cust-box-click-overall1')}
                                                    className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${comparisonTab === 'cust-box-click-overall1' ? 'bg-[#081736] text-white' : ' bg-[#ffffff] text-[#6A7586]'}`}
                                                >
                                                    <span>Overall</span>
                                                </button>
                                                <button
                                                    // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                    // onclick="showCustomBox(this, 'cust-box-click-onvenue1')"
                                                    onClick={() => handleComparisonTabClick('cust-box-click-onvenue1')}
                                                    className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${comparisonTab === 'cust-box-click-onvenue1' ? 'bg-[#081736] text-white' : ' bg-[#ffffff] text-[#6A7586]'}`}
                                                >
                                                    <span>On Venue</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className={`cust-box-click-content cust-box-click-overall1 mt-4 ${comparisonTab === 'cust-box-click-overall1' ? "" : "hidden"}`}>
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
                                        <div className={`cust-box-click-content cust-box-click-onvenue1 mt-4 ${comparisonTab === 'cust-box-click-onvenue1' ? "" : "hidden"}`}>
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
                                            <div className="bg-[#B7132B] h-[8px] mr-2 mb-2">
                                                <div
                                                    className="bg-[#13b76dbd] h-[8px]"
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
                                        Recent Matches on Venue
                                    </h3>
                                    {/* Recent Matches on Venue desktop view  */}
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="hidden lg:block">
                                        <div className="py-4 flex justify-between items-center">
                                            <div className="font-medium	w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/flag/18.png"
                                                                className="h-[24px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <span className="text-[#909090]">AUS</span>
                                                        </div>
                                                        <p className="">274/10 &amp; 170/10</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#909090] text-[12px] font-normal">
                                                    1st test,Duleep Thropy 2024
                                                </p>
                                            </div>
                                            <div className="font-medium text-right w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2 font-medium	justify-end">
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
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <div className=" font-medium	w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/flag/18.png"
                                                                className="h-[24px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <span className="text-[#909090]">AUS</span>
                                                        </div>
                                                        <p className="">274/10 &amp; 170/10</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" font-semibold text-center w-full">
                                                <p className=" text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#909090] text-[12px] font-normal">
                                                    1st test,Duleep Thropy 2024
                                                </p>
                                            </div>
                                            <div className="font-medium text-right w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2 font-medium	justify-end">
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
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <div className=" font-medium	w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[24px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p className="">548/10 &amp; 170/10</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#FF9C12] uppercase">up won</p>
                                                <p className="text-[#909090] text-[12px] font-normal">
                                                    11st test,Ranji Trophy 2024
                                                </p>
                                            </div>
                                            <div className="font-medium text-right w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2 font-medium	justify-end">
                                                        <p>318/10 &amp; 190/10</p>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="text-[#909090]">ASM</span>
                                                            <img src="/assets/img/asm.png" className="h-[24px]" alt="asm" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <div className=" font-medium	w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[24px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p className="">253/10 &amp; 548/10</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" font-semibold text-center w-full">
                                                <p className=" text-[#FF9C12] uppercase">up won</p>
                                                <p className="text-[#909090] text-[12px] font-normal">
                                                    12st test,Ranji Trophy 2024
                                                </p>
                                            </div>
                                            <div className="font-medium text-right w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2 font-medium	justify-end">
                                                        <p>417/10 &amp; 264/10</p>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="text-[#909090]">ASM</span>
                                                            <img src="/assets/img/asm.png" className="h-[24px]" alt="asm" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <div className=" font-medium w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[24px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p className="">274/10 &amp; 170/10</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" font-semibold text-center w-full">
                                                <p className=" text-[#FF9C12] uppercase">up won</p>
                                                <p className="text-[#909090] text-[12px] font-normal">
                                                    13st test,Ranji Trophy 2024
                                                </p>
                                            </div>
                                            <div className="font-medium text-right w-full">
                                                <a href="#">
                                                    <div className="flex items-center space-x-2 font-medium	justify-end">
                                                        <p>172/10 &amp; 135/10</p>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="text-[#909090]">UKT</span>
                                                            <img src="/assets/img/utk.png" className="h-[24px]" alt="ukt" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Recent Matches on Venue responsive view view  */}
                                    <div className="lg:hidden">
                                        <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p className="text-[#909090] text-[12px] mb-4 font-normal">
                                                1st test,Duleep Thropy 2024
                                            </p>
                                            <div className="flex justify-between items-center">
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
                                                            <p>280/10 &amp; 190/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold text-right">
                                                    <p className="text-[#3D4DCF]">IND Won</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p className="text-[#909090] text-[12px] mb-4 font-normal">
                                                1st test,Duleep Thropy 2024
                                            </p>
                                            <div className="flex justify-between items-center">
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
                                                            <p>280/10 &amp; 190/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold text-right">
                                                    <p className="text-[#3D4DCF]">IND Won</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p className="text-[#909090] text-[12px] mb-4 font-normal">
                                                11st test,Ranji Trophy 2024
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="">
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[21px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p>548/10 &amp; 170/10</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-1">
                                                                <img
                                                                    src="/assets/img/asm.png"
                                                                    className="h-[18px]"
                                                                    alt="asm"
                                                                />
                                                                <span className="text-[#909090]">ASM</span>
                                                            </div>
                                                            <p>318/10 &amp; 190/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold text-right">
                                                    <p className="text-[#FF9C12] uppercase">up won</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p className="text-[#909090] text-[12px] mb-4 font-normal">
                                                12st test,Ranji Trophy 2024
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="">
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[21px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p>253/10 &amp; 548/10</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-1">
                                                                <img
                                                                    src="/assets/img/asm.png"
                                                                    className="h-[18px]"
                                                                    alt="asm"
                                                                />
                                                                <span className="text-[#909090]">ASM</span>
                                                            </div>
                                                            <p>417/10 &amp; 264/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold text-right">
                                                    <p className="text-[#FF9C12] uppercase">up won</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                            <p className="text-[#909090] text-[12px] mb-4 font-normal">
                                                13st test,Ranji Trophy 2024
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="">
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src="/assets/img/up.png"
                                                                className="h-[21px] rounded-full"
                                                                alt="up"
                                                            />
                                                            <span className="text-[#909090]">UP</span>
                                                        </div>
                                                        <p>274/10 &amp; 170/10</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-1">
                                                                <img
                                                                    src="/assets/img/asm.png"
                                                                    className="h-[18px]"
                                                                    alt="asm"
                                                                />
                                                                <span className="text-[#909090]">ASM</span>
                                                            </div>
                                                            <p>172/10 &amp; 135/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className=" font-semibold text-right">
                                                    <p className="text-[#FF9C12] uppercase">up won</p>
                                                </div>
                                            </div>
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
                                                // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                // onclick="showCustomBox(this, 'cust-box-click-india')"
                                                onClick={() => handlePlayingTabClick('cust-box-click-india')}
                                                className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${playingTab === 'cust-box-click-india' ? 'bg-[#081736] text-white' : ' bg-[#ffffff] text-[#6A7586]'}`}
                                            >
                                                <span>India</span>
                                            </button>
                                            <button
                                                // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                // onclick="showCustomBox(this, 'cust-box-click-bangladesh')"
                                                onClick={() => handlePlayingTabClick('cust-box-click-bangladesh')}
                                                className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${playingTab === 'cust-box-click-bangladesh' ? 'bg-[#081736] text-white' : ' bg-[#ffffff] text-[#6A7586]'}`}
                                            >
                                                <span>Bangladesh</span>
                                            </button>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className={`cust-box-click-content cust-box-click-india mt-4 ${playingTab === 'cust-box-click-india' ? "" : "hidden"}`}>
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
                                        <div className={`cust-box-click-content cust-box-click-bangladesh mt-4 hidden${playingTab === 'cust-box-click-bangladesh' ? "" : "hidden"} `}>
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
                    <div id="live" className={`tab-content ${activeTab === 'live' ? '' : 'hidden'}`}>
                        {" "}
                        Match not started, stay tuned.{" "}
                    </div>
                    <div id="scorecard" className={`tab-content ${activeTab === 'scorecard' ? '' : 'hidden'}`}>
                        {" "}
                        Scorecard available after match starts.{" "}
                    </div>
                    <div id="squads" className={`tab-content ${activeTab === 'squads' ? '' : 'hidden'}`}>
                        <div className="py-2 mb-2">
                            <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                WT20 World Cup 2024 Squads
                            </h3>
                        </div>



                        <div className="md:grid grid-cols-12 gap-4">
                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                    <div id="team-buttons" className="">

                                        <button
                                            // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "aus-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("aus-team")}
                                        // data-target="aus-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Afghanistan Flag" />
                                            Australia-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "ind-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("ind-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="ind-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            India-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "eng-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("eng-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="eng-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            England-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "south-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("south-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center active"
                                        // data-target="south-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            South Africa-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "nz-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("nz-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="nz-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            New Zealand-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "sri-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("sri-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="sri-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            Sri Lanka-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "west-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("west-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="west-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            West Indies-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "ban-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("ban-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="ban-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            Bangladesh-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "pak-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("pak-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="pak-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            Pakistan-W
                                        </button>
                                        <button
                                            className={`team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center ${activeTeam === "Scot-team" ? "bg-[#ecf2fd] rounded-md text-[#1a80f8] active" : ""}`}
                                            onClick={() => handleTeamChange("Scot-team")}
                                        // className="team-btn border-b px-2 py-3 w-full text-[#394351] font-medium flex items-center"
                                        // data-target="Scot-team"
                                        >
                                            <img src="/assets/img/flag/1.png" className="mr-3" alt="Bangladesh Flag" />
                                            Scotland-W
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 md:col-span-7">
                                <div id="aus-team" className={`team-content ${activeTeam === "aus-team" ? "" : "hidden"}`}>
                                    <p>I am Afg Team</p>
                                </div>

                                <div id="south-team" className={`team-content ${activeTeam === "south-team" ? "" : "hidden"}`}>
                                    <div className="max-w-7xl mx-auto bg-white rounded-lg p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <img src="/assets/img/flag/b-5.png" alt="South Africa Flag" className="h-[45px] rounded-full" />
                                            <h1 className="text-[16px] font-semibold text-gray-800">South Africa Women <span
                                                className="text-gray-500">(15 players)</span></h1>
                                        </div>


                                        <div className="space-y-6">

                                            <div>
                                                <h2
                                                    className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    Batsman</h2>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-7.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-blue-500 ">L Wolvaardt<span
                                                            className="text-blue-500">(c)</span></h3>
                                                        <p className="text-xs text-gray-600">Batsman</p>
                                                    </div>

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-8.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">T Brits</h3>
                                                        <p className="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-9.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-blue-500">M Ridder<span
                                                            className="text-blue-500">(wk)</span></h3>
                                                        <p className="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-10.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">S Jafta<span
                                                            className="text-blue-500">(wk)</span></h3>
                                                        <p className="text-xs text-gray-600">Batsman</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div>
                                                <h2
                                                    className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    Bowler</h2>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-11.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">A Hlubi</h3>
                                                        <p className="text-xs text-gray-600">Bowler</p>
                                                    </div>

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-12.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">A Khaka</h3>
                                                        <p className="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-13.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">N Mlaba</h3>
                                                        <p className="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-14.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/ball.png"
                                                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">T Sekhukhune</h3>
                                                        <p className="text-xs text-gray-600">Bowler</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div>
                                                <h2
                                                    className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                                                    All-Rounder</h2>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-15.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">A Bosch</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>

                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-16.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">N Klerk</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-17.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">A Dercksen</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-18.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-19.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-20.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                    <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                                                        <div className="relative">
                                                            <img src="/assets/img/player/g-21.png" alt="Player Image"
                                                                className="w-16 h-16 mx-auto rounded-full mb-2" />
                                                            <img src="/assets/img/player/bat-ball.png"
                                                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                                                alt="" />
                                                        </div>
                                                        <h3 className="text-sm font-semibold text-gray-800">M Kapp</h3>
                                                        <p className="text-xs text-gray-600">All-Rounder</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] p-4 mt-4">
                                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        News
                                    </h3>

                                    <div className="border-t-[1px] border-[#E4E9F0]"></div>

                                    <div className="lg:grid grid-cols-12 gap-4 mt-4">


                                        <div className="col-span-6 border-r-[1px] border-[#E7F2F4] pr-[16px]">
                                            <img src="/assets/img/team-1.png" alt="Main news"
                                                className="rounded-lg w-full h-48 object-cover mb-3" />
                                            <h3 className="text-1xl font-semibold mb-1">Live - Jagadeesan hits a century; Haryana
                                                trounce</h3>
                                            <p className="text-gray-500 font-normal">
                                                India will go into the home Test series against New Zealand with pretty much the
                                                same squad that took on Bangladesh in September - India's last red-ball action
                                                ahead
                                                of the five-Test...
                                            </p>

                                            <div className="border-l-[1px] border-[#E7F2F4]"></div>

                                        </div>



                                        <div className="col-span-6">

                                            <div className="flex gap-3 my-3">
                                                <img src="/assets/img/team-2.png" alt="News thumbnail" className="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 className="text-[13px] font-semibold mb-2">Women's T20 World Cup, 2nd
                                                        Semifinal | WI-W Vs NZ-W Playing 11 Prediction</h4>
                                                    <p className="text-[12px] text-gray-500 flex items-center"><span
                                                        className="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span className="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                                className="size-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div className="flex gap-3 my-3">
                                                <img src="/assets/img/team-3.png" alt="News thumbnail" className="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 className="text-[13px] font-semibold mb-2">AUS-W Vs SA-W Highlights: Anneke
                                                        Bosch Overpowers Australia To Guide South Africa.</h4>
                                                    <p className="text-[12px] text-gray-500 flex items-center"><span
                                                        className="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> Akshita Patel <span className="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                                className="size-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                                                                </path>
                                                            </svg>
                                                        </span> October 9, 2024
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-t-[1px] border-[#E7F2F4]"></div>

                                            <div className="flex gap-3 my-3">
                                                <img src="/assets/img/team-4.png" alt="News thumbnail" className="rounded-lg h-[77px]" />
                                                <div>
                                                    <h4 className="text-[13px] font-semibold mb-2">WI-W vs NZ-W Dream11 Prediction
                                                        Today Match, Fantasy Cricket Tips, Pitch Report</h4>
                                                    <p className="text-[12px] text-gray-500 flex items-center"><span
                                                        className="ml-2 pr-[1px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                                                            height="15" viewBox="0 0 48 48">
                                                            <polygon fill="#42a5f5"
                                                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                                                            </polygon>
                                                            <polygon fill="#fff"
                                                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                                                            </polygon>
                                                        </svg>
                                                    </span> P Bhattachar <span className="ml-2 pr-[1px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                                className="size-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
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
                    <div id="points" className={`tab-content ${activeTab === 'points' ? '' : 'hidden'}`}>
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
                                                    <img src="/assets/img/6.png" alt="" />
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
                    {/* <div id="points" className={`tab-content ${activeTab === 'points' ? '' : 'hidden'}`}>
                        {" "}
                        hello32ghfg{" "}
                    </div> */}
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

                            </div>
                        </div>
                    </div>
                    {/* Stadiums Tab */}
                    {/* <div id="squads" className={`tab-content ${activeTab === 'squads' ? '' : 'hidden'}`}>
                        This is Squad content
                    </div> */}
                    <div id="Fantasy" className={`tab-content ${activeTab === 'Fantasy' ? '' : 'hidden'}`}>
                        <div className="md:grid grid-cols-12 gap-4">
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                        Playing XI
                                    </h3>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                    <div className="flex justify-between items-center pb-4">
                                        <div className="font-bold flex items-center">
                                            <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                            <p className="mx-2 text-1xl font-semibold">MSG</p>
                                        </div>
                                        <div className=" font-semibold">VS</div>
                                        <div className="font-bold flex items-center">
                                            <p className="mx-2 text-1xl font-semibold text-right">HAW</p>
                                            <img className="h-[30px]" src="/assets/img/flag/haw.png" alt="ban" />
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="border-t-[1px] border-[#eef5ff]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="border-t-[1px] border-[#eef5ff]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="border-t-[1px] border-[#eef5ff]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="border-t-[1px] border-[#eef5ff]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="border-t-[1px] border-[#eef5ff]" />
                                    <div className="flex justify-between items-center">
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div>-</div>
                                        <a href="#">
                                            <div className="flex items-center space-x-3 py-3">
                                                <div className="font-medium">
                                                    <h2 className="text-[15px]"> R sharma (c) </h2>
                                                    <p className="text-[#909090] font-normal">Batter</p>
                                                </div>
                                                <div>
                                                    <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="rounded-lg bg-[#ffffff] p-4">
                                        <h3 className="text-1xl font-semibold pl-[8px] border-l-[3px] border-[#1a80f8] mb-2">
                                            Recent Matches On Venue
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="mt-3 cust-box-click-container">
                                            <div className="flex items-center gap-3">


                                                <button
                                                    className={`cust-box-click-button font-medium px-5 py-1  ${activeRecent === "cust-box-click-mga" ? "bg-[#081736] text-white" : "bg-[#ffffff] text-[#6A7586]"} rounded-full `}
                                                    onClick={() => handleRecentChange("cust-box-click-mga")}
                                                // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                                // onclick="showCustomBox(this, 'cust-box-click-mga')"
                                                >
                                                    <span>MGA</span>
                                                </button>
                                                <button
                                                    className={`cust-box-click-button font-medium px-5 py-1 ${activeRecent === "cust-box-click-haw" ? "bg-[#081736] text-white" : "bg-[#ffffff] text-[#6A7586]"} rounded-full `}
                                                    onClick={() => handleRecentChange("cust-box-click-haw")}
                                                // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                // onclick="showCustomBox(this, 'cust-box-click-haw')"
                                                >
                                                    <span>HAW</span>
                                                </button>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-mga mt-4 ${activeRecent === "cust-box-click-mga" ? "" : "hidden"} `}>
                                                <div className="grid grid-cols-12 gap-4 cust-tp-pera-card-section">
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                        <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                            <div className="flex justify-between items-center pb-1">
                                                                <div>
                                                                    <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                    <p className="text-[#7B4C09] font-medium">
                                                                        Tue, 19 Oct - 09:30 AM
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="flex items-center justify-between py-3">
                                                                <a href="#">
                                                                    <div className="flex space-x-2 ">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <img
                                                                                src="/assets/img/flag/b-8.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="wiw"
                                                                            />
                                                                            <span className="text-[#909090]">IND</span>
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <p className="text-1xl font-semibold">120/8</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="text-gray-500 text-2xl font-semibold">
                                                                    ↔
                                                                </div>
                                                                <a href="#">
                                                                    <div className="flex space-x-2 justify-end">
                                                                        <div className="mt-1 text-end">
                                                                            <p className="text-1xl font-semibold">128/9</p>
                                                                            <p className="text-[#909090]">(20.0 overs)</p>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1 flex-col font-medium">
                                                                            <img
                                                                                src="/assets/img/flag/b-10.png"
                                                                                className="h-[30px] rounded-full"
                                                                                alt="nz"
                                                                            />
                                                                            <span className="text-[#909090]">BAN</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                                            <div className="text-center mt-3">
                                                                <a href="#">
                                                                    <p className="text-green-600 font-semibold">
                                                                        IND won by 7 Wicket
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 text-center flex justify-center">
                                                        <button className="cust-tp-pera-load-more text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] pt-2 underline">
                                                            Load More{" "}
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
                                                </div>
                                            </div>
                                            <div className={`cust-box-click-content cust-box-click-haw mt-4"  ${activeRecent === "cust-box-click-haw" ? "" : "hidden"}`}>
                                                HAW
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <div>
                                        <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                                            Team Form{" "}
                                            <span className="text-[#909090]">
                                                {" "}
                                                (Last 5 Matches, Most recent first){" "}
                                            </span>
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="md:px-2">
                                            <div className="performance-section">
                                                <div className="flex items-center justify-between my-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <img
                                                                src="/assets/img/flag/msg.png"
                                                                className="h-[25px]"
                                                                alt="msg"
                                                            />
                                                        </div>
                                                        <h3 className="text-1xl font-medium">MAG</h3>
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
                                                                <button className="arro-button" onClick={() => setShow(!show)}>
                                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-t-[1px] border-[#E4E9F0]" />
                                                <div className={`md:px-3 open-Performance-data ${show ? "" : "hidden"}`}>
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
                                            <div className="performance-section">
                                                <div className="mt-6">
                                                    <div className="flex items-center justify-between my-3">
                                                        <div className="flex items-center space-x-3">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/flag/haw.png"
                                                                    alt="haw"
                                                                    className="h-[25px]"
                                                                />
                                                            </div>
                                                            <h3 className="text-1xl font-medium">HAW</h3>
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
                                                                    <button className="arro-button" onClick={() => setShow1(!show1)}>
                                                                        <img src="/assets/img/arrow.png" alt="" />
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                </div>
                                                <div className={`md:px-3 open-Performance-data ${show1 ? "" : "hidden"}`}>
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
                                    <div className="">
                                        <div className="md:flex justify-between items-center  mb-3">
                                            <h3 className="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Team Comparison (Last 10 matches)
                                            </h3>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="">
                                            <div>
                                                <div className="py-4 flex justify-between items-center">
                                                    <div className="font-bold flex items-center">
                                                        <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                                        <p className="mx-2 text-1xl font-semibold">
                                                            MSG
                                                            <span className="text-[13px] text-[#9094b6] font-medium block">
                                                                vs all teams
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="font-bold flex items-center">
                                                        <p className="mx-2 text-1xl font-semibold text-right">
                                                            HAW
                                                            <span className="text-[13px] text-[#9094b6] font-medium block">
                                                                vs all teams
                                                            </span>
                                                        </p>
                                                        <img
                                                            className="h-[30px]"
                                                            src="/assets/img/flag/haw.png"
                                                            alt="ban"
                                                        />
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
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                        Playing XI
                                    </h3>
                                </div>
                                <div
                                    className="rounded-lg p-4 mb-4 flex items-center justify-between max-w-md mx-auto shadow-lg"
                                    style={{
                                        backgroundImage: 'url("/assets/img/bg-player.png")',
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className="text-center">
                                        <div className="relative">
                                            <img
                                                src="/assets/img/player/r1.png"
                                                alt="B Hassan"
                                                className="w-[48px] mx-auto"
                                            />
                                            <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                C
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium bg-white px-2 rounded-md">
                                            B Hassan
                                        </p>
                                        <p className="text-sm font-bold text-white">9.0</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="relative">
                                            <img
                                                src="/assets/img/player/r2.png"
                                                alt="A Hamzah"
                                                className="w-[48px] mx-auto"
                                            />
                                            <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                Vc
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium bg-[black] px-2 text-white rounded-md">
                                            A Hamzah
                                        </p>
                                        <p className="text-sm font-bold text-white">8.5</p>
                                    </div>
                                    <button
                                        className="bg-white text-black font-medium text-sm px-4 py-2 rounded-lg shadow"
                                        style={{ boxShadow: "0px 5px 0px 0px #000000" }}
                                    >
                                        Full Team
                                    </button>
                                </div>
                                <div
                                    className="rounded-lg p-4 mb-4 flex items-center justify-between max-w-md mx-auto shadow-lg"
                                    style={{
                                        backgroundImage: 'url("/assets/img/bg-player.png")',
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className="text-center">
                                        <div className="relative">
                                            <img
                                                src="/assets/img/player/r1.png"
                                                alt="B Hassan"
                                                className="w-[48px] mx-auto"
                                            />
                                            <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                C
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium bg-white px-2 rounded-md">
                                            B Hassan
                                        </p>
                                        <p className="text-sm font-bold text-white">9.0</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="relative">
                                            <img
                                                src="/assets/img/player/r2.png"
                                                alt="A Hamzah"
                                                className="w-[48px] mx-auto"
                                            />
                                            <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                Vc
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium bg-[black] px-2 text-white rounded-md">
                                            A Hamzah
                                        </p>
                                        <p className="text-sm font-bold text-white">8.5</p>
                                    </div>
                                    <button
                                        className="bg-white text-black font-medium text-sm px-4 py-2 rounded-lg"
                                        style={{ boxShadow: "0px 5px 0px 0px #000000" }}
                                    >
                                        Full Team
                                    </button>
                                </div>
                                <div className="py-2 mb-2">
                                    <h3 className="text-[15px] font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Head To Head{" "}
                                        <span className="text-[#909090]"> (Last 10 Matches) </span>
                                    </h3>
                                </div>
                                <div className="bg-[#ffffff] rounded-lg p-4 mb-2">
                                    <div className="flex justify-between items-center">
                                        <div className="font-bold flex items-center">
                                            <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                            <p className="mx-2 text-1xl font-semibold">MSG</p>
                                        </div>
                                        <div className=" font-normal text-center">
                                            <p className="text-[#D28505] text-[17px] font-semibold">
                                                0 <span className="text-[#009900]">- 0</span>
                                            </p>
                                        </div>
                                        <div className="font-bold flex items-center">
                                            <p className="mx-2 text-1xl font-semibold text-right">HAW</p>
                                            <img className="h-[30px]" src="/assets/img/flag/haw.png" alt="ban" />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2 mb-2">
                                    <h3 className="text-[15px] font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Venue Details
                                    </h3>
                                </div>
                                <div className="bg-[#ffffff] rounded-lg p-4 mb-4">
                                    <div className="">
                                        {/* Pitch Info */}
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">Pitch</p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">Spinning Pitch</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">
                                                    Batting Condition
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">High scoring</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">
                                                    Pace Bowling
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">Swing Favorable</p>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-2 flex justify-between items-center">
                                            <div className="">
                                                <p className="mx-2 text-[#586577] font-medium ">
                                                    Spin Bowling
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="mx-2 font-medium">Average</p>
                                            </div>
                                        </div>
                                        {/* Innings Stats */}
                                        <div className="bg-[#ebf2fa] rounded-lg mb-4">
                                            <div className="flex justify-between items-center text-center font-semibold text-sm">
                                                <div className="bg-[#dceafb] w-full py-2 rounded-tl-lg">
                                                    1st Inning
                                                </div>
                                                <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                                                <div className="bg-[#dceafb] w-full py-2 rounded-tr-lg">
                                                    2nd Inning
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-center p-4 text-sm">
                                                <div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg Runs
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">245</p>
                                                        </div>
                                                    </div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg Wkts
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">6</p>
                                                        </div>
                                                    </div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg SR
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">165.25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:block hidden h-[80px] border-l-[1px] border-[#d0d3d7]"></div>
                                                <div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg Runs
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">108</p>
                                                        </div>
                                                    </div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg Wkts
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">5</p>
                                                        </div>
                                                    </div>
                                                    <div className="pb-2 flex justify-between items-center">
                                                        <div className="">
                                                            <p className="mx-2 text-[#586577] font-medium ">
                                                                Avg SR
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="mx-2 font-medium">203.74</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Toss Info */}
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold mb-1">
                                                Toss winners opt to
                                            </p>
                                            <div className="flex items-center justify-between text-xs">
                                                <span>62% Bat First</span>
                                                <span>38% Bowl First</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full"
                                                    style={{ width: "62%" }}
                                                />
                                            </div>
                                        </div>
                                        {/* Batting Stats */}
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Team Batting First</p>
                                            <div className="flex items-center justify-between text-xs">
                                                <span>52% Wins</span>
                                                <span>48% Losses</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                <div
                                                    className="bg-[#B7132B] h-2 rounded-full"
                                                    style={{ width: "52%" }}
                                                />
                                            </div>
                                        </div>
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

export default MatchUpcoming