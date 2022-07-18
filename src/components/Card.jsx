import '../styles/Card.css'
import jerry from '../assets/jerry.jpeg'

const Brad = {
  name: 'Brad',
  status: 'Alive',
  race: 'Human',
  LKL: 'Earth (Replacement dimension)',
  firstSeenIn: 'Rick Potion #9'
}

const Card = () => {

  return (
    <div>
      <>
      <div className="card-container">
        <div className="card-img">
          <img className='characterImage' src={jerry}/>
        </div>
        <div className="card-info">
          <p className='white-text'>{Brad.name}</p>
          <p className='white-text'> 🟢 {Brad.status} - {Brad.race}</p>
          <p className='gray-text'> Last known location: </p>
          <p className='white-text'>{Brad.LKL}</p>
          <p className='gray-text'> First seen in:  </p>
          <p className='white-text'>{Brad.firstSeenIn}</p>
        </div>
      </div>
    </>
    </div>
  )
}

export default Card