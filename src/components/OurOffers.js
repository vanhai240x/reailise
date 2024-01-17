import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import brandlogo from '../assets/images/brand-logo.svg'
import wdlogo from '../assets/images/web-deisgn-icon.svg'
import pdlogo from '../assets/images/product-icon.svg'
import OffersBlocks from './OffersBlocks'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';


gsap.registerPlugin(ScrollTrigger);

const OurOffers = () => {
    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            gsap.to('.ouroffers__card', {
                y: 0,
                opacity: 1,
                duration: .5,
                stagger: .2,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__card--icon', {
                scale: .8,
                opacity: 0,
                duration: .8,
                stagger: .3,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__card h4', {
                y: 60,
                opacity: 0,
                duration: .5,
                stagger: .3,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__mobile .ouroffers__mobile--title', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__mobile .swiper-slide h4', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .swiper-slide h4',
                    start: '-=700px'
                },
            });
            gsap.from('.ouroffers__mobile .swiper-pagination', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .swiper-pagination',
                    start: '-=700px'
                },
            });
            gsap.from('.ouroffers__mobile .ouroffers__mobile--cta a', {
                scale: .7,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .ouroffers__mobile--cta',
                    start: '-=700px'
                },
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    return (
        <div className="ouroffers" ref={main}>
            <div className="offergradient"></div>
            <div className="offergradient2"></div>
            <div className="ouroffers__mobile">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={23}
                    slidesOffsetAfter={20}
                    slidesPerView={1.13}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="ouroffers__card">
                            <div className="bordermobile">
                                <svg width="323" height="400" preserveAspectRatio='none' viewBox="0 0 323 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="322" height="399" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19505)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_994_19505" x1="106.643" y1="-16.4782" x2="212.448" y2="479.311" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8E8E8E" />
                                            <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                                            <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                                            <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                                            <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="plusicon">+</span>
                            <div className="ouroffers__card--icon">
                                <img src={brandlogo} alt="" />
                            </div>
                        </div>
                        <h4>
                            Brand design
                        </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ouroffers__card">
                            <div className="bordermobile">
                                <svg width="323" height="400" preserveAspectRatio='none' viewBox="0 0 323 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="322" height="399" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19505)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_994_19505" x1="106.643" y1="-16.4782" x2="212.448" y2="479.311" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8E8E8E" />
                                            <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                                            <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                                            <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                                            <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="plusicon">+</span>
                            <div className="ouroffers__card--icon">
                                <img src={wdlogo} alt="" />
                            </div>
                        </div>
                        <h4>
                            Web design + build
                        </h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ouroffers__card">
                            <div className="bordermobile">
                                <svg width="323" height="400" preserveAspectRatio='none' viewBox="0 0 323 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="322" height="399" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19505)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_994_19505" x1="106.643" y1="-16.4782" x2="212.448" y2="479.311" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8E8E8E" />
                                            <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                                            <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                                            <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                                            <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="plusicon">+</span>
                            <div className="ouroffers__card--icon">
                                <img src={pdlogo} alt="" />
                            </div>
                        </div>
                        <h4>
                            Product design
                        </h4>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className="ouroffers__mobile--cta">
                    <Link className='btntrans' data-title='Contact us'
                        to='#'
                        onClick={(e) => {
                            window.location.href = 'mailto:rebecca@reailise.com ';
                            e.preventDefault();
                        }}
                    >
                        Contact us
                    </Link>
                </div>
            </div>
            <OffersBlocks />
        </div>
    )
}

export default OurOffers