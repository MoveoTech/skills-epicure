import { IRestaurant } from '../../interfaces/IRestaurant.interface'
import './Card.css'

interface CardProps {
    restaurant : IRestaurant
}

const Card = (props : CardProps) => {
    return (
      <div className='card-container'>
        <img src={require(`../../resources/images/${props.restaurant.image}`)} className="card-image" alt={props.restaurant.image}/> 
        <div className='desc-container'>
            <h3>{props.restaurant.name}</h3>
            <h5>{props.restaurant.chef}</h5>
        </div>
      </div>  
    )
  }
  
  export default Card