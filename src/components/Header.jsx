import roomlogo from "../assets/images/logo.svg";
import iconHamburgerOpen from "../assets/images/icon-hamburger.svg";
import iconHamburgerClose from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () =>{
    const [navDisplay, setNavDisplay] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  
    const openNav = () => {
      setNavDisplay(true);
    }
  
    const closeNav = () => {
      setNavDisplay(false);
    }
  
    window.onresize = () => {
      setDeviceWidth(window.innerWidth);
    }

    return(
        <header className="header">
            <a href="#">
                <img className="site-header" src={roomlogo} alt="Room logo" />
            </a>

            <nav className={(deviceWidth < 600) ? (navDisplay ? "open" : "") : ""}>

                {/* for icon open nav*/}
                <img className="site-header" src={iconHamburgerOpen} alt="Room logo" id="iconHamburgerOpen" onClick={closeNav} />
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#shop">shop</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>

            {/* for icon close nav */}
            <img className="site-header" src={iconHamburgerClose} alt="Room logo" onClick={openNav} />
        </header>
    )
}

export default Header;