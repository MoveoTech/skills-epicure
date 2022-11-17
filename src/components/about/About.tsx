import './About.css'
import { useState, useEffect } from 'react'
import { fetchAbout, fetchLogo, fetchStores } from "../../services/dataService.service"
import { IIcon } from '../../interfaces/IIcon.interface'



function About() {
  const [about, setAbout] = useState("")
  const [logo, setLogo] = useState("")
  const [stores, setStores] = useState(Array<IIcon>)

  useEffect(() => {
    (async () => {
        const aboutData = await fetchAbout()
        setAbout(aboutData)
        const logoData = await fetchLogo()
        setLogo(logoData)
        const storesData = await fetchStores()
        setStores(storesData)
        
    })()
  }, [])
  
  return (
    <div className='about-container'>
        <div className='text-container'>
            <h2>ABOUT US:</h2>
            <div className='text'>{about}</div>
            <div className='stores-container'>
                { stores ? stores.map((icon) => (<img src={require(`../../resources/icons/${icon.icon}`)} key={icon.name} alt={icon.name}/>)) : "" }
            </div>
        </div>
        <div className='about-logo-container'>
            {logo ? <img src={require(`../../resources/icons/${logo}`)} key={logo} alt="logo"/> : ""}
        </div>
    </div>
  )
}

export default About