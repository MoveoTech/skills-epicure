import { useEffect, useState } from 'react'
import { IChef } from '../../../interfaces/IChef.interface'
import { fetchChefs } from '../../../services/dataService.service'
import Chef from '../../chef/Chef'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import './Chefs.css'


function Chefs() {
    const [chefs, setChefs] = useState<Array<IChef>>()


    useEffect(() => {
        (async () => {
        const chefsData = await fetchChefs() as Array<IChef>
        setChefs(chefsData)
        })()
    }, [])

    return ( 
        <div className="chefs-page-container">
            <Header/>
            <div className='chefs-container'>
                {console.log(chefs)}
                { chefs?.map((chef) => (<Chef chef={chef} weeklyRestaurants={[]} weekly={false} key={chef.id}/>)) }
            </div>
            <Footer/>
        </div>
    )

}

export default Chefs