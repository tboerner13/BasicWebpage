import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hobbies from './Hobbies';
import Personal_Info from './Personal_Info';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul className=''>
            <li className=''><Link to="/personal">Personal Info</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/personal" element={<Personal_Info />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
