import axios from "axios";
import { useState, useEffect } from "react";

function Personal_Info(){
    const [personal, setPersonal] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/personal_json')
        .then(res=>setPersonal(res.data))
        .catch(err=>console.error("Error fetching personal information:", err));
      }, [])

      return(
        <div>
            <h2>Personal Info</h2>
            {personal.map(info => (
                <div key={info.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px'}}>
                    <h3>{info.name}</h3>
                    <p>{info.email}</p>
                    <p>{info.phone_number}</p>
                </div>
            ))}
        </div>
      );
}

export default Personal_Info;