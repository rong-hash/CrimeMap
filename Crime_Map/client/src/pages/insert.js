
import React from "react";
import './page.css';
import { useState } from 'react';
import Axios from 'axios'
import Select from 'react-select'

const Insert = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [passward, setPassward] = useState("");
    const Sex_Option = [{value: "male",   label: "male"},
                        {value: "female", label: "female"},
                        {value: "other",  label: "other"}]
    const adduser = async () =>{
      await Axios.post('http://localhost:3001/insert', {
        name: name, 
        sex: sex, 
        passward: passward}).then(() => {
          console.log("success");
        });
    };
    return (
        <div className="App">
        <div className = "information">
            <label>Name:</label>
            <input type = "text" 
            onChange={(event) => {
            setName(event.target.value);
            }}/> 
            <label>Sex:</label>
            <div className='SelectCrimeType'>
              <Select options={Sex_Option}
                      onChange={setSex}/>
            </div>
            <label>Passward:</label>
            <input type = "text" 
            onChange={(event) => {
            setPassward(event.target.value);
            }}/> 
            <button onClick = {adduser}>Sign in</button>
        </div>
        </div>
  );
};
  
export default Insert;