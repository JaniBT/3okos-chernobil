import { Link } from "react-router-dom"

const StoriesCard = (props) => {

    return (
        <>
            <Link to={props.link} className={`story-card ${props.aligning}`}>
                <h2>{props.cardTitle}</h2>
                <img src={props.cardImage} alt={props.cardImageAlter} />
            </Link>
        </>
    )
}

export default StoriesCard