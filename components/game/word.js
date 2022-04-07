import React from "react";

export default function Word({ ActualWord, Playedletters }) {
  return (
    <div className="display-flex justify-content-around">
      {[...ActualWord].map((letter, i) => (
        <div key={i}>
          {Playedletters.has(letter) ? (
            <div className="display-word">{letter}</div>
          ) : (
            <div className="display-word">&nbsp;_&nbsp;</div>
          )}
        </div>
      ))}
    </div>
  );
}