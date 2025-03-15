import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TylerHeadshot from "./assets/TylerHeadshot2_Edited.jpeg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen'>
        <header className='bg-blue-500 w-full'>
          <h1>Tyler Boerner</h1>
        </header>
      </div>

      <div className='w-screen sticky top-0'>
        <ul className='flex space-x-4 bg-blue-800'>
          <li className='text-white px-4 py-2 rounded w-1/2'>Home</li>
          <li className='text-white px-4 py-2 rounded'>6th Grade</li>
          <li className='text-white px-4 py-2 rounded'>7th Grade</li>
          <li className='text-white px-4 py-2 rounded'>8th Grade</li>
        </ul>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-5'>
        <div className='col-start-1 col-end-2 align-middle'>
          <h2 className='font-bold place-self-center'>Tyler Boerner</h2>
          <img src={TylerHeadshot} alt="Headshot" className='w-48 place-self-center border-3 border-blue-500 rounded-2xl shadow-[0_0_15px_#3b82f6]'></img>
        </div>
        
        <div className='col-start-2 col-end-4 place-self-start align-middle'>
          <h3 className=' font-bold text-left ml-2'>Bio:</h3>
          <p className='text-left'>Hello there! My name is Tyler Boerner, and I am currently finishing my Computer Science degree at Arkansas Tech University. I have also completed a Certificate of Proficiency in Mathematics. Now, I am looking to shift gears and get a job teaching middle school math. I hope to begin the Teach-In-Residency program at UMSL in the fall, but I need to get a job with a district that is willing to let me work on a provisional certificate. </p>
        </div>

        <div className='col-start-4 place-self-start justify-items-end align-middle'>
          <h3 className='font-bold'>Contact Info:</h3>
          <p className=''>8500 General Grant Ln.</p>
          <p className=''>Affton, MO 63123</p>
          <p><a href='mailto:tjb0013@gmail.com'>tjb0013@gmail.com</a></p>
          <p><a href="tel:+16187724342">618-772-4342</a></p>
        </div>
      </div>

      <div className='flex space-x-3 mt-10 gap-4 justify-evenly flex-wrap'>
        <div className='w-72 h-72 border-3 border-blue-500 rounded shadow-[0_0_15px_#3b82f6] p-2'>
          <h3 className=' font-bold text-left ml-2'>Skills:</h3>
          <p className='text-left'></p>
        </div>

        <div className='w-72 h-72 border-3 border-blue-500 rounded shadow-[0_0_15px_#3b82f6] p-2'>
          <h3 className=' font-bold text-left ml-2'>Education:</h3>
          <p className='text-left'>Computer Science Degree</p>
        </div>

        <div className='w-72 h-72 border-3 border-blue-500 rounded shadow-[0_0_15px_#3b82f6] p-2'>
          <h3 className=' font-bold text-left ml-2'>Experience:</h3>
          <p className='text-left'></p>
        </div>
      </div>

      
    </>
  )
}

export default App
