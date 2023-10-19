import logo from './logo.svg';
import './App.css';
import Random from './Random';
import Tag from './Tag';
import { useEffect } from 'react';
function App() {

  return (
    
    <div className='background w-full h-full  flex flex-col relative items-center'>
<h1 className='bg-white rounded-lg  text-4xl  font-bold w-11/12 text-center mt-[40px]  py-2 px-10'>RANDOM GIFS</h1>
<div className='flex flex-col w-full items-center gap-y-10 mt-[30px] rounded-lg'>
<Random></Random>

<Tag></Tag>
</div>

    </div>

  );
}

export default App;
