import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Project4.css';

function Project4() {
  const [users, setUsers] = useState([])
  const tableKeys = [
    'Sno',
    'Profile Pic',
    'firstName',
    'lastName',
    'gender',
    'email',
    'username',
    'domain',
    'ip',
    'university'

  ]
  // const [tableKeys, setTableKeys] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const resp = await axios.get("https://dummyjson.com/users").then(res => res.data.users)
      console.log(resp)
      setUsers(resp)
      // setTableKeys(Object.keys(resp[0]))
    }
    fetchData();

  }, [])

  const capitalize = (str) => {
    if(str.length <= 2)
      return str.toUpperCase();
    
    const lowerCaseString = str.toLowerCase(), // convert string to lower case  
      firstLetter = str.charAt(0).toUpperCase(), // upper case the first character
      strWithoutFirstChar = lowerCaseString.slice(1); // remove first character from lower case string 

    return firstLetter + strWithoutFirstChar;

  }


  return (
    <div className="Api">
      <h1 className='apiHead'>Project-4 Dummy data</h1>

      <div className='box'>
        <table>
          <thead>
            <tr>
              {tableKeys ? tableKeys.map((value, index) => {
                return (
                  <th key={index}>{capitalize(value)}</th>
                )
              }) : null}
            </tr>
          </thead>
          <tbody>

            {users ? users.map((user) => {
              return (
                <tr>
                  {tableKeys.map((key, index) => {

                    if (index === 0)  // Sno
                      return <td key={index}>{user.id}</td>

                    if (index === 1)
                      return <td key={index}><img src={`https://robohash.org/${user.id}.png?size=60x60`} alt="" /></td>
                    console.log(user['firstname'])
                    return (
                      <td key={index}>{user[key]}</td>
                    )
                  })}
                </tr>
              )
            })
              : null}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project4;