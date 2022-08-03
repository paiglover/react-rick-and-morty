import '../styles/Card.css'

const Card = ({image, name, status, species, origin, gender}) => {

  return (
    <div>
      <>
      <div className="card-container">
        <div className="card-img">
          <img className='characterImage' src={image}/>
        </div>
        <div className="card-info">
          <p className='white-text'>{name}</p>
          <p className='white-text'> {status} - {species}</p>
          <p className='gray-text'> Origin: </p>
          <p className='white-text'>{origin}</p>
          <p className='gray-text'> Gender:  </p>
          <p className='white-text'>{gender}</p>
        </div>
      </div>
    </>
    </div>
  )
}

export default Card