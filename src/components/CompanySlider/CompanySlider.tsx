import React from 'react'
import styles from "./CompanySlider.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from "../../assets/images/carousel1.png"
import carousel2 from "../../assets/images/carousel2.png"
import carousel3 from "../../assets/images/carousel3.png"
import carousel4 from "../../assets/images/carousel4.png"
import carousel5 from "../../assets/images/carousel5.png"
function CompanySlider() {
    return (
        <>
            <Carousel className={styles.carousel} autoPlay={true} interval={2000} showArrows={true} transitionTime={1500} showThumbs={false}>
                <div>
                    <img src={carousel1} />
                </div>
                <div>
                    <img src={carousel2}/>
                </div>
                <div>
                    <img src={carousel3} />
                </div>
                <div>
                    <img src={carousel4}/>
                </div>
                <div>
                    <img src={carousel5} />
                </div>
            </Carousel>
        </>
    )
}

export default CompanySlider;