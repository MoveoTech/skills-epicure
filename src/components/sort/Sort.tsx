import './Sort.css'
import { useState, useEffect } from 'react'
import { fetchSort } from "../../services/dataService.service"
import { ISort } from '../../interfaces/ISort.interface'
import Sortbox from './sub-components/sortbox/Sortbox'


interface SortProps {
    sortRestaurants: Function
}

function Sort(props: SortProps) {
    const clearSort = -1
    const sortCount = 3
    const [sort, setSort] = useState<Array<ISort>>()
    const [sortBoxVisibility, setSortBoxVisibility] = useState<Array<boolean>>(new Array(sortCount).fill(false))

    useEffect(() => {
        (async () => {
        const data = await fetchSort()
        setSort(data as Array<ISort>)
        })()      
    }, [])


    function updateSortBoxVisibility(chosenSort: number) {
        let newSortBoxVisibilityArr = new Array(sortCount).fill(false)
        if (sortBoxVisibility[chosenSort] !== true)
            newSortBoxVisibilityArr[chosenSort] = true
        setSortBoxVisibility(newSortBoxVisibilityArr)
    }

    return (
        <div className='sort-container' >
            { sort ? sort.map((item) => (
            <div key={item.name + "sort"}>
                <button onClick={() => updateSortBoxVisibility(item.id - 1)} className='menu-button sort-button' >
                {item.name}
                <div className='sort-arrow'/>
                </button>
                {sortBoxVisibility.at(item.id-1) ? <Sortbox clearSort={clearSort} sortType={item.name} sortRestaurants={props.sortRestaurants}/> : ""}
            </div>
            )) : ""}
        </div>
    )
}

export default Sort

