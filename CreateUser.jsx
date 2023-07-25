import React, { useState } from 'react'
import style from "./home.module.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const CreateUser = () => {

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
    // console.log(name);
    // console.log(sal);
    // console.log(Company);

    let payload = {name,sal,Company}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
      console.log("Data Successfully Uploaded");
    })
    .catch(()=>{
      console.log("Something went Wrong");
    })
    navigate("/users")
  }
  return (
    <div id={style.myform}>
        <article>
            <h2>Fill Your Details</h2>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={nameData}/><br></br>
            <label htmlFor="">Salary</label>
            <input type="number" value={sal} onChange={salData}/><br></br>
            <label htmlFor="">Company</label>
            <input type="text" value={Company} onChange={CompanyData} /><br></br>
            <button onClick={FormHandle}>Submit</button>
        </article>
    </div>
  )
}
