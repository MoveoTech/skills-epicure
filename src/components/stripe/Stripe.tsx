import { useEffect, useState } from 'react'
import { fetchStripeData } from '../../services/dataService.service'
import Card from '../card/Card'
import './Stripe.css'

interface StripeProps {
    title : string
    all : boolean
    type: string
}

const Stripe = (props : StripeProps) => {
    const [data, setData] = useState<Array<any>>()

    useEffect(() => {
        (async () => {
        const data = await fetchStripeData(props.type)
        setData(data as Array<any>)
        })()
    }, [])

    return (
        <div className='stripe-container'>
            <h2 className='title'>{props.title}</h2>
            <div className='cards-container'>
            { data?.map((item) => (<Card type={ props.type } data={ item } key={ item.name }/>))}
            </div>
            { props.all ? 
            <div className='all-container'>
                <h2 className='all-text'>All Restaurants</h2>
                <div className='arrow'></div>
            </div> 
            : ""}
        </div>
    )
  }
  
  export default Stripe