import roomlogo from "../assets/images/logo.svg";

const Header = () =>{

    return(
        <header className="header">
            <a href="#">
                <img className="site-header" src={roomlogo} alt="Room logo" />
            </a>

            //for icon open and close
            <img className="site-header" src={roomlogo} alt="Room logo" />

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