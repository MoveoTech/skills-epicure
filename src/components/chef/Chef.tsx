import './Chef.css'
import { useState, useEffect } from 'react'
import { IChef } from '../../interfaces/IChef.interface'
import { fetchChefOfWeek, fetchStripeData } from '../../services/dataService.service'
import Stripe from '../stripe/Stripe'

interface ChefProps {
  chef: IChef
  weeklyRestaurants: Array<any>
  weekly: boolean
}


function Chef(props: ChefProps) {
  
  return (
      <div className='chef-container'>
        <h2 className='title'>Chef of the week:</h2>
        {props.chef ? 
        <div className='chef-week'> 
            <div className='chef-desc'>
                <div className='chef-image'>
                    <img src={require(`../../resources/images/${props.chef.image}`)} alt={props.chef?.last_name}/>
                    <h3 className='chef-name'>{props.chef.first_name + " " + props.chef.last_name}</h3>
                </div>
                <h5 className='chef-text-container'>{props.chef.desc}</h5>
            </div>
            { props.weeklyRestaurants ? <Stripe title="Yossi's Restaurants:" all={false} type="weekly" data={props.weeklyRestaurants}/> : "" }
        </div> : "" }
      </div>
  )
}


export default Chef