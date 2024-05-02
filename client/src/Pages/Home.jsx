import { useState, useEffect } from "react"
import './Home.css'
import Navbar from "../components/Navbar"
import { useTranslation } from "react-i18next"

const Home = () => {
    const [background, setBackground] = useState(true)
    const { t } = useTranslation()
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackground(prevBackground => !prevBackground)
        }, 8000)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <>
            <div className={`mainpage-container ${background ? 'today' : 'then'}`}>
                <Navbar />
                <div className="content">
                    <div className="content-title">
                        <h1>{t('paragraph')}</h1>
                    </div>
                </div>
                <span className="date-span">{background ? `${t('time')}` : `${t('timeThen')}`}</span>
            </div>
        </>
    )
}

export default Home