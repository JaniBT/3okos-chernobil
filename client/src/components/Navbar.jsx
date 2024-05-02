import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import hun_flag from '../assets/icons/hungarianIcon.png'
import en_flag from '../assets/icons/englishIcon.png'
import { useTranslation } from "react-i18next"
import { useState } from 'react';

const Navbar = () => {
    const [swap, setSwap] = useState(false)
    const { t, i18n } = useTranslation()

    const handleLanguageIconSwap = () => {
        setSwap(!swap ? true : false)
        if (!swap) {
            changeLanguage('hu')
        } else {
            changeLanguage('en')
        }
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <header className='navigation-bar'>
            <h1>{t('heading')}</h1>
            <nav>
                <Link to="/">{t('nav_one')}</Link>
                <Link to="/">{t('nav_second')}</Link>
                <Link to="/" title='Go to menus section'>
                    <IoIosArrowDown /> 
                    {t('nav_third')}
                </Link>
            </nav>
            <span>
                <img src={`${!swap ? en_flag : hun_flag}`} onClick={handleLanguageIconSwap} width="32" height="32" alt="Language Changer" title='Click to change language' />
            </span>
        </header>
    )
}

export default Navbar