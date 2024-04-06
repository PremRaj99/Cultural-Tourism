import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 w-full h-[80rem] ">
      
      <div>
        <img
          className="w-[30rem] m-12 absolute"
          src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="ml-[37rem] - mt-10 absolute flex flex-col items-start text-[30px] ">
        <h1 className="text-[60px] mb-5">About us</h1>
        <h1 className="text-[40px] mb-5">
          Explore, Experience, Enrich: Discover <br />
          <span className="text-sky-900 font-bold">CULTURAL TOURISM</span>
        </h1>

        <ul className="list-disc text-[20px] mt-10 w-[40rem] space-y-10">
          <li>
            Welcome to [Travel Website Name], where every journey is an odyssey
            of discovery, adventure, and enrichment. Founded on the belief that
            travel transcends mere movement from one place to another, we curate
            extraordinary experiences tailored to ignite your wanderlust and
            awaken your senses.
            
          </li>

          <li>
            At [Travel Website Name], we understand that travel is not just
            about visiting new destinations; it's about immersing yourself in
            diverse cultures, savoring local cuisines, and forging connections
            that transcend borders. Whether you're seeking adrenaline-pumping
            adventures, serene escapes, or cultural immersion, we offer a
            spectrum of meticulously crafted journeys to cater to every
            traveler's wanderlust.
          </li>

          <li>
            Our team of passionate explorers, travel experts, and local insiders
            meticulously handpick each destination, activity, and accommodation
            to ensure every aspect of your journey exceeds expectations. With a
            commitment to sustainability and responsible tourism, we strive to
            leave a positive impact on the communities we visit while preserving
            the natural beauty of our planet for future generations.
          </li>

          <li>
            Embark on a voyage of discovery with [Travel Website Name], where
            every adventure is an opportunity to enrich your life, broaden your
            horizons, and create lasting memories. Join us as we redefine the
            art of travel and inspire wanderlust in the hearts of adventurers
            around the globe.
          </li>
        </ul>
      </div>
    </div>
  );
}