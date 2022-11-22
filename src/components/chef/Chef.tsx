import './Chef.css'
import { useState, useEffect } from 'react'
import { IChef } from '../../interfaces/IChef.interface'
import { fetchChefOfWeek } from '../../services/dataService.service'
import Stripe from '../stripe/Stripe'


function Chef() {
    const [chef, setChef] = useState<IChef>()

    useEffect(() => {
      (async () => {
        const data = await fetchChefOfWeek()
        setChef(data as IChef)
      })()
    }, [])

  return (
      <div className='chef-container'>
        <h2 className='title'>Chef of the week:</h2>
        {chef ? 
        <div className='chef-week'> 
            <div className='chef-desc'>
                <div className='chef-image'>
                    <img src={require(`../../resources/images/${chef.image}`)} alt={chef?.last_name}/>
                    <h3 className='chef-name'>{chef.first_name + " " + chef.last_name}</h3>
                </div>
                <h5 className='chef-text-container'>{chef.desc}</h5>
            </div>
            <Stripe title="Yossi's Restaurants:" all={false} type="weekly"/>
        </div> : "" }
      </div>
  )
}


export default Chef