import React from "react";

export default function Word({
  maskedWord 
}) {
  return (
    <div>
      {maskedWord.map((letter, i) => (
        < >
            <span key={i}>&nbsp;{letter}&nbsp;</span>
        </>
      ))}
    </div>
  )}