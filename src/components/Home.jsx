import { useState, useEffect } from 'react'
import '../styles/Home.css'
import axios from 'axios'
import Card from './Card'
const url = 'https://rickandmortyapi.com/api/character/'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(url)
      .then(res => {
        setData(res.data.results)
        console.log(res)
      })
      .catch(err =>
        console.log(err)
      )
    }, [])

  return (
    <div className='home-container'>
      <header>
          <h1 className='home-header'> Rick and Morty Collectible Cards </h1>
      </header>

      <main>
          <div className="user">
          </div>

          <div className="cards-container">

          {data.map(character => 
          <Card key={character.id} name={character.name} gender={character.gender} status={character.status} species={character.species} origin={character.origin.name} image={character.image}/>
          )
          }
          </div>
      </main>
    </div>
  )
}

export default Home