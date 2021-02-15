import React,{ Fragment, useRef } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

import "./category-mainSection.styles.css"
import MainSectionSideHeading from '../mainSection-side-Heading/mainSection-side-Heading.component'
import MainSectionItems from '../mainSection-Items/mainSection-Items.component'

function CategoryMainSection({ state }) {
    const swiperRef = useRef();
    swiperRef.current = new Array(state.length)
    const params = {
        slidesPerView: 5,
        spaceBetween: 30,
        direction: "horizontal",
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // }
    }
    // const goNext = (id) => {
    //     const currentSwiper = swiperRef.current.filter(item => {
    //         console.log(item)
    //         return item.parentNode.id === id
    //     })
    //     if(currentSwiper.length){
    //         currentSwiper[0].swiper.slideNext()
    //     }
    // };
    // const goPrev = (id) => {
    //     const currentSwiper = swiperRef.current.filter(item => item.parentNode.id === id)
    //     console.log(currentSwiper)
    //     if(currentSwiper.length){
    //         currentSwiper[0].swiper.slidePrev();
    //     }
    // };

    return (
        <div>
            <div className="margin-in-mainSection my-5">
                <div className="row">
                {
                    state.length ? (
                        state.map((item, idx) => (
                            <Fragment key={item._id}>
                                <MainSectionSideHeading item={item} />
                                <div className="col-md-10 mb-5" id={item._id}>
                                <Swiper ref={el => swiperRef.current[idx] = el} {...params}    >
                                {
                                    item.items.map(department => (
                                        <div key={department._id}>
                                            <MainSectionItems item={department} />
                                        </div>
                                    ))
                                }
                                </Swiper>
                                {/*<ArrowImageLeft arrowImageLeft={() => goPrev(item._id)} />
                            <ArrowImageRight arrowImageRight={() => goNext(item._id)} />*/}
                                </div>
                            </Fragment>
                        ))
                    ) : null
                }
                </div>
            </div>
        </div>
    )
}

export default CategoryMainSection