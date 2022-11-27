import './Header.css'
import { useState, useEffect } from 'react'
import { fetchIcons } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'


function Header() {
  const [icons, setIcons] = useState<Array<IIcon>>()

  useEffect(() => {
    (async () => {
      const data = await fetchIcons()
      setIcons(data as Array<IIcon>)
    })()
  }, [])

  return (
      <div className="header-container">
        <div className='logo-container'>
          <img src={icons ? require(`../../resources/icons/${icons.shift()?.icon}`) : ""} className="logo-icon" alt="logo"/>
          <h4 className='cursor'>EPICURE</h4>
          <div className='buttons-container'>
            <button className='menu-button cursor'>Restaurants</button>
            <button className='menu-button cursor'>Chefs</button>
          </div>
        </div>
        <div className="user-container">
          { icons ? icons.map((icon) => (<img className='cursor' src={icons ? require(`../../resources/icons/${icon.icon}`) : ""} key={icon.name} alt={icon.name}/>)) : "" }         
        </div>
      </div>
  )
}


export default Header