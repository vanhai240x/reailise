import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import WorkListImages from './WorkListImages'
import googlelogo from '../assets/images/google-logo.svg'
import f1logo from '../assets/images/f1-logo.svg'
import ikialogo from '../assets/images/ikea-logo.svg'
import universallogo from '../assets/images/universal-logo.svg'
import toyotacarlogo from '../assets/images/toyota-car-logo.svg'
import zalandologo from '../assets/images/zalando-logo.svg'
import infinitelogo from '../assets/images/infinite-logo.svg'
import gialogo from '../assets/images/gea.svg'
import asoslogo from '../assets/images/asos-logo.svg'
import braclayslogo from '../assets/images/barclays-logo.svg'
import kenjologo from '../assets/images/KENJO.svg'
import WorkListNames from './WorkListNames'
import smoothScrollTo from '../helpers/smoothScrollTo'
import Marquee from "react-fast-marquee";
import wefox from '../assets/images/wefox-logo.svg'
import mineirors from '../assets/images/MINEIROS-LOGO.svg'
import { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({
    works = [
        {
            id: 0,
            name: 'Wefox',
            src: '/wefox.png',
            srcmobile: '/wefox-mobile.png'
        },
        {
            id: 1,
            name: 'Theorem',
            src: '/THEOREM.png',
            srcmobile: '/theorem-mobile.png'
        },
        {
            id: 2,
            name: 'Mineiros',
            src: '/MINEIROS.png',
            srcmobile: '/mineiros-mobile.png'
        },
    ],
}) => {
    const [mode, setMode] = useState('all') // [all,venture,agency]
    const [sortedWorks, setSortedWorks] = useState(works)
    const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
    const [arbitrarySelectedIndex, setArbitrartySelectedIndex] = useState(null)
    const main = useRef();
    useEffect(() => {
        smoothScrollTo(null, 0, 0)
        if (mode === 'all') {
            setSortedWorks(works)
        }
        else if (mode === 'venture') {
            const newSortedWorks = works.filter(w => w.case.document.data.type === 'Venture')
            setSortedWorks(newSortedWorks)
        }
        else if (mode === 'agency') {
            const newSortedWorks = works.filter(w => w.case.document.data.type === 'Agency')
            setSortedWorks(newSortedWorks)
        }
    }, [mode])

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            setTimeout(() => {
                gsap.from('.portfolio__mobile .WorkListImages__ItemImage', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: "top center",
                    }
                });
                gsap.from('.portfolio__mobile .swiper-slide h4', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .swiper-slide h4',
                        start: "top center",
                    }
                });
                gsap.from('.portfolio__mobile .swiper-pagination', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .swiper-pagination',
                        start: "top center",
                    }
                });
                gsap.from('.portfolio__mobile .portfolio__clients', {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .portfolio__clients',
                        start: "top center",
                    }
                });
                gsap.to('.portfolio__mobile .portfolio__clients--cta', {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .portfolio__clients',
                        start:'top bottom'
                    }
                });
            }, 1000);
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    const handleNewCurrentWorkIndex = newCurrentWorkIndex => {
        setCurrentWorkIndex(newCurrentWorkIndex)
    }
    const handleWorkListNameOrThumbnailClick = newIndex => {
        setArbitrartySelectedIndex(newIndex + 2.4)
    }
    let transitionKey = sortedWorks[0] ? sortedWorks[0].id : ''
    transitionKey += sortedWorks[1] ? sortedWorks[1].id : ''
    return (
        <div className='portfolio' ref={main}>
            <div className="portfolio__desktop">
                <WorkListNames
                    works={sortedWorks}
                    currentWorkIndex={currentWorkIndex}
                    onNameClick={handleWorkListNameOrThumbnailClick}
                    mode={mode}
                />
                <WorkListImages
                    arbitrarySelectedIndex={arbitrarySelectedIndex}
                    onNewCurrentWorkIndex={handleNewCurrentWorkIndex}
                />
            </div>
            <div className="portfolio__mobile">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={5}
                    slidesPerView={1.10}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={work.id}>
                            <img
                                className="WorkListImages__ItemImage"
                                src={work.srcmobile}
                            />
                            <h4>
                                {work.name}
                            </h4>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className="portfolio__clients">
                    <div className="portfolio__clients--slideAnim">
                        <Marquee speed={50}>
                            <div className="portfolio__clients--logoWrapper">
                                <div className="portfolio__clients--logo">
                                    <img src={googlelogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={f1logo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={ikialogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={universallogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={toyotacarlogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={zalandologo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={infinitelogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={gialogo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={asoslogo} alt="" />
                                </div>
                                {/* <div className="portfolio__clients--logo">
                                    <img src={braclayslogo} alt="" />
                                </div> */}
                                <div className="portfolio__clients--logo">
                                    <img src={kenjologo} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={wefox} alt="" />
                                </div>
                                <div className="portfolio__clients--logo">
                                    <img src={mineirors} alt="" />
                                </div>
                            </div>
                        </Marquee>
                    </div>
                    <Link to='/portfolio' className='portfolio__clients--cta btntrans' data-title="View all work">
                        View all work
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Portfolio