import React, { useEffect } from 'react'
import style from "./home.module.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditUsers = () => {
    let [name, setName] = useState("");
    let [sal, setSal]=useState();
    let [Company, setCompany]=useState("");

    let navigate = useNavigate()

    let nameData=(e)=>{
      setName(e.target.value);
    }
  
    let salData=(e)=>{
      setSal(e.target.value);
    }
  
    let CompanyData=(e)=>{
      setCompany(e.target.value);
    }

    let FormHandle=()=>{
      let payload ={name,sal,Company}
      axios.put(`http://localhost:3000/users/${index}`,payload)
      .then(()=>{
        console.log("Data updated successfully");
      })
      .catch(()=>{
        console.log("Something you done Wrong don't blame me");
      })
      navigate("/users")
    }
    
    let {index}=useParams()
    console.log(index);
    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${index}`)
      .then((response)=>{
        setName(response.data.name)
        setSal(response.data.sal);
        setCompany(response.data.Company);
      })
      .catch(()=>{
        console.log("Data not Found");
      })
    },[])
  return (
    <div id={style.myform}>
        <article>
            <h2>Update Your Details</h2>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={nameData}/><br></br>
            <label htmlFor="">Salary</label>
            <input type="number" value={sal} onChange={salData}/><br></br>
            <label htmlFor="">Company</label>
            <input type="text" value={Company} onChange={CompanyData}/><br></br>
            <button onClick={FormHandle}>Update</button>
        </article>
    </div>
  )
}

export default EditUsers