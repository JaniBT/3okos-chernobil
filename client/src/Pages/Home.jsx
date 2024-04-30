import React, { useState, useEffect } from "react"
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
            <h1>Placeholder</h1>
        </>
    )
}

export default Home