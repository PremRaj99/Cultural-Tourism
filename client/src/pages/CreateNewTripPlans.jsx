import React, { useRef, useState,useEffect } from 'react'
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
  import { app } from "../firebase.js";

  export default function CreateNewTripPlans() {
      
    const[name,setName]  = useState("");
    const[description,setDescription]  = useState("");
    const[price,setPrice]  = useState("");
    const[image,setImage]  = useState("");
    const[cabId,setCabId]  = useState("");
    const[hotelId,setHotelId]  = useState("");
    const[placeId,setPlaceId]  = useState("");
    const[noOfDay,setNoOfDay]  = useState("");
    const[address,setAddress]  = useState("");

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
        });
      }
    );
  };



  return (
    <div className='flex flex-col gap-7 w-full border-2 ' >
        <h1 className='mx-auto bold'>Create New Trip Plans</h1>
  <form action="" className='flex flex-col mx-auto w-auto'>  
<label htmlFor="">Package Name</label>
<input type="text"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
value={name}
placeholder='Enter package name'
onChange={(e)=>{setName(e.target.value)}}
 />

<label>State</label>
<select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        id="location"
        name="guideInfo.location"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        
        required
      >
        <option value="" disabled>
          Select guide location
        </option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Goa">Goa</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli">
          Dadra and Nagar Haveli
        </option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="">Description</label>
<input type="text"
   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={description}
placeholder='Description...'
onChange={(e)=>{setDescription(e.target.value)}}
 />
      <label htmlFor="">Price</label>
<input type="text"
value={price}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
placeholder='Enter Price'
onChange={(e)=>{setPrice(e.target.value)}}
 />
      <label htmlFor="">CabId</label>
<input type=""
   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={cabId}
placeholder='Enter CabId'
onChange={(e)=>{setCabId(e.target.value)}}
 />
      <label htmlFor="">HotelId</label>
<input type="text"
value={hotelId}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
placeholder='Enter HotelId'
onChange={(e)=>{setHotelId(e.target.value)}}
 />
      <label htmlFor="">PlaceId</label>
<input type="text"
value={placeId}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
placeholder='PlaceId'
onChange={(e)=>{setPlaceId(e.target.value)}}
 />
      <label htmlFor="">Number of Day</label>
<input type="text"
   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={noOfDay}
placeholder='Enter number of Days'
onChange={(e)=>{setNoOfDay(e.target.value)}}
 />

          
<label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="photo"
              >
                Guide Photo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleImageChange}
                ref={filePickerRef}
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



</form>    
    </div>
  )
}
