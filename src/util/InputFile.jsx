import React, { useEffect, useState } from 'react'
import ImageToBase64 from './ImageToBase64';
import { useDispatch} from 'react-redux';
import { addImages } from '../store/slices/SchoolSlice';

const InputFile = ({id,isPres,imgId}) => {

    const [file,setFile] = useState('');
    const dispatch = useDispatch();

    

    const handleData = (e) => {
        if (e.target.files.length < 1) return;
        ImageToBase64(e.target.files[0]).then(data => setFile(data));
      }

  useEffect(()=>{
    
    console.log("img dispatch")
    if(file==='') return;
     dispatch(addImages({id,isPres,imgId,file}))

  },[file])
    
  return (
      <>
        <div>
            <input type="file" onChange={handleData} />
            {file && <img src={file} alt='image' className='w-32'/>}
        </div>
      </>
  )
}

export default InputFile