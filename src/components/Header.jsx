import roomlogo from "../assets/images/logo.svg";
import iconHamburgerOpen from "../assets/images/icon-hamburger.svg";
import iconHamburgerClose from "../assets/images/icon-close.svg";

const Header = () =>{

    return(
        <header className="header">
            <a href="#">
                <img className="site-header" src={roomlogo} alt="Room logo" />
            </a>

            {/* for icon open nav*/}
            <img className="site-header" src={iconHamburgerOpen} alt="Room logo" />
            {/* for icon close nav */}
            <img className="site-header" src={iconHamburgerClose} alt="Room logo" />

            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#shop">shop</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;