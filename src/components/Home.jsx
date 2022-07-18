import { useState, useEffect } from 'react'
import '../styles/Home.css'
import axios from 'axios'
import Card from './Card'

const Home = () => {
    const [credits, setCredits] = useState(800)
    const [state, setState] = useState()
    
  //   useEffect(() => {
  //   axios.get('https://rickandmortyapi.com/api/character/')
  //     .then(function (res) {
  //       setState(res)
  //     })
  // }, [])


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
                <div>
                  {Card()}
                </div>
            </div>
        </main>

    </div>
  )
}

export default Home