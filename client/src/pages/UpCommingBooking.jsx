import React, { useState } from "react";
import BookingList from "../components/BookingList";

export default function UpComingBooking() {
  const [userName, setUserName] = useState("John Doe");
  const [status, setStatus] = useState("Pending");

  const handleEdit = () => {
    const newName = prompt("Enter new name:", userName);
    const newStatus = prompt("Enter new status:", status);

    if (newName !== null && newStatus !== null) {
      setUserName(newName);
      setStatus(newStatus);
    }
  };

  const handleDelete = () => {
    // Add logic for deleting
    console.log("Delete clicked");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Booking</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Sl. No</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">{userName}</td>
              <td className="border px-4 py-2">{status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={handleEdit}
                  className="mr-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
