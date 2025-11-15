
// import heroDesktopImg from "../assets/images/desktop-image-hero-1.jpg";
// import heroMobileImg from "../assets/images/desktop-image-hero-1.jpg";
import iconArrow from "../assets/images/icon-arrow.svg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
//need a state to handle the iage sldier for me and make use of the use effect for automate sliding.
import { useState, useEffect } from "react";


const Uppersection = () => {

    const herosliderImg = [
        "/desktop-image-hero-1.jpg",
        "/desktop-image-hero-2.jpg",
        "/desktop-image-hero-3.jpg",
      ];
    //above is the images from the public folder to display

    const [currentIndex, setCurrentIndex] = useState(0);
    //this to automate the image slider with useEffect
    useEffect(() => {
        const interval = setInterval(() => {
          //usin this to move to next image (loop back to first)
          setCurrentIndex((prevIndex) =>
            prevIndex === herosliderImg.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // yeah, this change every 3 seconds
    
        //I'm using this to cleanup to prevent multiple intervals running
        return () => clearInterval(interval);
      }, [herosliderImg.length]);
      
      //here is the arrow manul image sldier
      const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? herosliderImg.length - 1 : prevIndex - 1
        );
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === herosliderImg.length - 1 ? 0 : prevIndex + 1
        );
      };

    return(

        <section className="flexGrid main">
            <article className="leftSide">
                <div>
                    {/* <picture>
                        <source media='(min-width: 600px)' srcSet={heroDesktopImg}></source>
                        <img src={heroDesktopImg} alt='Web Image' />
                    </picture> */}
                    {/* <img src={heroDesktopImg} alt="slider image" /> this for the default hero img display, belos is the one for the hero img slidder*/}

                    <img src={herosliderImg[currentIndex]} alt="slider image" className="img" />

                    
                    <div className="sliderControl desktop">
                        <div>
                            <button className="sliderBtn" onClick={goToPrevious}>
                                <img src={slideIconLeft} alt="slideIconLeft" />
                            </button>

                            <button className="sliderBtn" onClick={goToNext}>
                                <img src={slideIconRight} alt="slideIconRight" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <article className="rightSide">
                <div className="rightPadding">
                    <div className="heroText">
                        <h1>Discover innovative ways to decorate</h1>
                        <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.                   
                        </p>
                        <a href="#" className="cta">
                            <span>Shop now</span>
                            <img src={iconArrow} alt="shopping arrow" />
                        </a>
                    </div>

                    <div className="sliderControl btnDesktop">
                        <div>
                            <button className="sliderBtn" onClick={goToPrevious}>
                                <img src={slideIconLeft} alt="slideIconLeft" />
                            </button>

                            <button className="sliderBtn" onClick={goToNext}>
                                <img src={slideIconRight} alt="slideIconRight" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default Uppersection;