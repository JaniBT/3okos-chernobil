import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import hun_flag from '../assets/icons/hungarianIcon.png'
import en_flag from '../assets/icons/englishIcon.png'
import { useTranslation } from "react-i18next"
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [swap, setSwap] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (localStorage.getItem('language') == 'hu') {
            setSwap(true)
            changeLanguage(localStorage.getItem('language'))
        } else {
            setSwap(false)
            changeLanguage(localStorage.getItem('language'))
        }
    }, [])

    const handleLanguageIconSwap = () => {
        setSwap(!swap ? true : false)
        if (!swap) {
            changeLanguage('hu')
            localStorage.setItem('language', 'hu')
        } else {
            changeLanguage('en')
            localStorage.setItem('language', 'en')
        }
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const handleSidebarOpening = () => {
        if (isOpen) {
            closeSidebar()
            setIsOpen(false)
            return
        }

        openSideBar()
        setIsOpen(true)
    }

    const openSideBar = () => {
        document.querySelector('.hamburger-menu').style.transform = "translate3d(0%, 0%, 0px)"
    }

    const closeSidebar = () => {
        document.querySelector('.hamburger-menu').style.transform = "translate3d(100%, 0%, -100px)"
    }

    return (
        <header className='navigation-bar'>
            <h1>{t('heading')}</h1>
            <nav>
                <Link to="/">{t('nav_one')}</Link>
                <Link to="/about">{t('nav_second')}</Link>
                <Link to="/menus" title={t('moreMenuDesc')}>
                    <IoIosArrowDown /> 
                    {t('nav_third')}
                </Link>
            </nav>
            <span>
                <img src={`${!swap ? en_flag : hun_flag}`} onClick={handleLanguageIconSwap} width="32" height="32" alt="Language Changer" title={t('languageSelectDesc')} />
            </span>
            <div className='hamburger'>
                <RxHamburgerMenu onClick={ handleSidebarOpening } />
            </div>
            <div id="hamburger-menu" className='hamburger-menu'>
                <div className='hamburger-menu-title'>
                    <h4>Menu</h4>
                    <RxCross2 onClick={handleSidebarOpening} />
                </div>
                <div className='menus'>
                    <Link to="/">{t('nav_one')}</Link>
                    <Link to="/about">{t('nav_second')}</Link>
                    <Link to="/menus" title={t('moreMenuDesc')}>
                        <IoIosArrowDown /> 
                        {t('nav_third')}
                    </Link>
                </div>
                <button type="button" onClick={handleLanguageIconSwap}>{t('buttonText')}</button>
            </div>
        </header>
    )
}

export default Navbar