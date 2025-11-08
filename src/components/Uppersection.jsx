
import heroDesktopImg from "../assets/images/desktop-image-hero-1.jpg";
// import heroMobileImg from "../assets/images/desktop-image-hero-1.jpg";
import iconArrow from "../assets/images/icon-arrow.svg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";


const Uppersection = () => {

    // const herosliderImg = [
    //     "/images/desktop-image-hero-1.jpg",
    //     "/images/desktop-image-hero-2.jpg",
    //     "/images/desktop-image-hero-3.jpg",
    //   ];

    return(

        <section className="flexGrid main">
            <article className="leftSide">
                <div>
                    {/* <picture>
                        <source media='(min-width: 600px)' srcSet={heroDesktopImg}></source>
                        <img src={heroDesktopImg} alt='Web Image' />
                    </picture> */}
                    <img src={heroDesktopImg} alt="slider image" />
                </div>
            </article>

            <article>
                <div>
                    <h1>Discover innovative ways to decorate</h1>
                    <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.                   
                    </p>
                    <a href="#">
                        <span>Shop now</span>
                        <img src={iconArrow} alt="shopping arrow" />
                    </a>
                </div>

                <div>
                    <div>
                        <button>
                            <img src={slideIconLeft} alt="slideIconLeft" />
                        </button>

                        <button>
                            <img src={slideIconRight} alt="slideIconRight" />
                        </button>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default Uppersection;