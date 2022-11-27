import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IDish } from '../../../interfaces/IDish.interface'
import { IRestaurant } from '../../../interfaces/IRestaurant.interface'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import Stripe from '../../stripe/Stripe'
import './Restaurant.css'


function Restaurant() {
    const { state } = useLocation()
    const [restaurant, setRestaurant] = useState<IRestaurant>(state.data)
    const [dishes, setDishes] = useState<Array<IDish>>(restaurant.dishes)


    return ( 
        <div className="restaurant-page-container">
        <Header/>
        <img src={require(`../../../resources/images/${restaurant.banner}`)} className="restaurant-banner" alt={restaurant.image}/> 
        <h1 className='restaurant-title'>{restaurant.name}</h1>
        <h1>{restaurant.chef}</h1>
        <div className='tags-container'>
            <div className='clock'/>
            <div className='menu-button'>Open now</div>
        </div>
        <Stripe title="" all={false} type="restaurant-dishes" data={dishes}/> 
        <Footer/>
      </div>
    )

}

export default Restaurant