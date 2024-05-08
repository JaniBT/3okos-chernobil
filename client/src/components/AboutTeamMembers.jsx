import { Link } from "react-router-dom"

const AboutTeamMembers = (props) => {
    return (
        <>
            <div className="team-member">
                <img className="tm-profile-picture" src={props.source} alt={props.alternative} />
                <h5 className="tm-name">{props.name}</h5>
                <ul className="tm-jobs">
                </ul>
                <div className="tm-links">
                    <Link to={props.link_github} target="_blank">{props.link_name_github}</Link>
                    <Link to={props.link_instagram} target="_blank">{props.link_name_instagram}</Link>
                </div>
            </div> 
        </>
    )
}

export default AboutTeamMembers