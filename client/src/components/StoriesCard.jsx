
const StoriesCard = (props) => {

    return (
        <>
            <div className={`story-card ${props.aligning}`}>
                <h2>{props.cardTitle}</h2>
                <img src={props.cardImage} alt={props.cardImageAlter} />
            </div>
        </>
    )
}

export default StoriesCard