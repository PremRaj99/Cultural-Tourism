import React from 'react'

export default function OngoingTrip() {
  return (
    <div className='flex flex-col mx-auto gap-34px'>

      <h1 className='font-bold flex justify-center my-5 text-4xl '>Ongoing Trip</h1>
     
     <div className='flex justify-around align-center gap gap-7  '>

      <div  >
      <h3 className='font-bold my-2'>Trip Name</h3>
      <h4>1.    Goa WeekEnd</h4>
      <h4>2.    Mumbai Holiday</h4>
      <h4>3.    Taj Visit</h4>
      <h4>4.    Spiritual Tour</h4>
      <h4>5.    Bengaluru Visit</h4>
      </div>

      <div>   
      <h3 className='font-bold my-2'>Trip Status</h3>
      <h4>Active</h4>
      <h4>Active</h4>
      <h4>Active</h4>
      <h4>Active</h4>
      <h4>Active</h4>
      
      </div>
      
      <div>
      <h3 className='font-bold my-2'>Trip Package Price</h3>
      <h4>Rs. 22000</h4>
      <h4>Rs. 39000</h4>
      <h4>Rs. 12000</h4>
      <h4>Rs. 20000</h4>
      <h4>Rs. 40000</h4>
     
      </div>

     </div>
    </div>
  )
}