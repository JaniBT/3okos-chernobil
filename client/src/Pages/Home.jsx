import { useState, useEffect } from "react"
import './Home.css'

const Home = () => {
    const [isVisible, setIsVisible] = useState(true)
    

    const onAnimationEnd = () => {
        setIsVisible(false)
    }

    return (
        <>
            <div className={`loading-animation ${isVisible ? 'visible' : 'nonVisible'}`} onAnimationEnd={onAnimationEnd}>
                <h1>CHERNOBYL</h1>
            </div>
            <main className="fullview-contents">
                <div className="fullview-content main">
                    <header className="navigation-bar">
                        <nav>
                            
                        </nav>
                    </header>
                    <div className="content">

                    </div>
                </div>
                <div className="fullview-content">

                </div>
                <div className="fullview-content">
                    
                </div>
            </main>
        </>
    )
}

export default Home