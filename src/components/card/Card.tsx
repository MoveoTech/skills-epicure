import { useNavigate } from 'react-router-dom'
import { IDish } from '../../interfaces/IDish.interface'
import { IRestaurant } from '../../interfaces/IRestaurant.interface'
import Rating from '../rating/Rating'
import './Card.css'

interface CardProps {
    type: string
    data : any
}

function Card (props : CardProps) {
    const totalStars = 5
    let card = createCardWithType(props.type, props.data)
    const navigate = useNavigate()


    function createCardWithType(type: string, data: any) {
      const curr = "currency.svg"
      let description
      switch (type) {
        case 'restaurants':
        case'restaurants-page':
          const restaurant = data as IRestaurant
          description = <div className='card-container' onClick={() => navigate(`/restaurant-page/${restaurant.name}`, {state:{data: restaurant}})}>
          <img src={require(`../../resources/images/${data.image}`)} className="card-image" alt={data.image}/> 
            <div className='desc-container'>
              <h3>{restaurant.name}</h3>
              <h5>{restaurant.chef}</h5>
              <Rating total={totalStars} rating = {restaurant.rating}/>
            </div>
          </div>
        break
        case 'dishes':
          const dish = data as IDish
          description = <div className='card-container'>
          <img src={require(`../../resources/images/${data.image}`)} className="card-image" alt={data.image}/> 
            <div className='desc-container dish'>
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
          </div>
        break
        case 'restaurant-dishes':
          const restaurantDish = data as IDish
          description = <div className='card-container'>
          <img src={require(`../../resources/images/${data.image}`)} className="card-image restaurant-dish-card-image" alt={data.image}/> 
            <div className='desc-container restaurant-dish-desc'>
              <h3 className='restaurant-dish-text'>{restaurantDish.name}</h3>
              <h5 className='restaurant-dish-desc-text'>{restaurantDish.desc}</h5>
              { restaurantDish.special ? (<img src={require(`../../resources/icons/${restaurantDish.special}.svg`)} className="specials-icon" key={restaurantDish.name} alt={restaurantDish.name}/>) : 
              <div className='cost-container'>
                  <div className='line line-restaurant-dish'/>
                  <h5 className='h-cost restaurant-dish-cost'>
                    <img src={require(`../../resources/icons/${curr}`)} className="cost-icon" alt="nis"/>
                    {restaurantDish.cost}
                  </h5>
                  <div className='line line-restaurant-dish'/>
              </div>}
            </div>
          </div>
        break
        case 'weekly':
          const chefRestaurant = data as IRestaurant
          description = <div className='card-container' onClick={() => navigate(`/restaurant-page/${chefRestaurant.name}`, {state:{data: chefRestaurant}})}>
          <img src={require(`../../resources/images/${data.image}`)} className="card-weekly" alt={data.image}/> 
            <div className='desc-container card-weekly-desc'>
              <h2 className='chef-restaurant-title'>{chefRestaurant.name}</h2>
            </div>
          </div>
        break
        default:
        break
      }
    
      return description
    }

    return (
      <div>{card} </div>
    )
  }

export default Card