import './Header.css'
import { useState, useEffect, StyleHTMLAttributes } from 'react'
import { fetchIcons } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'
import { useNavigate } from 'react-router-dom'


function Header() {
  const smallWidth: string = '24px'
  const bigWidth: string = '410px'
  const withPadding: string = '6px 12px'
  const noPadding: string = '0px'
  const [icons, setIcons] = useState<Array<IIcon>>()
  const [searchVisibility, setSearchVisibility] = useState<DocumentVisibilityState>('hidden')
  const [searchWidth, setSearchWidth] = useState<string>(smallWidth)
  const [searchPadding, setSearchPadding] = useState<string>(noPadding)

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
        setSearchWidth(searchWidth === smallWidth ? bigWidth : smallWidth)
        setSearchPadding(searchPadding === noPadding ? withPadding : noPadding )

      break
    
      default:
      break
    }
  }

  function createSearchStyle(element: string) {
    const padding = '6px 12px'
    let style: React.CSSProperties = {}
    switch (element) {
      case 'div':
        style = {
          visibility: searchVisibility, 
          width: searchWidth,
          padding: searchPadding
        }
        break
      case 'input':
        style = {
          visibility: searchVisibility, 
          width: searchWidth,
        }
        break
      case 'icon':
        style = {
          visibility: 'visible', 
          width: smallWidth,
        }
        break
      default:
        break
    }
    
    return style
  }

  function createIconElement(icon: IIcon, index:number) {
    let iconElement: JSX.Element = <></>

    if (index !== 0 && icon.name !== "search") 
      iconElement = <img onClick={() => handleHeaderIconClick(icon.name)} src={require(`../../resources/icons/${icon.icon}`)} 
      key={icon.name} className= "cursor" alt={icon.name} />

    else if (icon.name === 'search')
      iconElement = <div className='header-search' style={createSearchStyle('div')}>
          <input className='input-header' style={createSearchStyle('input')} type="text" placeholder='Search for restaurant cuisine, chef'></input>
          <img onClick={() => handleHeaderIconClick(icon.name)} style={createSearchStyle('icon')} src={require(`../../resources/icons/${icon.icon}`)} 
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