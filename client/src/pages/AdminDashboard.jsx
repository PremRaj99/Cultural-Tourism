import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";






export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[35rem] bg-blue-200 relative flex flex-col  items-center gap-10">
        <h1 className="text-3xl -mb-5 mt-5 relative right-[32rem]">Admin Dashboard</h1>
    <div className="flex flex-wrap gap-7 mt-7 justify-start items-center h-auto w-[80rem]">

    <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <   HiOutlineArrowPath  className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Ongoing Trip</p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white"
        >
         <Link to={"/ongoing-trip"}>
            visit
          </Link>
        </button>
      </div>

      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <LuCalendarClock  className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Upcoming Trip </p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white"
        >
          <Link to={"/upcoming-trip"}>
            visit
          </Link>
        </button>
      </div>

      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <FaRegEdit   className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Create New Trip Plan</p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white">
        <Link to={"/create-new-trip-plan"}>
            visit
          </Link>
        </button>
      </div>


      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <FaUsers  className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Customers</p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white">
        <Link to={"/customers"}>
            visit
          </Link>
        </button>
      </div>


      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <FaUserTie   className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Partners</p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white">
        <Link to={"/partners"}>
            visit
          </Link>
        </button>
      </div>

      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
        <LuIndianRupee  className="text-[50px] text-black mt-1" />
        <p className="text-black text-2xl">Monthly Trip & Earning</p>
        <button className="bg-rose-500 w-20 rounded-md text-base text-white">
        <Link to={"/monthly-trip-and-earning"}>
            visit
          </Link>
        </button>
      </div>

      <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <FaTools className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Settings</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
          <Link to={"/setting"}>
            visit
          </Link>
          </button>
        </div>

    </div>

  </div>
  )
}