import React, { useEffect, useState } from 'react'
import InputFile from '../util/InputFile';
import { useDispatch } from 'react-redux';
import { editFacilities } from '../store/slices/SchoolSlice';

const SecondForm = ({ id }) => {

   const [prevImages, setPrevImages] = useState([0]);
   const [presentImages, setPresentImages] = useState([0]);
   const [isSingleDay, setIsSingleDay] = useState(false);
   const [other, setOther] = useState('CLASSROOM');
   const[facilityName,setFacilityName] = useState('CLASSROOM')
   const[day,setDay] = useState(1);

   const dispatch = useDispatch();
   console.log("day",day);

   const FACILITY = ["CLASSROOM", "SMART CLASS", "MDM", "TOILET", "LIBRARY", "LABORATORY", "SPORTS", "GYM", "ICT LAB"]

   const addPrevImages = () => {
      console.log(presentImages)
      setPrevImages(prev => [...prev, prevImages.length])
   }

   const addPresentImages = () => {
      setPresentImages(prev => [...prev, presentImages.length])
   }

  const handleFacility = (e)=>{
        setFacilityName(e.target.value);

  }

  useEffect(()=>{
   const prevOrNot =isSingleDay?Number(day):0;
   dispatch(editFacilities({id,facilityName,isSingleDay,prevOrNot}))

  },[facilityName,isSingleDay,day])


   return (
      <>
         <div className=" bg-violet-500 md:w-2/3  py-4">

            <div>
               <label>Facility:</label>
               <select className='text-black' onChange={handleFacility}>
                  {FACILITY.map((val, index) => {
                     return <option className='text-black' value={val} key={index}>{val}</option>
                  })}

               </select>

            </div>

            <div >
               <label>Days</label>
               <select className='text-black' onChange={(e) => setIsSingleDay(!isSingleDay)}>
                  <option val="0">Both</option>
                  <option val="1">Single Day</option>
               </select>
               {isSingleDay && <select className='text-black' onChange={e=> {setDay(e.target.value)}} >
                  <option value="1">Present Date</option>
                  <option value="2">Previous Date</option>
               </select>}
            </div>

            {!isSingleDay && <div className='border-2 mx-2 my-2 p-2'>
               <div>PREVIOUS IMAGES:</div>

               <div className='flex flex-wrap gap-5'>
               {prevImages.map((val, index) => {
                  return <InputFile key={index} id={id} isPres={false} imgId={index} />
               })}
               </div>
               <div className='flex justify-end'>
                  <div className='px-4 py-2 bg-blue-400 cursor-pointer text-sm' onClick={addPrevImages}>Add Images</div>
               </div>
            </div>}

            <div className='border-2 mx-2 my-2 p-2'>
               <div>PRESENT IMAGES:</div>

               <div className='flex flex-wrap gap-5'>
                  {presentImages.map((val, index) => {
                     return <InputFile key={index} id={id} isPres={true} imgId={index} />
                  })}
               </div>
               <div className='flex justify-end'>
                  <div className='px-4 py-2 bg-blue-400 cursor-pointer text-sm' onClick={addPresentImages}>Add Images</div>
               </div>
            </div>
         </div>
      </>
   )
}

export default SecondForm