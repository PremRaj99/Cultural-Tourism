import React from "react";
import BookingList from "../components/BookingList";

export default function OnGoingBooking() {
  const handleEdit = () => {
    // Add logic for editing
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    // Add logic for deleting
    console.log("Delete clicked");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">On-Going Booking</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl. No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <BookingList onEdit={handleEdit} onDelete={handleDelete} />
            {/* Add more rows for other ongoing bookings */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
