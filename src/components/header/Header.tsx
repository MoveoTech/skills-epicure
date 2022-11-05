import './Header.css'
import { useState, useEffect } from 'react'
import { fetchIcons } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'


function Header() {
  const [icons, setIcons] = useState<Map<String,IIcon>>()

  useEffect(() => {
    (async () => {
      const data = await fetchIcons()
      setIcons(new Map<String, IIcon>(data.map(icon => [icon.name, icon])))
    })()
  }, [icons])

  return (
      <div className="header-container">
        <div className='logo-container'>
          <img src={icons ? require(`../../resources/icons/${icons.get("logo")?.icon}`) : ""} className="logo-icon" alt="logo"/>
          <h4>EPICURE</h4>
          <div className='buttons-container'>
            <button className='menu-button'>Restaurants</button>
            <button className='menu-button'>Chefs</button>
          </div>
        </div>
        <div className="user-container">
          <img src={icons ? require(`../../resources/icons/${icons.get("search")?.icon}`) : ""} alt="search"/>
          <img src={icons ? require(`../../resources/icons/${icons.get("user")?.icon}`) : ""} alt="user"/>
          <img src={icons ? require(`../../resources/icons/${icons.get("cart")?.icon}`) : ""} alt="cart"/>
        </div>
      </div>
  )
}


export default Header