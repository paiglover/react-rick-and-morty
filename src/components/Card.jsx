import '../styles/Card.css'
import jerry from '../assets/jerry.jpeg'

const Card = ({name, status, race, LKL, firstSeenIn}) => {

  return (
    <div>
      <>
      <div className="card-container">
        <div className="card-img">
          <img className='characterImage' src={jerry}/>
        </div>
        <div className="card-info">
          <p className='white-text'>{name}</p>
          <p className='white-text'> 🟢 {status} - {race}</p>
          <p className='gray-text'> Last known location: </p>
          <p className='white-text'>{LKL}</p>
          <p className='gray-text'> First seen in:  </p>
          <p className='white-text'>{firstSeenIn}</p>
        </div>
      </div>
    </>
    </div>
  )
}

export default Card