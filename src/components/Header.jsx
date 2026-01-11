import roomlogo from "../assets/images/logo.svg";
import iconHamburgerOpen from "../assets/images/icon-hamburger.svg";
import iconHamburgerClose from "../assets/images/icon-close.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
            if (window.innerWidth >= 800) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <a href="#" className="logoLink">
                <img className="logo" src={roomlogo} alt="Room logo" />
            </a>

            {isMobile ? (
                <>
                    <button 
                        className="hamburgerBtn" 
                        onClick={toggleMenu}
                    >
                        <img 
                            src={iconHamburgerOpen} 
                            alt="Open menu"
                            className={isMenuOpen ? 'hidden' : ''}
                        />
                    </button>
                    <nav className={`mobileNav ${isMenuOpen ? 'open' : ''}`}>
                        <button 
                            className="closeBtn" 
                            onClick={closeMenu}
                        >
                            <img src={iconHamburgerClose} alt="Close menu" />
                        </button>
                        <ul>
                            <li><a href="#home" onClick={closeMenu}>home</a></li>
                            <li><a href="#shop" onClick={closeMenu}>shop</a></li>
                            <li><a href="#about" onClick={closeMenu}>about</a></li>
                            <li><a href="#contact" onClick={closeMenu}>contact</a></li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav className="desktopNav">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#shop">shop</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;