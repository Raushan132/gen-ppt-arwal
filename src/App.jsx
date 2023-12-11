import { useState } from 'react'
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';
import { useDispatch } from 'react-redux';
import { addFacilities } from './store/slices/SchoolSlice';
import GenBtn from './components/GenBtn';


function App() {
  const[facility,setFacility] = useState([]);

  const dispatch = useDispatch();
  
  
  const addFacility = ()=>{
    dispatch(addFacilities(facility.length));
    setFacility(prev=>[...prev,facility.length]);
    console.log("here")
  }
  console.log(facility)

  return (
    <>
      <div className='bg-black text-white md:px-16  py-10 min-h-screen'>
        <div className='flex flex-col  items-center gap-2'>
          <FirstForm />
          {facility.map((val,index)=>{
               return <SecondForm key={index} id={val}/>
              
          })}
         
        </div>
        <div className='flex justify-end md:px-16 px-2'>
           <div onClick={addFacility} className='w-10 h-10 flex justify-center items-center rounded-full bg-blue-400 text-2xl font-extrabold cursor-pointer'>+</div>
        </div>

          <div className='flex justify-center'>
             <GenBtn />
          </div>

      </div>


    </>
  )
}

export default App
