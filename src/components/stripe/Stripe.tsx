import React from 'react'
import './Stripe.css'

interface StripeProps {
    title : string
    all : boolean
}

const Stripe = (props : StripeProps) => {
    return (
        <div className='stripe-container'>
            <h2 className='title'>{props.title}</h2>
            { props.all ? 
            <div className='all-container'>
                <h2 className='all-text'>All Restaurants</h2>
                {/* <img src={arrows}/> */} 
            </div> 
            : ""}
        </div>
    )
  }
  
  export default Stripe