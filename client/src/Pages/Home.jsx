import { useState, useEffect } from "react"
import './Home.css'
import Navbar from "../components/Navbar"
import hun_flag from '../assets/icons/hungarianIcon.png'
import en_flag from '../assets/icons/englishIcon.png'

const Home = () => {
    

    return (
        <>
            <div className="mainpage-container">
                <Navbar flagImg={en_flag} />
                <div className="content">
                    <div className="content-title">
                        <h1>Uncover the untold stories of the world's worst nuclear disaster...</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home