
import { useState } from 'react';
import Spinner from './spinner';
import useGif from "./useGif";
function Tag() {
  const [tag,settag]=useState('car')
  const { gif, spinn, fachData } = useGif(tag);
    
    
  return (
    <div className='w-1/2  bg-red-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
       <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
       {spinn ? <Spinner/>:<img src={gif} width={450} alt="" />  }
       <input type="text" className='  w-10/12 text-lg py-2 rounded-lg bg-white text-center mx-[3px] ' onChange={(event) =>{ settag(event.target.value)}} value={tag} />
       <button onClick={()=>{fachData(tag)}} className='mb-[20px] w-10/12 py-2 rounded-lg bg-yellow-500'>Generate</button>
    </div>
  )
}

export default Tag
