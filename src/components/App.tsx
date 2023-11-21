'use client'
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './app.sass'

import Image from "next/image";
import ImageLogo from "@/components/image/a8.webp";
import React from "react";

export default function App() {

    return (
        <div className='slider__ app'>
            <Splide tag="section" options={{
                rewind: true,
                perPage: 1,
                width: 1500,
                autoplay: 'start',
                breakpoints: {
                    800: {
                        arrows: false
                    }
                }

            }} hasTrack={false} aria-label="...">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide" data-splide-interval="1000">
                            <img data-v-4ef8b88e="" className="swiper-lazy main-banner__image swiper-lazy-loaded"
                                 srcSet="https://static.re-store.ru/upload/resize_cache/iblock/034/10500_600_140cd750bba9870f18aada2478b24840a/igbf5qvkhnsje7wsv1yshak32wr499bq.jpg 1x,https://static.re-store.ru/upload/iblock/034/igbf5qvkhnsje7wsv1yshak32wr499bq.jpg 2x"
                                 src="https://static.re-store.ru/upload/resize_cache/iblock/034/10500_600_140cd750bba9870f18aada2478b24840a/igbf5qvkhnsje7wsv1yshak32wr499bq.jpg"></img>
                        </li>
                        <li className="splide__slide" data-splide-interval="10000">
                            <img data-v-4ef8b88e=""
                                 className="swiper-lazy main-banner__image swiper-lazy-loaded"
                                 srcSet="https://static.re-store.ru/upload/resize_cache/iblock/c88/10500_600_140cd750bba9870f18aada2478b24840a/uuu31old7w2f63rq1guih9sn33ecqa3z.jpg 1x,https://static.re-store.ru/upload/iblock/c88/uuu31old7w2f63rq1guih9sn33ecqa3z.jpg 2x"
                                 src="https://static.re-store.ru/upload/resize_cache/iblock/c88/10500_600_140cd750bba9870f18aada2478b24840a/uuu31old7w2f63rq1guih9sn33ecqa3z.jpg"></img>
                        </li>
                    </ul>
                </div>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <svg style={{rotate: '180deg'}} xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                             viewBox="0 0 24 24" fill="none"
                             stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <svg style={{rotate: '180deg'}} xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                             viewBox="0 0 24 24" fill="none"
                             stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <ul className="splide__pagination splide__pagination--ltr" role="tablist"
                        aria-label="Select a slide to show">
                        <li role="presentation">
                            <button className="splide__pagination__page" type="button" role="tab"
                                    aria-controls="splide01-slide01" aria-label="Go to slide 1" ></button>
                        </li>
                        <li role="presentation">
                            <button className="splide__pagination__page is-active" type="button" role="tab"
                                    aria-controls="splide01-slide02" aria-label="Go to slide 2"
                                    aria-selected="true"></button>
                        </li>
                    </ul>
                </div>
            </Splide>
        </div>
    );
};