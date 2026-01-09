import heroDesktop1 from "../assets/images/desktop-image-hero-1.jpg";
import heroDesktop2 from "../assets/images/desktop-image-hero-2.jpg";
import heroDesktop3 from "../assets/images/desktop-image-hero-3.jpg";
import heroMobile1 from "../assets/images/mobile-image-hero-1.jpg";
import heroMobile2 from "../assets/images/mobile-image-hero-2.jpg";
import heroMobile3 from "../assets/images/mobile-image-hero-3.jpg";
import iconArrow from "../assets/images/icon-arrow.svg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import { useState, useEffect } from "react";

const Uppersection = () => {
    const slides = [
        {
            desktopImg: heroDesktop1,
            mobileImg: heroMobile1,
            title: "Discover innovative ways to decorate",
            description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            desktopImg: heroDesktop2,
            mobileImg: heroMobile2,
            title: "We are available all across the globe",
            description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            desktopImg: heroDesktop3,
            mobileImg: heroMobile3,
            title: "Manufactured with the best materials",
            description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentSlide = slides[currentIndex];

    return (
        <section className="hero-section">
            <article className="hero-image-wrapper">
                <picture>
                    <source media="(min-width: 800px)" srcSet={currentSlide.desktopImg} />
                    <img 
                        src={currentSlide.mobileImg} 
                        alt={currentSlide.title}
                        className="hero-image"
                    />
                </picture>
                <div className="slider-controls mobile-controls">
                    <button className="slider-btn" onClick={goToPrevious} aria-label="Previous slide">
                        <img src={slideIconLeft} alt="Previous" />
                    </button>
                    <button className="slider-btn" onClick={goToNext} aria-label="Next slide">
                        <img src={slideIconRight} alt="Next" />
                    </button>
                </div>
            </article>

            <article className="hero-content">
                <div className="hero-content-inner">
                    <div className="hero-text">
                        <h1>{currentSlide.title}</h1>
                        <p>{currentSlide.description}</p>
                        <a href="#shop" className="cta-link">
                            <span>SHOP NOW</span>
                            <img src={iconArrow} alt="Arrow" />
                        </a>
                    </div>
                    <div className="slider-controls desktop-controls">
                        <button className="slider-btn" onClick={goToPrevious} aria-label="Previous slide">
                            <img src={slideIconLeft} alt="Previous" />
                        </button>
                        <button className="slider-btn" onClick={goToNext} aria-label="Next slide">
                            <img src={slideIconRight} alt="Next" />
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Uppersection;