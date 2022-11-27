import './Header.css'
import { useState, useEffect } from 'react'
import { fetchIcons } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'
import { useNavigate } from 'react-router-dom'


function Header() {
  const [icons, setIcons] = useState<Array<IIcon>>()
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const data = await fetchIcons()
      setIcons(data as Array<IIcon>)
    })()
  }, [])

  return (
      <div className="header-container">
        <div className='logo-container'>
          <img onClick={() => navigate("/")} src={icons ? require(`../../resources/icons/${icons.at(0)?.icon}`) : ""} className="logo-icon" alt="logo"/>
          <h4 onClick={() => navigate("/")}>EPICURE</h4>
          <div className='buttons-container'>
            <button className='menu-button' onClick={() => navigate("/restaurants")}>Restaurants</button>
            <button className='menu-button'>Chefs</button>
          </div>
        </div>
        <div className="user-container">
          { icons ? icons.map((icon, index) => (index !== 0 ? <img src={icons ? require(`../../resources/icons/${icon.icon}`) : ""} key={icon.name} alt={icon.name}/> : "")) : "" }         
        </div>
      </div>
  )
}


export default Header