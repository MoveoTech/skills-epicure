import { useEffect, useState } from 'react'
import { IRestaurant } from '../../interfaces/IRestaurant.interface'
import { fetchPopularRestaurants } from '../../services/dataService.service'
import './Stripe.css'

interface StripeProps {
    title : string
    all : boolean
}

const Stripe = (props : StripeProps) => {
    const [restaurants, setRestaurants] = useState<Array<IRestaurant>>()

    useEffect(() => {
        (async () => {
        const data = await fetchPopularRestaurants()
        setRestaurants(data as Array<IRestaurant>)
        })()
    }, [])

    return (
        <div className='stripe-container'>
            <h2 className='title'>{props.title}</h2>
            <div className='cards-container'>
            </div>
            { props.all ? 
            <div className='all-container'>
                <h2 className='all-text'>All Restaurants</h2>
            </div> 
            : ""}
        </div>
    )
  }
  
  export default Stripe