import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <header className='navigation-bar'>
            <h1>Chernobyl</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">About this page</Link>
                <Link to="/">More</Link>
            </nav>
            <span><img src={props.flagImg} width="32" height="32" alt="Language Changer" /></span>
        </header>
    )
}

export default Navbar