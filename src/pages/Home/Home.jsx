import React from "react";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";

function Home() {
  return (
    <div className="w-screen h-screen bg-[#fefbea] flex justify-center gap-20 text-[#0f1623]">
      <div className="ml-20 h-full min-w-fit bg-white text-black flex flex-col justify-between">
        <div>
          <div className="p-5 w-full text-center text-3xl font-bold">
            <span className=" text-[#e17f2f]">Task Manager </span> App
          </div>
          <div className="w-full pb-3 border-t"></div>
          <div className="cursor-pointer flex flex-col mt-3 ml-16 text-3xl font-normal gap-3">
            <div className="btn hover:bg-[#eadeb3] text-[#0f1623] bg-[#f8e6a2] text-3xl justify-start border-none w-[210px]  flex gap-3">
              <BsCalendar2EventFill /> Plan
            </div>
            <div className="flex gap-3">
              <GiNotebook /> Task List
            </div>
            <div className="flex gap-3">
              <BsFillFolderFill /> Projects
            </div>
            <div className="flex gap-3">
              <FaTag /> Tags
            </div>
          </div>
        </div>
        <div className="cursor-pointer text-3xl flex items-center gap-3 ml-16 mb-5">
          <RiLogoutBoxFill /> Logout
        </div>
      </div>

      <div className="flex flex-col w-full h-full mr-20 gap-16">
        <div className=" w-full h-14 flex justify-between items-center text-lg text-black">
          <div className="cursor-pointer flex items-center">{<GoArrowLeft />}Archive</div>
          <div className="text-xl text-bold">Today's Plan</div>
          <div className="flex cursor-pointer items-center">This week{<GoArrowRight />}</div>
        </div>
        <div className="w-full h-full bg-white">
          <div className="p-10">
            <div className="text-4xl font-bold ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
              dignissimos. Debitis quod rem magni consequatur ipsa ut tempore
              minus sed.
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-10 text-sm text-gray-400 w-20 border-r-2">
                Membrers connected
              </div>
              <div className="flex gap-3">
                <div className="cursor-pointer text-4xl rounded-xl p-2 border">
                  {<BiSolidMessageRounded />}
                </div>
                <div className="btn">Open</div>
              </div>
            </div>
            <div className="mt-14 border-t-2"></div>

            <div className="mt-14 flex w-full h-full">
              <div className="flex flex-col justify-center w-1/2 gap-3">
                <div className="text-2xl font-bold">Stats</div>
                <div className="border w-3/4 bg-[#d0fae4] rounded-2xl ">
                  <div className="p-10 text-xl font-semibold">
                    Good Day, <br />
                    Kristin
                    <br />
                    <button className="hover:bg-[#ece5e5] mt-3 text-black border-none rounded-xl btn bg-white btn-md">
                      Start Tracking
                    </button>
                  </div> 
                </div>
                <div className="flex justify-between items-center gap-3 w-3/4 text-xl ">
                  <div className="w-full h-20 font-semibold bg-[#f8e6a2] rounded-xl p-3">
                    20 <br />{" "}
                    <span className="text-base font-normal">Task Finished</span>
                  </div>
                  <div className="w-full h-20 p-3 font-semibold rounded-xl bg-[#f8e6a2]">
                    5,5 <br />{" "}
                    <span className="font-normal text-base">Tracked Hours</span>
                  </div>
                </div>
                <div className="w-3/4 bg-[#edeaff] rounded-xl h-20 p-3">
                  <div className="text-xl font-semibold">Your Daily Plan</div>
                  <div>5 of 8 completed </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <div className="text-2xl font-bold">Your tasks today</div>
                <div>
                  <div className="border p-4 rounded-xl w-3/4">
                    <div className="flex text-sm text-gray-400 justify-between">
                      <div>Number 10</div>
                      <div>4h</div>
                    </div>
                    <div className="text-lg font-semibold">
                      Blog and social post
                    </div>
                    <div>Deadline is today</div>
                  </div>
                </div>
                <div>
                  <div className="border p-4 rounded-xl w-3/4">
                    <div className="flex text-sm text-gray-400 justify-between">
                      <div>Number 10</div>
                      <div>4h</div>
                    </div>
                    <div className="text-lg font-semibold">
                      Blog and social post
                    </div>
                    <div>Deadline is today</div>
                  </div>
                </div>
                <div>
                  <div className="border p-4 rounded-xl w-3/4">
                    <div className="flex text-sm text-gray-400 justify-between">
                      <div>Number 10</div>
                      <div>4h</div>
                    </div>
                    <div className="text-lg font-semibold">
                      Blog and social post
                    </div>
                    <div>Deadline is today</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
