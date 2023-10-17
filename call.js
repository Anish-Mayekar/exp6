import React from 'react'
import  { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Call = (props) => {

        const [inputData, setInputData] = useState('');
        const navigate = useNavigate();
      
        const handleInput = (e) => {
          setInputData(e.target.value);
        };
      
        const handleSubmit = () => {
          navigate(`/nav?inputData=${inputData}`);
        };
    
    return (
        <div>
            My name is {props.name}
            <br>
            </br>
            My rollno is {props.rollno}
            <br></br>
            My age is {props.age}
            <br></br>
            My phone number is {props.phone}
            <br></br>
            <input
               type="text"
               value={inputData}
               onChange={handleInput}
               placeholder="Enter text"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Call
