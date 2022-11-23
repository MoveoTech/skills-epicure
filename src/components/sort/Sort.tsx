import './Sort.css'
import { useState, useEffect } from 'react'
import { fetchSort } from "../../services/dataService.service"
import { ISort } from '../../interfaces/ISort.interface'

interface SortProps {
    onSort: Function
}

function Sort(props: SortProps) {
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
            <button onClick={() => props.onSort(item.name)} className='menu-button sort-button' key={item.name + "sort"}>
                {item.name}
                <div className='sort-arrow'/>
            </button>)) : ""}
        </div>
    )
}



export default Sort

