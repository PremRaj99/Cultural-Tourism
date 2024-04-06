import React from 'react'

export default function OngoingTrip() {
  return (
    <div className='flex flex-col mx-auto gap-34px'>

      <h1 className='font-bold flex justify-center my-5 '>Ongoing Trip</h1>
     
     <div className='flex justify-around align-center gap gap-7 '>

      <div  >
      <h3 className='font-bold my-2'>Trip Name</h3>
      <h4>Goa WeekEnd</h4>
      </div>

      <div>   
      <h3 className='font-bold my-2'>Trip Status</h3>
      <h4>Active</h4>
      </div>
      
      <div>
      <h3 className='font-bold my-2'>Trip Package Price</h3>
      <h4>Rs. 22000</h4>
      </div>

     </div>
    </div>
  )
}
