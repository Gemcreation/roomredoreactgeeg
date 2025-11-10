import lightImg from "../assets/images/image-about-light.jpg";
import darkImg from "../assets/images/image-about-dark.jpg";

const Lowersection = ()=>{

    return(
        <section className="flexLower main">
            <article className="lowerSide">
                <div>
                    <img src={darkImg} alt="About furniture light" />
                </div>

                <div className="text-content">
                    <h2>ABOUT OUR FURNITURE</h2>
                    <p>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best expresses your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>

                <div className="lowerImg">
                    <img src={lightImg} alt="About furniture light" />
                </div>
            </article>
        </section>
    )
}

export default Lowersection;