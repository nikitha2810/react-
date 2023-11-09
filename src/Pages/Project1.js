import React, { useState, useEffect } from 'react'
import './styles/Project1.css'

export default function Project1() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    useEffect(() => {

        if(text !== ""){
          console.log("va")
          console.log(text.split(' '))
          setCount(text.match(/\S+/g).length)
        }
        
      },[text])

  return (
    <div className='main'>
      <h1 className='head'>Project-1</h1>
      <div className='container'>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea text={text} rows="10" cols="60" onChange={(e) => setText(e.target.value)}></textarea>
        <p>Word Count: {count}</p>
      </div>
    </div>
  )
}
