import React from 'react'
import Gen from '../util/Gen'
import { useSelector } from 'react-redux'

const GenBtn = () => {
    
  const data = useSelector((state=> state.schoolInfo));
   console.log(data)
  const handleGenBtn = ()=>{
       
      Gen(data)
  }

  return (
     <>
       <div className='px-4 py-2 bg-green-400 cursor-pointer rounded-lg' onClick={handleGenBtn}>Genrate PPT</div>
     </>
  )
}

export default GenBtn