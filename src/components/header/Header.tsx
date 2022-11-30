import './Header.css'
import { useState, useEffect } from 'react'
import { fetchIcons } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'
import { useNavigate } from 'react-router-dom'


function Header() {
  let smallWidth: string = '24px'
  let bigWidth: string = '410px'
  const [icons, setIcons] = useState<Array<IIcon>>()
  const [searchVisibility, setSearchVisibility] = useState<DocumentVisibilityState>('hidden')
  const [width, setWidth] = useState<string>(smallWidth)

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const data = await fetchIcons()
      setIcons(data as Array<IIcon>)
    })()
  }, [])

  function handleHeaderIconClick(icon: string) {
    switch (icon) {
      case 'search':
        setSearchVisibility(searchVisibility === 'hidden' ? 'visible' : 'hidden')
        setWidth(width === smallWidth ? bigWidth : smallWidth)
      break
    
      default:
      break
    }
  }

  function createIconElement(icon: IIcon, index:number) {
    let iconElement: JSX.Element = <></>

    if (index !== 0 && icon.name !== "search") 
      iconElement = <img onClick={() => handleHeaderIconClick(icon.name)} src={require(`../../resources/icons/${icon.icon}`)} 
      key={icon.name} className= "cursor" alt={icon.name} />

    else if (icon.name === 'search')
      iconElement = <div className='header-search' style={{visibility:searchVisibility, width:width}}>
          <input className='input-header' style={{visibility:searchVisibility, width:width}} type="text" placeholder='Search for restaurant cuisine, chef'></input>
          <img onClick={() => handleHeaderIconClick(icon.name)} style={{visibility:'visible', width: smallWidth}} src={require(`../../resources/icons/${icon.icon}`)} 
          key={icon.name} className= "cursor" alt={icon.name} />
        </div>

    return iconElement
  }

  return (
      <div className="header-container">
        <div className='logo-container'>
          <img onClick={() => navigate("/")} src={icons ? require(`../../resources/icons/${icons.at(0)?.icon}`) : ""} className="logo-icon cursor" alt="logo"/>
          <h4 className='cursor' onClick={() => navigate("/")}>EPICURE</h4>
          <div className='buttons-container'>
            <button className='menu-button' onClick={() => navigate("/restaurants")}>Restaurants</button>
            <button className='menu-button'>Chefs</button>
          </div>
        </div>
        <div className="user-container">
          { icons ? icons.map((icon, index) => createIconElement(icon, index)): "" }         
        </div>
      </div>
  )
}


export default Header