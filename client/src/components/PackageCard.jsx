import React from "react";
import { Card } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom"
export default function PackageCard() {
  return (
    <div>
      <Card
        className="max-w-sm w-[700px] h-[200px] bg-gray-100 justify-start flex overflow-hidden"

        imgSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        horizontal 
      >
        <div className="txt grid justify-start ">
        <h5 class="text-2xl font-bold  -mt-2 ml-16 uppercase " >Trip Name</h5>
        <h3 className="text-md font-normal items-center gap-2 tracking-tight text-gray-900 dark:text-white flex mt-1 ml-0">
          Mumbai <FaArrowRightLong />  Goa Plan
        </h3>
        <hr class="h-[1.59px] my-1 mal w-[250px] bg-gray-500 border-0 "/>
        <div className="li flex mt-3">
        <ul className="font-normal text-gray-700 dark:text-gray-400 list-disk ">
        <li class="list-disc">Food</li>
        <li class="list-disc">Ac Hotel</li>
        <li class="list-disc">Cab</li>
        <li class="list-disc">Water Boat</li>
        </ul>
        <ul className="font-normal text-gray-700 dark:text-gray-400 list-disk ml-16">
        <li class="list-disc">Mumbai</li>
        <li class="list-disc">Panvel</li>
        <li class="list-disc">Khed</li>
        <li class="list-disc">more..</li>
        </ul>
        </div>
        <p class="-mt-[100px] text-[23px] ml-60 bg-gray-300 w-[130px] h-[40px] flex pl-[10px] rounded-lg">₹22,999</p>
        </div>
      
        <Link to="/trippackage" class="bg-blue-600 rounded-lg w-24 p-[7px] absolute ml-[240px] mt-[125px] text-white">Book Now</Link>
      </Card>
    </div>
  );
}