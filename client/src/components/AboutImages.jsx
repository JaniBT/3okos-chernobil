const AboutImages = (props) => {
    return (
        <>
            <div className="about-gallery-image">
                <img src={props.source} alt={props.alternative} />
            </div>
        </>
    )
}

export default AboutImages