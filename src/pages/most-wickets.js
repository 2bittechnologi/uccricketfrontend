import Layout from '@/Components/Layout'
import React, { useState } from 'react'

const MostWickets = () => {
  const [activeTab, setActiveTab] = useState('bbl');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Layout>
      <section className="bg-[#0E2149]">
        <div className="lg:w-[1000px] mx-auto text-white md:pt-10 pt-5 pb-20">
          <h1 className="text-center md:text-2xl text-[18px] md:font-bold font-semibold mb-8">
            Most Wickets in T20 WC 2024
          </h1>
          {/* Players Section */}
          <div className="flex justify-center items-center md:gap-6 gap-4">
            {/* Player 1 */}
            <div className="text-center">
              <img
                src="/assets/img/player/p-1.png"
                alt="A Singh"
                className=" lg:h-[213px] md:h-[158px] h-[115px] mx-auto"
              />
              <div className="lg:w-[75%] w-[95%] mx-auto relative">
                <div
                  className="mt-4 flex items-center relative rounded-l-[20px]"
                  style={{
                    background: "linear-gradient(180deg, #4063AE 0%, #06318B 100%)"
                  }}
                >
                  <div className="bg-white text-blue-900 font-bold rounded-full md:text-[16px] md:py-[9px] py-[4px] md:px-[13px] px-[7px]">
                    17
                  </div>
                  <span className="ml-2 font-semibold md:text-[15px]">A Singh</span>
                </div>
                <div className="absolute md:h-[43px] h-[31px] lg:w-[6px] w-[2px] right-[0px] md:top-[-1px] top-[0px] bg-[white]" />
              </div>
            </div>
            {/* Player 2 */}
            <div className="text-center mb-20">
              <img
                src="/assets/img/player/p-2.png"
                alt="F Farooqi"
                className="lg:h-[250px] md:h-[193px] h-[150px] mx-auto"
              />
              <div className="md:w-[85%] mx-auto relative">
                <div
                  className="mt-2 flex items-center relative rounded-l-[20px]"
                  style={{
                    background: "linear-gradient(180deg, #4063AE 0%, #06318B 100%)"
                  }}
                >
                  <div className="bg-white text-blue-900 font-bold rounded-full md:text-[17px] md:py-[9px] md:px-[13px] text-[15px] py-[4px] px-[7px]">
                    17
                  </div>
                  <span className="ml-2 font-semibold md:text-[17px] text-[15px]">
                    F Farooqi
                  </span>
                </div>
                <div className="absolute md:h-[43px] h-[31px] md:h-[43px] lg:w-[6px] w-[2px] right-[0px] md:top-[-1px] top-[0px] bg-[white]" />
              </div>
            </div>
            {/* Player 3 */}
            <div className="text-center">
              <img
                src="/assets/img/player/p-3.png"
                alt="J Bumrah"
                className="lg:h-[213px] md:h-[158px] h-[115px] mx-auto"
              />
              <div className="lg:w-[75%] w-[95%] mx-auto relative">
                <div
                  className="mt-4 flex items-center relative rounded-l-[20px]"
                  style={{
                    background: "linear-gradient(180deg, #4063AE 0%, #06318B 100%)"
                  }}
                >
                  <div className="bg-white text-blue-900 font-bold rounded-full md:text-[16px] md:py-[9px] py-[4px] md:px-[13px] px-[7px]">
                    15
                  </div>
                  <span className="ml-2 font-semibold md:text-[15px]">J Bumrah</span>
                </div>
                <div className="absolute md:h-[43px] h-[31px] lg:w-[6px] w-[2px] right-[0px] md:top-[-1px] top-[0px] bg-[white]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-[1000px] lg:mx-auto mx-2">
        <div>
          {/* Filter Section */}
          <div className="bg-white p-6 font-semibold rounded-lg mt-[-50px]">
            <form className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-end">
              <div>
                <label
                  htmlFor="most"
                  className="block font-medium text-[#909090] mb-2"
                >
                  Most
                </label>
                <select
                  id="most"
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option>Runs</option>
                  <option>Wickets</option>
                </select>
              </div>
              <div>
                <label htmlFor="in" className="block font-medium text-[#909090] mb-2">
                  In
                </label>
                <select id="in" className="border border-gray-300 rounded p-2 w-full">
                  <option>T20 WC</option>
                  <option>ODI WC</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="season"
                  className="block font-medium text-[#909090] mb-2"
                >
                  Season
                </label>
                <select
                  id="season"
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="playing-for"
                  className="block font-medium text-[#909090] mb-2"
                >
                  Playing For
                </label>
                <select
                  id="playing-for"
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option>All</option>
                  <option>India</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="venue"
                  className="block font-medium text-[#909090] mb-2"
                >
                  At Venue
                </label>
                <select
                  id="venue"
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option>All</option>
                  <option>Stadium 1</option>
                  <option>Stadium 2</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="format"
                  className="block font-medium text-[#909090] mb-2"
                >
                  In Format
                </label>
                <select
                  id="format"
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option>T20</option>
                  <option>ODI</option>
                </select>
              </div>
              <div>
                <button className="bg-blue-900 text-white font-semibold py-[10px] px-4 rounded hover:bg-blue-800">
                  Apply Changes
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-lg bg-[#ffffff] my-4 p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-200 text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-2 text-left font-semibold">No</th>
                    <th className="py-3 px-2 text-left font-semibold">Player</th>
                    <th className="py-3 px-2 text-left font-semibold">Team</th>
                    <th className="py-3 px-2 text-left font-semibold">Wicket</th>
                    <th className="py-3 px-2 text-left font-semibold">Mat</th>
                    <th className="py-3 px-2 text-left font-semibold">Inns</th>
                    <th className="py-3 px-2 text-left font-semibold">Avg</th>
                    <th className="py-3 px-2 text-left font-semibold">SR</th>
                    <th className="py-3 px-2 text-left font-semibold">ER</th>
                    <th className="py-3 px-2 text-left font-semibold">5W+</th>
                    <th className="py-3 px-2 text-left font-semibold">3W+</th>
                    <th className="py-3 px-2 text-left font-semibold">Maiden</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {/* Row Template */}
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">1</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        Fazalhaq Farooqi
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/1.png"
                          alt="Player"
                        />
                        <span>AFG</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">9.41</td>
                    <td className="py-3 px-2">8.94</td>
                    <td className="py-3 px-2">6.32</td>
                    <td className="py-3 px-2">1</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  {/* Repeat Rows */}
                  {/* Example Row */}
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">2</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        Arshdeep Singh
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/17.png"
                          alt="Player"
                        />
                        <span>IND</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        jasprit bumrah
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/17.png"
                          alt="Player"
                        />
                        <span>IND</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">4</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">A Nortje</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/11.png"
                          alt="Player"
                        />
                        <span>SA</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">5</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        Rishad Hossain
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/15.png"
                          alt="Player"
                        />
                        <span>BAN</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">6</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">Rashid Khan</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/1.png"
                          alt="Player"
                        />
                        <span>AFG</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">7</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">A Zampa</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/2.png"
                          alt="Player"
                        />
                        <span>AUS</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        Alzarri Joseph
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/1.png"
                          alt="Player"
                        />
                        <span>WI</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">9</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        RashiNaveen-Haqd
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/1.png"
                          alt="Player"
                        />
                        <span>AFG</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-2">10</td>
                    <td className="py-3 px-2 flex items-center space-x-3 md:w-[auto] w-[200px] ">
                      <img
                        className="w-8 h-8 rounded-lg"
                        src="/assets/img/player/1.png"
                        alt="Player"
                      />
                      <span className="font-medium text-[#2b2b2b]">
                        Kagiso Rabada
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <img
                          className="rounded-lg"
                          src="/assets/img/flag/11.png"
                          alt="Player"
                        />
                        <span>SA</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-[#2b2b2b] text-center md:text-left">
                      17
                    </td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">8</td>
                    <td className="py-3 px-2">12.65</td>
                    <td className="py-3 px-2">10.59</td>
                    <td className="py-3 px-2">7.17</td>
                    <td className="py-3 px-2">0</td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg bg-[#ffffff] my-4 p-4">
            <h3 className="text-1xl font-semibold mb-2 pl-[7px] mb-3 border-l-[3px] border-[#229ED3]">
              Top Cricket Tournaments
            </h3>
            <div
              id="tabs"
              className="flex lg:gap-6 md:gap-4 mt-6 border-b-[1px] border-[#E4E9F0] overflow-x-auto whitespace-nowrap"
            >
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-1.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('bbl')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 'bbl' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 'bbl')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2  border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]"
                >
                  BBL 2023-24
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-2.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('psl')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 'psl' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 'psl')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  PSL 2024
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-3.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('ipl')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 'ipl' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 'ipl')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  IPL 2024
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-4.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('t20')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 't20' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 't20')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  T20 Blast 2024
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-5.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('t20wc')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 't20wc' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 't20wc')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  T20 WC 2024
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-6.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('tnpl')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 'tnpl' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 'tnpl')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  TNPL 2024
                </button>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="/assets/img/player/tab-7.png"
                  className="h-[61px] lg:h-[auto] mb-3"
                  alt=""
                />
                <button
                  onClick={() => handleTabClick('cpl')}
                  className={`text-sm font-semibold text-[14px] pb-2 px-2 ${activeTab === 'cpl' ? 'border-b-[3px] text-[#3D4DCF] border-[#3D4DCF]' : ''}`}
                // onclick="handleTabClick(event, 'cpl')"
                // className="text-sm font-semibold text-[14px] pb-2 px-2"
                >
                  CPL 2024
                </button>
              </div>
            </div>
            <div id="tab-content">
              <div id="bbl" className={`tab-content ${activeTab === 'bbl' ? '' : 'hidden'}`}>
                <div className="pt-8 pb-5">
                  <div className="grid grid-cols-12 lg:gap-10 gap-2">
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Most Runs&nbsp;in&nbsp;BBL 2023-24
                      </a>
                    </div>
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Most Fours&nbsp;in&nbsp;T20 WC 2024
                      </a>
                    </div>
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Highest Strike Rate&nbsp;in&nbsp;BBL 2...
                      </a>
                    </div>
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Most Wickets&nbsp;in&nbsp;BBL 2023-24
                      </a>
                    </div>
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Most Fifties&nbsp;in&nbsp;T20 WC 2024
                      </a>
                    </div>
                    <div className="md:col-span-4 col-span-12">
                      <a
                        className="text-[16px] underline md:font-semibold font-normal hover:text-[#3d4dcf]"
                        href="#"
                      >
                        Most Hundreds&nbsp;in&nbsp;BBL 2023-24
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="psl" className={`tab-content ${activeTab === 'psl' ? '' : 'hidden'}`}>
                {" "}
                how are you{" "}
              </div>
              <div id="ipl" className={`tab-content ${activeTab === 'ipl' ? '' : 'hidden'}`}>
                jhdfgsdh
              </div>
              <div id="t20" className={`tab-content ${activeTab === 't20' ? '' : 'hidden'}`}>
                This is Overs content.
              </div>
              <div id="t20wc" className={`tab-content ${activeTab === 't20wc' ? '' : 'hidden'}`}>
                This is Points Table content.
              </div>
              <div id="tnpl" className={`tab-content ${activeTab === 'tnpl' ? '' : 'hidden'}`}>
                This is Live Stats content.
              </div>
              <div id="cpl" className={`tab-content ${activeTab === 'cpl' ? '' : 'hidden'}`}>
                This is Live Stats content.
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default MostWickets