import React from "react";

export default function BookingList({ onEdit, onDelete }) {
  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <tr>
      <td className="border px-4 py-2">1</td>
      <td className="border px-4 py-2">John Doe</td>
      <td className="border px-4 py-2">In Progress</td>
      <td className="border px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
