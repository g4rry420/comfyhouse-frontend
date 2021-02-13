import React,{ useEffect, useRef, useState } from 'react'
// import Swiper from 'react-id-swiper';
// import { Controller } from 'swiper/js/swiper.esm';
// import 'swiper/css/swiper.min.css';
import Slider from "react-slick";

import "./individual-item.styles.css"
import IndividualItemRightSide from '../individual-item-right-side/individual-item-right-side.component';
import ProductDetails from '../product-details/product-details.component';
import ArrowImageRight from '../arrow-image-right/arrow-image-right.component';
import ArrowImageLeft from '../arrow-image-left/arrow-image-left.component';


export default function IndividualItem({ state }) {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1 = []
    let slider2 = []
  
    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])
  
    const settingsForSlider1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // nextArrow: <ArrowImageRight/>,
        // prevArrow: <ArrowImageLeft/>
    };

    const settingsForSlider2 = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true
    }

    return ( 
        <div className="containe-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="individual-item-left-container">
                        <Slider {...settingsForSlider1}
                            asNavFor={nav2}
                            ref={slider => slider1 = slider}
                        >
                        {
                            state.largeImage.map(img => (
                                <div className="individual-item-big-img-container text-center" key={img._id}>
                                    <img src={img.largeImage} alt={`Large product ${img._id}`} />
                                </div>
                            ))
                        }
                        </Slider>
                        <div className="small-img-main-container">
                        <Slider {...settingsForSlider2}
                            asNavFor={nav1}
                            ref={slider => slider2 = slider}
                        >
                        {
                            state.smallImage.map((img) => (
                                <div className="small-image-container" key={img._id}>
                                    <img src={img.smallImage} alt={`Small product ${img._id}`}/>
                                </div>
                            ))
                        }
                        </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                        <IndividualItemRightSide state={state} />

                        <ul className="list-of-product-details-ul">
                            {state.productDetails.map((proDetails, idx) => (
                                <ProductDetails key={idx} proDetails={proDetails} />
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    )
}

// const gallerySwiperRef = useRef(null);
// const thumbnailSwiperRef = useRef(null);

// const gallerySwiperParams = {
//     modules: [Controller],
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     direction: "horizontal",
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
// };

// const thumbnailSwiperParams = {
//     modules: [Controller],
//     spaceBetween: 10,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     touchRatio: 0.2,
//     slideToClickedSlide: true
// };

// useEffect(() => {
//     const gallerySwiper = gallerySwiperRef.current.swiper;
//     const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
//     if (gallerySwiper.controller && thumbnailSwiper.controller) {
//       gallerySwiper.controller.control = thumbnailSwiper;
//       thumbnailSwiper.controller.control = gallerySwiper;
//     }
// },[gallerySwiperRef, thumbnailSwiperRef]);





// <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
// {
//     state.largeImage.map(img => (
//         <div className="individual-item-big-img-container text-center" key={img._id}>
//             <img src={img.largeImage} alt={`Large product ${img._id}`} />
//         </div>
//     ))
// }
// </Swiper>
// <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
// {
//     state.smallImage.map((img, idx) => (
//         <div className="small-image-container" key={img._id}>
//             <img src={img.smallImage} alt={`Small product ${img._id}`}/>
//         </div>
//     ))
// }
// </Swiper>