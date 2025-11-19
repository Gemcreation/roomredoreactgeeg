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

            <nav className={(deviceWidth < 800) ? (navDisplay ? "open" : "") : ""}>

                {/* <ul className="notDeskTop">
                    <li><a href="#home">home</a></li>
                    <li><a href="#shop">shop</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul> */}
                {/* for icon close nav */}

                <ul className="onMobile">
                    <li className="hideOnMobile"><a href="#home">home</a></li>
                    <li className="hideOnMobile"><a href="#shop">shop</a></li>
                    <li className="hideOnMobile"><a href="#about">about</a></li>
                    <li className="hideOnMobile"><a href="#contact">contact</a></li>
                    <li className="menuButton">
                        <a href="">
                            <img className="site-header" src={iconHamburgerOpen} alt="Room logo" id="iconHamburgerOpen" onClick={openNav} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            
                            <img className="site-header" src={iconHamburgerClose} alt="Room logo" onClick={closeNav} />
                        </a>
                    </li>
                </ul>
                {/* for icon open nav*/}
            </nav>
            
        </header>
    )
}

export default Header;