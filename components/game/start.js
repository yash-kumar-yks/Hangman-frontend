import React, { useState } from 'react'
import '../../styles/components/start.css'
export default function Start({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
      className='input_start'
        type="text" 
        placeholder="Name"
        onChange={(e) => setName(e.target.name)} 
        name={name} 
      />
      <button
      className="button_start"
        onClick={() => onStart(name)}
      >
        Start
      </button>
    </div>
  )
}