import React from "react";
import PackageCard from "../components/PackageCard";

export default function Home() {
  return (
    <>
      <div class="Homepage h-[auto] w-full bg-gray-200">
        <div class="TopSearch justify-center flex">
          <div class="topImg w-full h-[27rem] bg-slate-700  overflow-hidden ">
            <img
              class="h-[50rem] w-[100rem] -mt-36 brightness-[80%]"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="no"
            />
          </div>
          <div class="h-80 w-[60rem] bg-gray-900 bg-opacity-85 tr absolute mt-10 rounded-2xl flex flex-col gap-2 justify-center  ">
            
            <input
              class="bg-white outline-red-500 border-none w-[32rem] rounded-md ml-52 -mt-24"
              type="text"
              placeholder="Your Location..."
            />
            <input
              class="bg-white outline-red-500 border-none w-[32rem] rounded-md ml-52 mt-1 "
              type="text"
              placeholder="Your Destination..."
            />
            <div>
              <input
                class="w-44 h-10 outline-none rounded-lg border-transparent ml-[13rem] mr-2"
                type="date"
              />
              <input
                class="w-44 h-10 outline-none rounded-lg border-transparent ml-[13rem] -ml-0"
                type="date"
              />
              
              <select id="number" class="rounded-lg ml-2 w-[145px]">
              <option value="p">No. person</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              
            </div>
            <button class="bg-blue-500 text-white w-[32rem] h-12 absolute mt-32 ml-[13rem] rounded-md">Search</button>
          </div>
        </div>

        {/* Trending package------------------------------------------------------------- */}
        <h1 class="text-[60px] ml-[35%]">Popular Trips</h1>
         <div class="flex flex-wrap -gap-x-0 gap-y-10 mt-20 ">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        </div>
      </div>
    </>
  );
}
