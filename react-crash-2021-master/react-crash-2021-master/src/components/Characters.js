import Character from './Character'
import React, { useState } from "react";

const Characters = ({ characters, onDelete, onToggle }) => {
  const [ mass, setMass ] = useState(0);
  const [ height, setHeight ] = useState(0);

  const handleMass = (e)=>{
    setMass( e.target.value );
  }
  const handleHeight = (e)=>{
    setHeight( e.target.value );
  }


  return (
    <>
      <h3>Filter: </h3>
      <label>Mass above: {mass}</label><br />
      <input type="range" min="0" max="300" step={"1"} onInput={handleMass}/>
      <br />
      <label>Height above: {height} </label><br />
      <input type="range" min="0" max="300" step={"1"} onInput={handleHeight}/>
      <hr /><br/>
      {
        characters.filter(ch => {return ch.mass>parseInt(mass,10) && ch.height>parseInt(height,10)})
        .map((character, index) => (
          <Character key={index} character={character} onDelete={onDelete} onToggle={onToggle} />
        ))
      }
    </>
  )
}
export default Characters
