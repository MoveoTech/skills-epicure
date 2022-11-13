import './About.css'
import { useState, useEffect } from 'react'
import { fetchAbout, fetchLogo } from "../../services/dataService.service"



function About() {
  const [about, setAbout] = useState("")
  const [logo, setLogo] = useState("")

  useEffect(() => {
    (async () => {
        const aboutData = await fetchAbout()
        setAbout(aboutData)
        const logoData = await fetchLogo()
        setLogo(logoData)
    })()
  }, [])
  
  return (
    <div className='about-container'>
        <div className='text-container'>
            <h2>ABOUT US:</h2>
            <div className='text'>{about}</div>
        </div>
        <div className='about-logo-container'>
            {logo ? <img src={require(`../../resources/icons/${logo}`)} key={logo} alt="logo"/> : ""}
        </div>
    </div>
  )
}

export default About