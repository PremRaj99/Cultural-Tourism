import React from "react";
import PackageCard from "../components/PackageCard";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Home() {
  const handleSearch = async (req, res, next) => {};

  return (
    <div>
      <div class="Homepage h-[auto] w-full bg-gray-200">
        <div class="TopSearch justify-center flex">
          <div class="topImg w-full h-screen bg-slate-700  overflow-hidden ">
            <img
              class="h-[56rem] w-[100rem] -mt-36 brightness-[95%]"
              src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="no"
            />
          </div>

          <div className="absolute text-white ">
            <h1 className="text-[70px] -ml-[42rem]  mt-[8rem] font-bold">
              CULTURAL TOURISM
            </h1>

            <div className="App absolute -ml-[41rem] text-white font-thin text-[70px] -mt-5 w-60rem">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Adventure")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Explore")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Discover")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Wanderlust")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Excitement")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Escape")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Experience")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Memories")
                    .start();
                }}
              />
            </div>
          </div>
          <div class="h-[35rem] w-[30rem] bg-gray-900 bg-opacity-85 ml-[48rem] absolute mt-[4rem] rounded-2xl flex flex-col gap-2 justify-center bg-opacity-[30%] ">
            <h1 className="absolute -mt-[22rem] text-[40px] w-30px h-200px ml-12 text-white font-sans ">
              Search Your Holiday
            </h1>
            <input
              class="bg-white outline-red-500 border-none w-[22rem] rounded-md ml-[3.5rem] -mt-24"
              type="text"
              placeholder="Your Location..."
            />
            <input
              class="bg-white outline-red-500 border-none w-[22rem] rounded-md ml-[3.5rem] mt-1 "
              type="text"
              placeholder="Your Destination..."
            />
            <div class="-ml-[14px]">
              <input
                class="w-[110px] h-10 outline-none m-1 rounded-lg border-transparent ml-[4.5rem] mr-2"
                type="date"
              />
              <input
                class="w-[110px] h-10 outline-none rounded-lg border-transparent ml-[1px]"
                type="date"
              />

              <select id="number" class="rounded-lg ml-2 w-[115px]">
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
            <Link
              to="/search"
              class="bg-blue-500 text-white text-center p-3 w-[22rem] h-12 absolute mt-[7rem] ml-[3.5rem] rounded-md"
            >
              Search
            </Link>
          </div>
        </div>

        {/* Trending package------------------------------------------------------------- */}
        <h1 class="text-3xl font-bold mt-10  ml-[10%]">Popular Trips</h1>
        <div class=" flex flex-wrap -gap-x-0 gap-y-10 mt-10 mb-10 ml-40 gap-8 w-auto">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
}
