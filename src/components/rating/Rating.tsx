import "./Rating.css"

interface RatingProps {
    rating : number
}

function Rating(props : RatingProps)  {
    const stars = [];
    for (let i = 0; i < props.rating; ++i) {
        stars.push(<div className="star" key={i}></div>)
    }
    for (let j = 0; j < 5-props.rating; ++j) {
        stars.push(<div className="star empty-star" key={"empty"+j}></div>)
    }

    return (
        <div className="rating-container">
            {stars}
        </div>
    );
}

export default Rating;