import './Banner.css'
import { useState, useEffect } from 'react'
import { fetchHeroImage } from "../../services/dataService.service"



function Banner() {
  const [banner, setBanner] = useState("")

  useEffect(() => {
    (async () => {
      const data = await fetchHeroImage()
      setBanner(data)
    })()
  }, [])
  
  return (
    <div className='banner-container'>
        {banner ? <img src={require(`../../resources/images/${banner}`)} key={banner} className="banner" alt="banner"/> : ""}
        <div className='title-container'>
          <h1>Epicure works with the top
              chef restaurants in Tel Aviv</h1>
          <input type="text" placeholder='Search for restaurant cuisine, chef'></input>
        </div>
    </div>
  );
}

export default Banner