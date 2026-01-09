import lightImg from "../assets/images/image-about-light.jpg";
import darkImg from "../assets/images/image-about-dark.jpg";

const Lowersection = () => {
    return (
        <section className="about-section">
            <div className="about-image-dark">
                <img src={darkImg} alt="Dark furniture" />
            </div>
            <div className="about-content">
                <h2>ABOUT OUR FURNITURE</h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div className="about-image-light">
                <img src={lightImg} alt="Light furniture" />
            </div>
        </section>
    );
};

export default Lowersection;