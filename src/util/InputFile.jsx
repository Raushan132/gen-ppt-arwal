import React, { useState } from 'react'
import ImageToBase64 from './ImageToBase64';

const InputFile = () => {
    const [file,setFile] = useState('');

    const handleData = (e) => {
        if (e.target.files.length < 1) return;
        ImageToBase64(e.target.files[0]).then(data => setFile(data));
      }
    
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