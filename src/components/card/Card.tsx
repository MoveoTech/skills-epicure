import { IDish } from '../../interfaces/IDish.interface'
import { IRestaurant } from '../../interfaces/IRestaurant.interface'
import Rating from '../rating/Rating'
import './Card.css'

interface CardProps {
    type: string
    data : any
}

const Card = (props : CardProps) => {
  const curr = "currency.svg"
    let description
    switch (props.type) {
      case 'restaurants':
        const restaurant = props.data as IRestaurant
        description = <div className='desc-container'>
          <h3>{restaurant.name}</h3>
          <h5>{restaurant.chef}</h5>
          <Rating rating = {restaurant.rating}/>
        </div>
        break
      case 'dishes':
        const dish = props.data as IDish
        description = <div className='desc-container dish'>
          <h3>{dish.name}</h3>
          <h5>{dish.desc}</h5>
          { dish.special ? (<img src={require(`../../resources/icons/${dish.special}.svg`)} className="specials-icon" key={dish.name} alt={dish.name}/>) : 
          <div className='cost-container'>
              <div className='line'/>
              <h5 className='h-cost'>
                <img src={require(`../../resources/icons/${curr}`)} className="cost-icon" alt="nis"/>
                {dish.cost}
              </h5>
              <div className='line'/>
          </div>}
      </div>
        break
      default:
        break
    }

    return (
      <div className='card-container'>
        <img src={require(`../../resources/images/${props.data.image}`)} className="card-image" alt={props.data.image}/> 
        {description}
      </div>  
    )
  }
  
  export default Card