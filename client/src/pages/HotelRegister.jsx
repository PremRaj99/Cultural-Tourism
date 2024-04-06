import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, RangeSlider, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";

export default function HotelRegister() {
  const [formData, setFormData] = useState({
    cabName: "",
    price: "",
    cabImage: "",
    address: "", // Add address field to formData
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  // firebase storage for image
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] =
    useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const size = 2 * 1024 * 1024;
    if (file && file.size < size) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    } else {
      setImageFileUploadError(
        "Couldn't upload an image (File must be less then 2MB or not in Image Formet)"
      );
      setImageFileUploadingProgress(null);
      setImageFile(null);
      setImageFileUrl(null);
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Couldn't upload an image (File must be less then 2MB or not in Image Formet)"
        );
        setImageFileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageFile(downloadUrl);
          setFormData({ ...formData, placeImage: downloadUrl });
        });
      }
    );
  };

  const [registeredCabs, setRegisteredCabs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmit(null);

    if (
      !formData.cabName &&
      !formData.address &&
      !formData.price &&
      !formData.cabImage
    ) {
      setUpdateUserError("No change made");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/cab/add/${currentUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        setError(data.message);
      }
      if (res.ok) {
        console.log(data.message);
        setSubmit("Your cab has been registered");
        setFormData({ placeName: "", placeImage: "", address: "", price: "" });
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
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
    "Puducherry",
  ];

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1485739139909-d0d1783a7196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full relative
"
      />

      <div className="flex justify-center items-center mt-32 ml-28  py-5 absolute top-3 left-[10%] translate-x-[75%]">
        <div className="max-w-md w-full px-6 py-2 bg-white shadow-md rounded-md">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Register your CAB
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="cabModel"
              >
                Cab Model
              </label>
              <select
                id="cabModel"
                name="cabModel"
                value={formData.cabName}
                onChange={(e) => {
                  setFormData({ ...formData, cabName: e.target.value });
                }}
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
            {formData.cabName === "Other" && (
              <div className="mb-4">
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
                  value={formData.otherCabName}
                  onChange={(e) => {
                    setFormData({ ...formData, cabName: e.target.value });
                  }}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            )}
            <div className="mb-4 relative">
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
                  onChange={(e) => {
                    setFormData({ ...formData, price: e.target.value });
                  }}
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
            </div>
            {/* Address dropdown for states */}
            <div className="mb-4">
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
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                }}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
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
                onChange={handleImageChange}
                ref={filePickerRef}
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {imageFileUploadingProgress && (
                <RangeSlider
                  sizing="sm"
                  className="w-72 mx-auto"
                  value={imageFileUploadingProgress || 0}
                  text={`${imageFileUploadingProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root: {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    path: {
                      stroke: `rgba(62, 152, 199, ${
                        imageFileUploadingProgress / 100
                      })`,
                    },
                  }}
                />
              )}
            </div>
            {imageFileUploadError && (
              <Alert color="failure" className="my-5">
                {imageFileUploadError}
              </Alert>
            )}
            {error && (
              <Alert color="failure" className="my-5">
                {error}
              </Alert>
            )}
            {submit && (
              <Alert color="success" className="my-5">
                {submit}
              </Alert>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                {loading ? (
                  <div className="flex gap-4">
                    <Spinner />
                    <p>"Loading"</p>
                  </div>
                ) : (
                  "Register Cab"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          {registeredCabs.map((cab, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cab.driverName}</div>
                <p className="text-gray-700 text-base mb-2">{cab.cabModel}</p>
                {cab.otherCabModel && (
                  <p className="text-gray-700 text-base mb-2">
                    {cab.otherCabModel}
                  </p>
                )}
                <p className="text-gray-700 text-base mb-2">{cab.price}</p>
                {/* Display state */}
                <p className="text-gray-700 text-base mb-2">
                  State: {cab.address}
                </p>
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
