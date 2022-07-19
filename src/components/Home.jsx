import { useState, useEffect } from 'react'
import '../styles/Home.css'
import axios from 'axios'
import Card from './Card'

const Home = () => {
    const [credits, setCredits] = useState(800);
    const [state, setState] = useState();
    const [map, setMap] = useState([]);

    const url = 'https://rickandmortyapi.com/api/character/'
    
    useEffect(() => {
      axios.get(url).then((response) => {
        setState(response.data);
      });
    }, []);

  const dummy = {
    name: 'Jerry',
    status: 'Alive',
    race: 'Human',
    LKL: 'Earth (Replacement dimension)',
    firstSeenIn: 'Rick Potion #9'
  }

  const displayResults = () => {
    const mapper = state.results.map(character => {
      <Card name={character.name} status={character.status} species={character.species} image={character.image} />
    })
  }


  return (
    <div className='home-container'>
        <header>
            <h1 className='home-header'> Rick and Morty Collectible Cards </h1>
        </header>

        <main>
            <div className="user">
                <h4>Credits: {credits}</h4>
                <h4>Next drop: 8HRS</h4>
                {/* <div className="profile-picture">
                    <img className='profile-image'/>
                </div> */}
            </div>

            <div className="cards-container">
              <button className='btn-load-results' onClick={() => displayResults()}> Load results </button>
                {
                  mapper
                }
            </div>
        </main>

    </div>
  )
}

export default Home