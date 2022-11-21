import './Meaning.css'
import { useState, useEffect } from 'react'
import { fetchSpecials } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'


function Header() {
  const [icons, setIcons] = useState<Array<IIcon>>()

  useEffect(() => {
    (async () => {
      const data = await fetchSpecials()
      setIcons(data as Array<IIcon>)
    })()
  }, [])

  return (
      <div className="meaning-container">
        <h2 className='title'>THE MEANING OF OUR ICONS:</h2>
        <div className="icons-container">
                { icons ? icons.map((icon) => (
                <div className='icon-container' key={icon.name + "div"}>
                    <img src={require(`../../resources/icons/${icon.icon}`)} key={icon.name} alt={icon.name}/> 
                    <h5 className='specials-desc' key={icon.name + "text"}>{icon.name}</h5>
                </div>)) : "" }
        </div>
      </div>
  )
}


export default Header