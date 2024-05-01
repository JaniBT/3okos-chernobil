import { useState, useEffect } from "react"
import './Home.css'

const Home = () => {
    const [isVisible, setIsVisible] = useState(true)
    

    const videoStop = () => {
        setTimeout(() => {
            setIsVisible(false)
        }, 5000)
    }

    return (
        <>
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