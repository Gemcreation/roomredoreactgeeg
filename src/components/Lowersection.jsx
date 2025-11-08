import lightImg from "../assets/images/image-about-light.jpg";
import darkImg from "../assets/images/image-about-dark.jpg";

const Lowersection = ()=>{

    return(
        <section>
            <article>
                <div>
                    <img src={lightImg} alt="About furniture light" />
                </div>

                <div>
                    <h2>ABOUT OUR FURNITURE</h2>
                    <p>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best expresses your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>

                <div>
                    <img src={darkImg} alt="About furniture light" />
                </div>
            </article>
        </section>
    )
}

export default Lowersection;