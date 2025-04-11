import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'

function Hobbies(){
    const [hobbies, setHobbies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/hobbies_json')
        .then(res=>setHobbies(res.data))
        .catch(err=>console.error("Error fetching hobbies:", err));
      }, [])

      return(
        <div>
            <h2 className="bg-blue-500">Hobbies</h2>
            {hobbies.map(hobby => (
                <div key={hobby.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px'}}>
                    <h3>{hobby.hobby}</h3>
                </div>
            ))}
        </div>
      );
}

export default Hobbies;