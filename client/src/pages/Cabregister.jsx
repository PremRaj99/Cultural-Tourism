import React, { useState } from "react";

export default function CabRegister() {
  const [formData, setFormData] = useState({
    driverName: "",
    cabModel: "",
    otherCabModel: "",
    price: "",
    cabImage: null,
    address: "" // Add address field to formData
  });

  const [registeredCabs, setRegisteredCabs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      cabImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      const updatedCabs = [...registeredCabs];
      updatedCabs[editIndex] = formData;
      setRegisteredCabs(updatedCabs);
      setEditIndex(null);
    } else {
      setRegisteredCabs([...registeredCabs, formData]);
    }
    setFormData({
      driverName: "",
      cabModel: "",
      otherCabModel: "",
      price: "",
      cabImage: null,
      address: "" // Reset address field after submission
    });
  };

  const handleEdit = (index) => {
    setFormData(registeredCabs[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this cab?")) {
      const updatedCabs = registeredCabs.filter((_, i) => i !== index);
      setRegisteredCabs(updatedCabs);
    }
  };

  // List of states for the address dropdown
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Goa",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  return (
<>
<img src="https://images.unsplash.com/photo-1485739139909-d0d1783a7196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
alt="" 
className="w-full relative
"/>


    <div className="flex justify-center items-center mt-9  py-5 absolute top-3 left-[10%] translate-x-[75%]">
      <div className="max-w-md w-full px-6 py-2 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Register your CAB
        </h2>
        <form onSubmit={handleSubmit} className="mt- -4px" >
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="driverName"
            >
              Driver Name
            </label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="cabModel"
            >
              Cab Model
            </label>
            <select
              id="cabModel"
              name="cabModel"
              value={formData.cabModel}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select Cab Model
              </option>
              <option value="Mini">Mini</option>
              <option value="Prime Sedan">Prime Sedan</option>
              <option value="Prime SUV">Prime SUV</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {formData.cabModel === "Other" && (
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="otherCabModel"
              >
                Specify Other Cab Model
              </label>
              <input
                type="text"
                id="otherCabModel"
                name="otherCabModel"
                value={formData.otherCabModel}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          )}
          <div className="mb-2 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <div className="flex items-center border rounded py-2 px-3 text-gray-700 focus-within:shadow-outline">
              <span className="mr-2">₹</span>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                className="appearance-none w-full focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Address dropdown for states */}
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="address"
            >
              State
            </label>
            <select
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="cabImage"
            >
              Upload Cab Image
            </label>
            <input
              type="file"
              id="cabImage"
              name="cabImage"
              onChange={handleFileChange}
              accept="image/*"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              {editIndex !== null ? "Update Cab" : "Register Cab"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {registeredCabs.map((cab, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{cab.driverName}</div>
              <p className="text-gray-700 text-base mb-2">{cab.cabModel}</p>
              {cab.otherCabModel && (
                <p className="text-gray-700 text-base mb-2">{cab.otherCabModel}</p>
              )}
              <p className="text-gray-700 text-base mb-2">{cab.price}</p>
              {/* Display state */}
              <p className="text-gray-700 text-base mb-2">State: {cab.address}</p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
