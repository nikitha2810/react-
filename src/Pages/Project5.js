import React, { useState } from 'react';
import './styles/Project5.css';

function Project5() {
  const [dob, setDob] = useState([])
  const [age, setAge] = useState(-1)

  const calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const handleDobChange = (e) => {
    setDob(e.target.value);
    setAge(-1);   //reset age
  }

  return (
    <>
    <h1 className='age-head'>Project-5 Age Calculator</h1>
    <div className="Age">
      <div className="Age-container">
        <p className='age-p'><b>Enter your date of birth</b></p>
        <input type="date" onChange={handleDobChange} />
        <button className='btn' onClick={() => {setAge(calculate_age(new Date(dob)))}}>Calculate Your Age</button>
        {age >= 0 && <p className='present'>Your age is {age}</p>}
      </div>
    </div>
    </>
  );
}

export default Project5;