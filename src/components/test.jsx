import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://swapi.dev/api/'


const Testo = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res)
      setData(res.data.results)
    })
    .catch(err =>
      console.log(err)
    )
  }, [])

  return (
    <>
      <ul>
        {data.map(character => 
          <li>{character.name}</li>)}
      </ul>
    </>
  );
};
export default Testo;