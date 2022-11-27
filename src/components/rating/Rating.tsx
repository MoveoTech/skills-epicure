import { useEffect, useState } from "react"
import "./Rating.css"

interface RatingProps {
    total: number
    rating : number
}

function Rating(props : RatingProps)  {
    const [stars, setStars] = useState<Array<JSX.Element>>(new Array<JSX.Element>(props.total))

    useEffect(() => {
        (() => {
            let newStars: Array<JSX.Element> = []
            for (let i = 1; i <= props.total; ++i) {
                newStars.push(<div className={(i <= props.rating) ? 'star' : 'star empty-star'} key={i}></div>)
            }
            setStars(newStars)      
        })()
    }, [props])

    return (
        <div className="rating-container">
            {stars}
        </div>
    );
}

export default Rating;