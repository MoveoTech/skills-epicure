import { useEffect, useState } from 'react'
import Rating from '../../../rating/Rating'
import './Sortbox.css'

interface SortboxProps {
    clearSort: number
    sortType: string,
    sortRestaurants: Function
}

function Sortbox(props: SortboxProps) {
    const starCount = 5
    const [sortList, setSortList] = useState<JSX.Element>()
    const [checkbox, setCheckbox] = useState<Array<boolean>>(new Array(starCount).fill(false))
    
    useEffect(() => {
        const controlCheckboxes = (index: number) => {
            let checkboxArr = new Array(5).fill(false)
            if (checkbox[index - 1]) 
                index = props.clearSort
            else 
                checkboxArr[index - 1] = true
            
            setCheckbox(checkboxArr)
            props.sortRestaurants(index)
        }

        const makeStarsLines = () => {
            let starArr = []
            for (let i = 1; i < starCount + 1; ++i) {
                starArr.push(
                    <div className='star-line' key={"stars" + i}>
                        <input type='checkbox' id={"checkbox-" + i.toString()} onChange={() => controlCheckboxes(i)} checked={checkbox.at(i-1)} className='tick-box'/>
                        <Rating total={starCount} rating={i}/>
                    </div>
                )
            }
    
            return starArr
        }

        (() => {
            let sortContainer: JSX.Element = <></>
            switch (props.sortType) {
                case 'Rating':
                    sortContainer = 
                        <div className='choice-sort-container'>
                        {makeStarsLines()}
                        </div>
                    break
                case 'Distance':
                    sortContainer =
                    <div className='choice-sort-container'>
                    {/* {makeStarsLines()} */}
                        </div>
                    break
                case 'Price range':
                    break
                default:
                    break
            }
            setSortList(sortContainer)
        })()
    }, [checkbox])


    return ( 
        <div className={props.sortType.toLowerCase() + '-sort-box-container'}>
            <div className='sort-title'>{props.sortType}</div>
            {sortList}
        </div>
    )
}

export default Sortbox