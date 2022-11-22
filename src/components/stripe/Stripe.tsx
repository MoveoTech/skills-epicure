import { useEffect, useState } from 'react'
import Card from '../card/Card'
import './Stripe.css'

interface StripeProps {
    title : string
    all : boolean
    type: string
    data: Array<any>
}

const Stripe = (props : StripeProps) => {
    const [data, setData] = useState<Array<any>>()

    useEffect(() => {
        setData(props.data)
    }, [])

    return (
        <div className={props.type + '-container'}>
            <h2 className={props.type + '-title title'}>{props.title}</h2>
            <div className={props.type + '-cards cards-container'}>
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