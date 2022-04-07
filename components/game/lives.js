import React from 'react'

export default function Lives({ livesLeft }) {
  return (
  <div className="hangman-container">
    
    <div >
      Lives: {livesLeft}
    </div>
  </div>
  )
}