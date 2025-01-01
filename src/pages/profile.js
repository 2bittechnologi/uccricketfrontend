import Layout from '@/Components/Layout'
import React, { useState } from 'react'

const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [careerTab, setCareerTab] = useState('cust-box-click-batting');
    const [statsTab, setStatsTab] = useState('cust-box-click-batting');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCareerTabClick = (tab) => {
        setCareerTab(tab);
    };
    const handleStatsTabClick = (tab) => {
        setStatsTab(tab);
    };

    return (
        <Layout>

            <section
                className=" md:py-8 md:px-8 px-4 py-4"
                style={{ backgroundImage: "linear-gradient(to right, #0c3c5a, #7d7d7d)" }}
            >
                <div className="lg:w-[1000px] mx-auto text-white">
                    <div className="md:flex items-center md:space-x-8">
                        <div className="flex justify-center">
                            <img
                                src="/assets/img/player.png"
                                alt="Player Image"
                                className="h-[15.8125rem] rounded-full"
                            />
                        </div>
                        <div>
                            <div className="mb-4">
                                <h2 className="text-2xl font-medium mb-3">Suryakumar Yadav</h2>
                                <div className="lg:flex items-center lg:space-x-5">
                                    <div className="flex items-center space-x-2 md:mb-2 lg:mb-0 mb-0 ">
                                        <img src="/assets//assets/img/india.png" alt="" className="h-[1.5rem]" />
                                        <span>India - 37 yrs</span>
                                    </div>
                                    <div className="md:flex items-center md:space-x-2 m-0">
                                        <a href="#careerstats">
                                            <span className="flex items-center bg-[#E3E9FF12] hover:bg-[#a8bbff45] rounded-full py-[5px] px-[20px] my-2 md:my-0">
                                                <img
                                                    src="/assets/img/bat.png"
                                                    alt=""
                                                    className="h-[0.8125rem] mr-[0.375rem]"
                                                />{" "}
                                                Right Handed Batter
                                            </span>
                                        </a>
                                        <a href="#careerstats">
                                            <span className="flex items-center bg-[#E3E9FF12] hover:bg-[#a8bbff45] rounded-full py-[5px] px-[20px]	">
                                                <img
                                                    src="/assets/img/ball.png"
                                                    alt=""
                                                    className="h-[0.8125rem] mr-[0.375rem]"
                                                />{" "}
                                                Right Arm Medium Bowler
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:w-[1000px] md:mx-auto my-5 mx-2">
                <div className="">
                    <div id="tabs" className="my-4">
                        <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                            <button
                                //   onclick="handleTabClick(event, 'overview')"
                                //   className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                                onClick={() => handleTabClick('overview')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'overview' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            >
                                Overview
                            </button>
                            <button
                                //   onclick="handleTabClick(event, 'stats')"
                                //   className="font-medium py-2 px-3 whitespace-nowrap"
                                onClick={() => handleTabClick('stats')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'stats' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            >
                                Stats
                            </button>
                            <button
                                onClick={() => handleTabClick('news')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'news' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            //   onclick="handleTabClick(event, 'news')"
                            //   className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                News
                            </button>
                            <button
                                onClick={() => handleTabClick('photos')}
                                className={`font-medium py-2 px-3 whitespace-nowrap ${activeTab === 'photos' ? 'bg-[#1A80F8] text-white rounded-md' : ''}`}
                            //   onclick="handleTabClick(event, 'photos')"
                            //   className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Photos
                            </button>
                        </div>
                    </div>
                    <div id="tab-content">
                        <div id="overview" className={`tab-content ${activeTab === 'overview' ? '' : 'hidden'}`}>
                            <div className="md:grid grid-cols-12 gap-4">
                                {/* Tabs */}
                                <div className="lg:col-span-8 md:col-span-7">
                                    <div className="rounded-lg bg-white p-4 mb-4">
                                        <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            ICC Ranking
                                        </h3>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                            <div className="bg-[#f2f7ff] w-full  border-[1px] rounded-md">
                                                <h6 className=" px-6 py-1 font-semibold rounded-t-md bg-[#c7dcff] text-[14px]">
                                                    Batting
                                                </h6>
                                                <div className="flex font-semibold text-[#0F55A5] text-center px-6 justify-between space-x-4 my-2">
                                                    <p>
                                                        05 <br /> <span className=""> TEST </span>
                                                    </p>
                                                    <div className="border-solid border-l-[1px] border-gray-400" />
                                                    <p>
                                                        02 <br /> <span className=""> ODI</span>
                                                    </p>
                                                    <div className="border-solid border-l-[1px] border-gray-400" />
                                                    <p>
                                                        47 <br /> <span className=""> T20</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-[#f2f7ff] w-full border-[1px] rounded-lg">
                                                <h6 className="px-6 py-1 font-semibold rounded-t-md bg-[#c7dcff] text-[14px]">
                                                    Bowling
                                                </h6>
                                                <div className="flex px-6 font-semibold text-[#0F55A5] text-center justify-between space-x-4 mt-2">
                                                    <p>
                                                        154 <br /> <span className=""> TEST </span>
                                                    </p>
                                                    <div className="border-solid border-l-[1px] border-gray-400" />
                                                    <p>
                                                        328 <br /> <span className=""> ODI</span>
                                                    </p>
                                                    <div className="border-solid border-l-[1px] border-gray-400" />
                                                    <p>
                                                        799 <br /> <span className=""> T20</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg p-4 bg-[#ffffff]">
                                        <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Personal Information
                                        </h3>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-[13px]">
                                                <tbody>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Full Name
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            Suryakumar Yadav
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Date of Birth
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            April 30, 1987 (Bansod, Nagpur, Maharashtra)
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Age
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            37 Years, 5 Months, 24 Days
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Nationality
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">Indian</td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Birth Place
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            Mumbai, Maharashtra
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Height
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">1.8 m</td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Current Team(s)
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <a className="text-[#217AF7]" href="#">
                                                                Indian Cricket Team,Mumbai Indians
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Role
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">Batter</td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Batting Style
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            Right hand Bat
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Bowling Style
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            Right arm Medium, Right arm Offbreak
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            March 13, 2010
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Jersey No.
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">63</td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Family
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            Devisha Shetty (wife)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="cust-box-click-container">
                                        <div className="flex justify-between items-center pt-4 pb-2">
                                            <div id="careerstats">
                                                <h3 className="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                                    Career &amp; Stats
                                                </h3>
                                            </div>
                                            <div>
                                                <button
                                                    // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                                    // onclick="showCustomBox(this, 'cust-box-click-batting')"
                                                    onClick={() => handleCareerTabClick('cust-box-click-batting')}
                                                    className={`cust-box-click-button font-medium px-5 py-1 ${careerTab === 'cust-box-click-batting' ? 'bg-[#081736] text-white' : ''} rounded-full`}
                                                >
                                                    <span>Batting</span>
                                                </button>
                                                <button
                                                    // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                                    // onclick="showCustomBox(this, 'cust-box-click-bowling')"
                                                    onClick={() => handleCareerTabClick('cust-box-click-bowling')}
                                                    className={`cust-box-click-button font-medium px-5 py-1 ${careerTab === 'cust-box-click-bowling' ? 'bg-[#081736] text-white' : ''} rounded-full`}
                                                >
                                                    <span>Bowling</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`cust-box-click-content cust-box-click-batting ${careerTab === 'cust-box-click-batting' ? "" : "hidden"}`}>
                                            <div className="rounded-lg p-6 bg-[#ffffff]">
                                                <div className="md:flex items-center justify-between">
                                                    <h3 className="text-1xl font-medium mb-2">
                                                        Suryakumar Yadav Recent Form
                                                    </h3>
                                                    <div className="text-right">
                                                        <p className="text-[#1A80F8] font-semibold flex items-center text-[13px]">
                                                            Recent Form
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="size-3 ml-1"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                                />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="border-t-[1px] border-[#E7F2F4]" />
                                                <div className="cust-slider-container w-full overflow-hidden relative mt-4">
                                                    <div
                                                        className="cust-slider md:w-[25%] w-[55%] flex md:gap-3 gap-4 transition-transform duration-500 ease-in-out"
                                                        style={{ transform: "translateX(0%)" }}
                                                    >
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    7(14)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    MUM Vs MAH, First Class
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    75(35)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    IND Vs BAN, T20I
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    7(14)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    MUM Vs MAH, First Class
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    7(14)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    MUM Vs MAH, First Class
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    8(10)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    IND Vs BAN, T20I
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    29(14)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    IND Vs BAN, T20I
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    5(15)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    IND-B Vs IND-D, First Class
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="cust-slide w-full flex-shrink-0 rounded-lg border-[1px] border-[#ebebeb]">
                                                            <div className="bg-white p-4 text-center">
                                                                <p className="text-1xl text-[#1A80F8] font-semibold mb-2">
                                                                    16(10)
                                                                </p>
                                                                <p className="text-gray-500 font-medium text-[12px]">
                                                                    IND-B Vs IND-D, First Class
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Navigation Buttons */}
                                                    <div className="cust-slider-nav flex justify-between items-center">
                                                        <button
                                                            className="cust-prev-btn bg-[#ffffff] p-[7px] rounded-full border-2 
                                      absolute left-0 top-1/2 transform -translate-y-1/2 z-10
                                      "
                                                        >
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
                                                        <button
                                                            className="cust-next-btn bg-[#ffffff] p-[7px] rounded-full border-2 
                                      absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                                                        >
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
                                                <h3 className="text-1xl font-medium mt-4 mb-2">
                                                    Suryakumar Yadav Career Stats
                                                </h3>
                                                <div className="border-t-[1px] border-[#E7F2F4]" />
                                                <h3 className="text-[14px] font-normal mt-2 mb-1">Batting</h3>
                                                <div>
                                                    <div
                                                        className="relative overflow-x-auto  [&::-webkit-scrollbar] [&::-webkit-scrollbar]:h-[5px] 
                                  [&::-webkit-scrollbar-track]:bg-gray-100 
                                  [&::-webkit-scrollbar-thumb]:bg-[#DFE9F6] 
                                  dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
                                  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                                                    >
                                                        <table className="w-full text-[13px] text-left text-gray-500">
                                                            <thead className="border-b text-gray-700 bg-[#C3DBFF33]">
                                                                <tr>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-4 py-3 bg-[#C3DBFF33] font-semibold"
                                                                    >
                                                                        Format
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        Mat
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        Inns
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        Runs
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        Avg
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        4s
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        6s
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        SR
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        SR
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        SR
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        SR
                                                                    </th>
                                                                    <th scope="col" className="px-4 py-3 font-semibold">
                                                                        SR
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="text-xs">
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <th
                                                                        scope="row"
                                                                        className="px-4 py-4 font-medium text-gray-900 bg-[#C3DBFF33] whitespace-nowrap dark:text-white"
                                                                    >
                                                                        ODI"
                                                                    </th>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">123</td>
                                                                    <td className="px-4 py-4">45.50</td>
                                                                    <td className="px-4 py-4">9</td>
                                                                    <td className="px-4 py-4">0</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                </tr>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <th
                                                                        scope="row"
                                                                        className="px-4 py-4 font-medium text-gray-900 bg-[#C3DBFF33] whitespace-nowrap dark:text-white"
                                                                    >
                                                                        T20I
                                                                    </th>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">123</td>
                                                                    <td className="px-4 py-4">45.50</td>
                                                                    <td className="px-4 py-4">9</td>
                                                                    <td className="px-4 py-4">0</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                </tr>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <th
                                                                        scope="row"
                                                                        className="px-4 py-4 font-medium text-gray-900 bg-[#C3DBFF33] whitespace-nowrap dark:text-white"
                                                                    >
                                                                        TEST
                                                                    </th>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">123</td>
                                                                    <td className="px-4 py-4">45.50</td>
                                                                    <td className="px-4 py-4">9</td>
                                                                    <td className="px-4 py-4">0</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                </tr>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <th
                                                                        scope="row"
                                                                        className="px-4 py-4 font-medium text-gray-900 bg-[#C3DBFF33] whitespace-nowrap dark:text-white"
                                                                    >
                                                                        IPL
                                                                    </th>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">123</td>
                                                                    <td className="px-4 py-4">45.50</td>
                                                                    <td className="px-4 py-4">9</td>
                                                                    <td className="px-4 py-4">0</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                </tr>
                                                                <tr className="bg-white dark:bg-gray-800">
                                                                    <th
                                                                        scope="row"
                                                                        className="px-4 py-4 font-medium text-gray-900 bg-[#C3DBFF33] whitespace-nowrap dark:text-white"
                                                                    >
                                                                        WC ODI
                                                                    </th>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">5</td>
                                                                    <td className="px-4 py-4">123</td>
                                                                    <td className="px-4 py-4">45.50</td>
                                                                    <td className="px-4 py-4">9</td>
                                                                    <td className="px-4 py-4">0</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                    <td className="px-4 py-4">74.65</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <h3 className="text-[14px] font-normal mt-2 mb-1">Teams</h3>
                                                <div className="mt-4">
                                                    <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                                                        <div className="col-span-1">
                                                            <div className="bg-white p-2 rounded-lg border-[1px] border-[#ebebeb] text-center mb-2">
                                                                <div className="flex items-center justify-center">
                                                                    <img
                                                                        src="/assets/img/flg-1.png"
                                                                        alt=""
                                                                        className="h-[30px] w-[30px] rounded-full"
                                                                    />
                                                                </div>
                                                                <p className=" font-semibold text-[12px] pt-1">
                                                                    India
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <div className="bg-white p-2 rounded-lg border-[1px] border-[#ebebeb] text-center mb-2">
                                                                <div className="flex items-center justify-center">
                                                                    <img
                                                                        src="/assets/img/flg-2.png"
                                                                        alt=""
                                                                        className="h-[30px] w-[30px] rounded-full"
                                                                    />
                                                                </div>
                                                                <p className=" font-semibold text-[12px] pt-1">
                                                                    Mumbai Indians
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <div className="bg-white p-2 rounded-lg border-[1px] border-[#ebebeb] text-center mb-2">
                                                                <div className="flex items-center justify-center">
                                                                    <img
                                                                        src="/assets/img/flg-3.png"
                                                                        alt=""
                                                                        className="h-[30px] w-[30px] rounded-full"
                                                                    />
                                                                </div>
                                                                <p className=" font-semibold text-[12px] pt-1">KKR</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <div className="bg-white p-2 rounded-lg border-[1px] border-[#ebebeb] text-center mb-2">
                                                                <div className="flex items-center justify-center">
                                                                    <img
                                                                        src="/assets/img/flg-1.png"
                                                                        alt=""
                                                                        className="h-[30px] w-[30px] rounded-full"
                                                                    />
                                                                </div>
                                                                <p className=" font-semibold text-[12px] pt-1">
                                                                    India-A
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <div className="bg-white p-2 rounded-lg border-[1px] border-[#ebebeb] text-center mb-2">
                                                                <div className="flex items-center justify-center">
                                                                    <img
                                                                        src="/assets/img/flg-4.png"
                                                                        alt=""
                                                                        className="h-[30px] w-[30px] rounded-full"
                                                                    />
                                                                </div>
                                                                <p className=" font-semibold text-[12px] pt-1">
                                                                    West Zone
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`cust-box-click-content cust-box-click-batting ${careerTab === 'cust-box-click-bowling' ? "" : "hidden"}`}>
                                            <p>View Content</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 mb-2">
                                        <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                            Debu t &amp; Last Matches
                                        </h3>
                                    </div>
                                    <div className=" rounded-lg p-4 bg-[#ffffff] mb-4">
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <tbody>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Test debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs West Indies at Eden Gardens, Nov 06, 2013
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Last Test
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs New Zealand at M. Chinnaswamy Stadium, Oct 16, 2024
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            ODI debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs Ireland at Civil Service Cricket Club, Jun 23, 2007{" "}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Last ODI
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs Sri Lanka at R. Premadasa Stadium, Aug 07, 2024
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            T20 debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs England at Kingsmead, Sep 19, 2007{" "}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            T20 debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs South Africa at Kensington Oval, Jun 29, 2024
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            IPL debut
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs Kolkata Knight Riders at Eden Gardens, Apr 20, 2008
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-2 text-[#586577] whitespace-nowrap dark:text-white font-normal"
                                                        >
                                                            Last IPL
                                                        </th>
                                                        <td className="px-6 py-2 text-[#2F335C]">
                                                            <p className="text-[#217AF7]">
                                                                vs Lucknow Super Giants at Wankhede Stadium, May 17,
                                                                2024{" "}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <form action="" className="w-full md:w-[auto]">
                                                <div className="md:flex items-center md:space-x-2">
                                                    <p htmlFor="">Popular Players</p>
                                                    <div className="mt-2 md:mt-0">
                                                        {/* select opction */}
                                                        <select
                                                            className="border-[1px] border-border-gray-700 md:w-[154px] w-full py-1 px-2 rounded-md"
                                                            name="select"
                                                            id=""
                                                        >
                                                            <option value="Select Match">All</option>
                                                            <option value="Test">Test</option>
                                                            <option value="ODI">ODI</option>
                                                            <option value="T20">T20</option>
                                                            <option value="IPL">IPL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="text-right md:mt-0 mt-2 w-full md:w-[auto]">
                                                <a href="#">
                                                    <p className="text-[#1A80F8] font-semibold flex items-center justify-end text-[13px]">
                                                        Recent Form
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-3 ml-1"
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
                                        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <div className="bg-white p-4 rounded-lg border-[1px] border-[#ebebeb] text-center">
                                                    <div className="flex justify-center mb-2">
                                                        <img src="/assets/img/k-4.png" alt="" />
                                                    </div>
                                                    <p className="text-[14px] font-medium">V kohli</p>
                                                    <p className="text-gray-500 font-medium text-[12px]">
                                                        Batter
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="bg-white p-4 rounded-lg border-[1px] border-[#ebebeb] text-center">
                                                    <div className="flex justify-center mb-2">
                                                        <img src="/assets/img/k-3.png" alt="" />
                                                    </div>
                                                    <p className="text-[14px] font-medium">S Gill</p>
                                                    <p className="text-gray-500 font-medium text-[12px]">
                                                        Batter
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="bg-white p-4 rounded-lg border-[1px] border-[#ebebeb] text-center">
                                                    <div className="flex justify-center mb-2">
                                                        <img src="/assets/img/k-2.png" alt="" />
                                                    </div>
                                                    <p className="text-[14px] font-medium">R Sharma</p>
                                                    <p className="text-gray-500 font-medium text-[12px]">
                                                        Batter
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="bg-white p-4 rounded-lg border-[1px] border-[#ebebeb] text-center">
                                                    <div className="flex justify-center mb-2">
                                                        <img src="/assets/img/k-1.png" alt="" />
                                                    </div>
                                                    <p className="font-medium text-[14px]">Y Jaiswal</p>
                                                    <p className="text-gray-500 font-medium text-[12px]">
                                                        Batter
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                        <h3 className="text-1xl font-semibold mb-1">
                                            India vs Zimbabwe 2024
                                        </h3>
                                        <p className="text-gray-500 font-normal">
                                            The biggest tournament in the cricketing circuit, the ICC T20
                                            WORLD Cup is underway in the USAs and the West Indies. The
                                            tournament received excellent response from the fans
                                            worldwide...
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
                                {/* Right Sidebar Section */}
                                <div className="lg:col-span-4 md:col-span-5">
                                    <div className="">
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
                                                            <span className="text-[#586577]">Time Left:</span>2 Days
                                                            12h
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
                                                                            ></path>
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
                                                                            ></path>
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
                                                                                    Hrs
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]">
                                                                                    <span id="minutes">5</span>
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Min
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]" id="seconds">
                                                                                    17
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Sec
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
                                                                            ></path>
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
                                                                            ></path>
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
                                                                                    Hrs
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]">
                                                                                    <span id="minutes">5</span>
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Min
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]" id="seconds">
                                                                                    17
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Sec
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
                                                                            ></path>
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
                                                                            ></path>
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
                                                                                    Hrs
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]">
                                                                                    <span id="minutes">5</span>
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Min
                                                                                </span>
                                                                            </div>
                                                                            <div>:</div>
                                                                            <div className="flex flex-col items-center">
                                                                                <div className="text-[16px]" id="seconds">
                                                                                    17
                                                                                </div>
                                                                                <span className="text-[11px] font-normal">
                                                                                    {" "}
                                                                                    Sec
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
                                                            Probably Took Wrong Risk': Alyssa Healy Regrets Sitting
                                                            Out As SA Stuns AUS In T20 WC
                                                        </p>
                                                        <p className="text-[#586577] pt-2">17 hrs ago</p>
                                                    </div>
                                                    <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                                        <p className="text-[13px] font-semibold">
                                                            Women's T20 World Cup, NZ vs WI: Unchanged New Zealand
                                                            Opt To Bat; Check Out The Playing XIs
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
                                                            'Probably Took Wrong Risk': Alyssa Healy Regrets Sitting
                                                            Out As SA Stuns AUS In T20 WC
                                                        </p>
                                                        <p className="text-[#586577] pt-2">18 Oct 2024</p>
                                                    </div>
                                                </div>
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
                                                        <div className="font-medium text-[#394351]">
                                                            Super Smash
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="stats" className={`tab-content ${activeTab === 'stats' ? '' : 'hidden'}`}>
                            <div className="cust-box-click-container">
                                <h2 className="text-[20px] font-semibold">Suryakumar Yadav</h2>
                                <div className="md:flex justify-between items-center mb-3">
                                    <h3 className=" font-medium pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Vs Team stats
                                    </h3>
                                    <div className="flex gap-3 items-center md:justify-center md:mt-0 mt-4">
                                        <button
                                            // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                            // onclick="showCustomBox(this, 'cust-box-click-t20')"
                                            onClick={() => handleStatsTabClick('cust-box-click-t20')}
                                className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-t20' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                        >                                                                                      
                                            <span>T20</span>
                                        </button>
                                        <button
                                            // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                            // onclick="showCustomBox(this, 'cust-box-click-odi')"
                                            onClick={() => handleStatsTabClick('cust-box-click-odi')}
                                            className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-odi' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                        >
                                            <span>ODI Venue</span>
                                        </button>
                                        <button
                                            // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                            // onclick="showCustomBox(this, 'cust-box-click-test')"
                                            onClick={() => handleStatsTabClick('cust-box-click-test')}
                                            className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-test' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                        >
                                            <span>TEST</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={`cust-box-click-content cust-box-click-t20 ${statsTab === 'cust-box-click-t20'? "" : "hidden"}`}>
                                    <div>
                                        <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                            <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Batting Performance
                                            </h3>
                                            <div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                        <thead className="bg-blue-50 text-gray-700 ">
                                                            <tr>
                                                                <th className="px-4 py-3 font-medium w-[10px]" />
                                                                <th className="px-4 py-3 font-medium">Batter</th>
                                                                <th className="px-3 py-3 font-medium">Inns</th>
                                                                <th className="px-3 py-3 font-medium">No</th>
                                                                <th className="px-3 py-3 font-medium">Runs</th>
                                                                <th className="px-3 py-3 font-medium">BF</th>
                                                                <th className="px-3 py-3 font-medium">100s</th>
                                                                <th className="px-3 py-3 font-medium">50s</th>
                                                                <th className="px-3 py-3 font-medium">4s</th>
                                                                <th className="px-3 py-3 font-medium">Avg</th>
                                                                <th className="px-3 py-3 font-medium">SR</th>
                                                                <th className="px-3 py-3 font-medium">H</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/2.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Australia
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/12.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    New Zealand
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/6.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Ireland
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/16.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Pakistan
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/b-2.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    West Indies
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/11.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    South Africa
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/13.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Sri Lanka
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/15.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Bangladesh
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/10.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    England
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/9.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Zimbabwe
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/1.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Afghanistan
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr className="bg-gray-100 font-semibold">
                                                                <td className="px-3 py-3 w-[10px] font-medium" />
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            Total
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-4 py-2">68</td>
                                                                <td className="px-4 py-2">11</td>
                                                                <td className="px-4 py-2">2432</td>
                                                                <td className="px-4 py-2">1444</td>
                                                                <td className="px-4 py-2">4</td>
                                                                <td className="px-4 py-2">20</td>
                                                                <td className="px-4 py-2">220</td>
                                                                <td className="px-4 py-2">163</td>
                                                                <td className="px-4 py-2">168.36</td>
                                                                <td className="px-4 py-2">42.66</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                            <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Bowling Performance
                                            </h3>
                                            <div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                        <thead className="bg-blue-50 text-gray-700 ">
                                                            <tr>
                                                                <th className="px-4 py-3 font-medium w-[10px]" />
                                                                <th className="px-4 py-3 font-medium" />
                                                                <th className="px-3 py-3 font-medium">Inns</th>
                                                                <th className="px-3 py-3 font-medium">No</th>
                                                                <th className="px-3 py-3 font-medium">Runs</th>
                                                                <th className="px-3 py-3 font-medium">BF</th>
                                                                <th className="px-3 py-3 font-medium">100s</th>
                                                                <th className="px-3 py-3 font-medium">50s</th>
                                                                <th className="px-3 py-3 font-medium">4s</th>
                                                                <th className="px-3 py-3 font-medium">Avg</th>
                                                                <th className="px-3 py-3 font-medium">SR</th>
                                                                <th className="px-3 py-3 font-medium">H</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            <div className="flex items-center space-x-1 flex-col">
                                                                                <img
                                                                                    src="/assets/img/flag/1.png"
                                                                                    className="h-[20px] rounded-full"
                                                                                    alt="wiw"
                                                                                />
                                                                            </div>
                                                                            <div className="">
                                                                                <p className="text-[14px] font-medium">
                                                                                    Afghanistan
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr className="bg-gray-100 font-semibold">
                                                                <td className="px-3 py-3 w-[10px] font-medium" />
                                                                <td className="px-3 py-3">
                                                                    <a href="#">
                                                                        <div className="flex space-x-1 w-[114px]">
                                                                            Total
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="px-4 py-2">68</td>
                                                                <td className="px-4 py-2">11</td>
                                                                <td className="px-4 py-2">2432</td>
                                                                <td className="px-4 py-2">1444</td>
                                                                <td className="px-4 py-2">4</td>
                                                                <td className="px-4 py-2">20</td>
                                                                <td className="px-4 py-2">220</td>
                                                                <td className="px-4 py-2">163</td>
                                                                <td className="px-4 py-2">168.36</td>
                                                                <td className="px-4 py-2">42.66</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Tournament Stats
                                    </h3>
                                    <div>
                                        <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                            <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Batting Statistics
                                            </h3>
                                            <div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                        <thead className="bg-blue-50 text-gray-700 ">
                                                            <tr>
                                                                <th className="px-4 py-3 font-medium">Tournament</th>
                                                                <th className="px-3 py-3 font-medium">Mat</th>
                                                                <th className="px-3 py-3 font-medium">Inns</th>
                                                                <th className="px-3 py-3 font-medium">No</th>
                                                                <th className="px-3 py-3 font-medium">Runs</th>
                                                                <th className="px-3 py-3 font-medium">BF</th>
                                                                <th className="px-3 py-3 font-medium">100s</th>
                                                                <th className="px-3 py-3 font-medium">4s</th>
                                                                <th className="px-3 py-3 font-medium">6s</th>
                                                                <th className="px-3 py-3 font-medium">Avg</th>
                                                                <th className="px-3 py-3 font-medium">SR</th>
                                                                <th className="px-3 py-3 font-medium">H</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Indian Premier League
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Ranji Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Men's T20 World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Vijay Hazare Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Syed Mushtaq Ali Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Cricket World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Deodhar Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup T201
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                            <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Bowling Statistics
                                            </h3>
                                            <div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                        <thead className="bg-blue-50 text-gray-700 ">
                                                            <tr>
                                                                <th className="px-4 py-3 font-medium">Tournament</th>
                                                                <th className="px-3 py-3 font-medium">Mat</th>
                                                                <th className="px-3 py-3 font-medium">Inns</th>
                                                                <th className="px-3 py-3 font-medium">R</th>
                                                                <th className="px-3 py-3 font-medium">B</th>
                                                                <th className="px-3 py-3 font-medium">W</th>
                                                                <th className="px-3 py-3 font-medium">ER</th>
                                                                <th className="px-3 py-3 font-medium">Dots</th>
                                                                <th className="px-3 py-3 font-medium">Mdns</th>
                                                                <th className="px-3 py-3 font-medium">Avg</th>
                                                                <th className="px-3 py-3 font-medium">SR</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Indian Premier League
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Ranji Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Men's T20 World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Vijay Hazare Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Syed Mushtaq Ali Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Cricket World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Deodhar Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup T201
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                            <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Most Recent Matches
                                            </h3>
                                            <div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                        <thead className="bg-blue-50 text-gray-700 ">
                                                            <tr>
                                                                <th className="px-4 py-3 font-medium">Match</th>
                                                                <th className="px-3 py-3 font-medium">Runs</th>
                                                                <th className="px-3 py-3 font-medium">BF</th>
                                                                <th className="px-3 py-3 font-medium">4s</th>
                                                                <th className="px-3 py-3 font-medium">6s</th>
                                                                <th className="px-3 py-3 font-medium">SR</th>
                                                                <th className="px-3 py-3 font-medium">O</th>
                                                                <th className="px-3 py-3 font-medium">R</th>
                                                                <th className="px-3 py-3 font-medium">W</th>
                                                                <th className="px-3 py-3 font-medium">ER</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Indian Premier League
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Ranji Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Men's T20 World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Vijay Hazare Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Syed Mushtaq Ali Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        ICC Cricket World Cup
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Deodhar Trophy
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="md:px-2 py-3 text-[#217AF7]">
                                                                    <a href="#" style={{ cursor: "pointer" }}>
                                                                        Asia Cup T201
                                                                    </a>
                                                                </td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">5</td>
                                                                <td className="px-3 py-3">123</td>
                                                                <td className="px-3 py-3">45.50</td>
                                                                <td className="px-3 py-3">9</td>
                                                                <td className="px-3 py-3">0</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                                <td className="px-3 py-3">74.65</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`cust-box-click-content cust-box-click-odi ${statsTab === 'cust-box-click-odi'? "" : "hidden"}`}>
                                    ggggg
                                </div>
                                <div className={`cust-box-click-content cust-box-click-test ${statsTab === 'cust-box-click-test'? "" : "hidden"}`}>
                                    kkkkk
                                </div>
                            </div>
                        </div>
                        <div id="news" className={`tab-content ${activeTab === 'news' ? '' : 'hidden'}`}>
                            fgh
                        </div>
                        <div id="photos" className={`tab-content ${activeTab === 'photos' ? '' : 'hidden'}`}>
                            fgh
                        </div>
                    </div>
                </div>
            </section>



        </Layout>
    )
}

export default Profile