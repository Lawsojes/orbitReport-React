import React from 'react'
import satData from "./satData";
import './styling.css'

const Buttons = ({displaySats, filterByType, setSat}) => {
  return (
    <div className='flex-container'>
         
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}


      <button  onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export  {Buttons};