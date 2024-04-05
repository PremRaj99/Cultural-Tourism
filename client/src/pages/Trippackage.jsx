import React, { useState } from 'react';
import { Link } from "react-router-dom"

export default function Trippackage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    description: '',
    bookedCab: 'Quantum Taxi Service', // Example of a predetermined booked cab
    bookedHotel: 'Quantum Guest House',
    placesToVisit: [],
    totalFare: 5000 // Dummy total fare value
  });

  

  
  const handleAddToFavorites = () => {
    // Implement logic to add trip to favorites
    console.log('Trip added to favorites:', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container w-[1000px] mx-auto px-6 py-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Trip Name</h2>
      <h3 className="text-xl font-semibold mb-4 text-center">Rishikesh Trip</h3>
      <p className="mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget congue mauris. Sed nec leo tortor. Vivamus non diam id mi congue laoreet. Nullam et orci ac velit varius vehicula. Integer nec tincidunt justo. </p>
      
      <div className="container w-[800px] mx-auto px-6 py-8 border border-gray-300 rounded-lg shadow-md">
        <p className="mb-2 text-center">Booked Cab: {formData.bookedCab}</p>
        <p className="mb-2 text-center">Booked Hotel: {formData.bookedHotel}</p>
        <div className="mb-4 text-center">
          <p className="block text-gray-700 font-semibold mb-2">Places to Visit:</p>
          <ul className="list-disc list-inside">
            {formData.placesToVisit.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2 text-center">
          <p className="block text-gray-700 font-semibold mb-2">Total Fare:</p>
          <p>Total Fare: ₹{formData.totalFare}</p>
        </div>
        <div className="flex justify-center">
          <Link to="/" 
            onClick={handleAddToFavorites} 
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Add to Favorites
          </Link>
          <Link to="/userdetails" 
            onClick={handleSubmit} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-4"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
