import './Sort.css'
import { useState, useEffect } from 'react'
import { fetchSort } from "../../services/dataService.service"
import { ISort } from '../../interfaces/ISort.interface'



function Sort() {
  const [sort, setSort] = useState(Array<ISort>)

  useEffect(() => {
    (async () => {
      const data = await fetchSort()
      setSort(data as Array<ISort>)
    })()
  }, [])
  
  return (
    <div className='sort-container'>
        { sort ? sort.map((item) => (
        <div className='menu-button sort-button'>
            {item.name}
            <div className='sort-arrow'/>
        </div>)) : ""}
    </div>
  );
}

export default Sort