import './Chef.css'
import { IChef } from '../../interfaces/IChef.interface'
import Stripe from '../stripe/Stripe'

interface ChefProps {
  chef: IChef
  weeklyRestaurants: Array<any>
  weekly: boolean
}


function Chef(props: ChefProps) {
  
  return (
      <div className={props.weekly ? 'weekly-chef-container' : 'chef-container'}>
        {props.weekly ? <h2 className='title'>Chef of the week:</h2> : "" }
        {props.chef ? 
        <div className='chef-week'> 
            <div className='chef-desc'>
                <div className={props.weekly ? 'weekly-chef-image' : 'chef-image'}>
                    <img className='chef-image' src={require(`../../resources/images/${props.chef.image}`)} alt={props.chef?.last_name}/>
                    <h3 className={props.weekly ? 'weekly-chef-name' : 'chef-name'}>{props.chef.first_name + " " + props.chef.last_name}</h3>
                </div>
                { props.weekly ? <h5 className='chef-text-container'>{props.chef.desc}</h5> : "" }
            </div>
            { (props.weekly && props.weeklyRestaurants) ? <Stripe title="Yossi's Restaurants:" all={false} type="weekly" data={props.weeklyRestaurants}/> : "" }
        </div> : "" }
      </div>
  )
}


export default Chef