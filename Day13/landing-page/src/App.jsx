import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-6 items-center flex-col min-h-screen bg-gray-400 justify-center flex">
        <header className='text-center m-6'>
          <h1 className='font-bold text-gray-800 text-4xl'>Welcome to my Landing Page</h1>
          <p className='text-gray-600 mt-2'>Discover more about what I do!</p>
        </header>
        <main className='max-w-3xl bg-white mt-2 rounded-2xl shadow-lg text-center'>
          <p className='text-gray-600 mb-4'>I like web programming!</p>
          <button className='bg-blue-600 text-white hover:bg-blue-900 py-3 rounded-lg transition'>Get Started</button>
        </main>
        <footer className='text-gray-700 text-center m-6'>
          All Rights Reserved
        </footer>
      </div>
    </>
  )
}

export default App
