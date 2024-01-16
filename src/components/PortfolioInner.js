import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
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
import WorkListNameInner from './WorkNameInner';
import WorkListImagesInner from './WorkListInner';

import { gsap } from "gsap";
import { Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioInner = ({
    works = [
        {
            id: 0,
            name: 'Wefox',
            src: '/wefox.png',
            srcmobile: '/wefox-mobile.png',
            path: '/wefox'
        },
        {
            id: 1,
            name: 'Theorem',
            src: '/THEOREM.png',
            srcmobile: '/theorem-mobile.png',
            path: '/theorem'
        },
        {
            id: 2,
            name: 'Mineiros',
            src: '/MINEIROS.png',
            srcmobile: '/mineiros-mobile.png',
            path: '/'
        },
        {
            id: 3,
            name: 'Gea',
            src: '/gea-thumb.png',
            srcmobile: '/gea-mobile.png',
            path: '/gea'
        },
        {
            id: 4,
            name: 'Toyota',
            src: '/toyota-thumb.png',
            srcmobile: '/toyota-mobile.png',
            path: '/toyota'
        },
        {
            id: 5,
            name: 'Kenjo',
            src: '/kenjo-thumb.png',
            srcmobile: '/kenjo-mobile.png',
            path: '/kenjo'
        },
        {
            id: 6,
            name: 'Misterspex',
            src: '/misterspex-thumb.png',
            srcmobile: '/misterspex-mobile.png',
            path: '/misterspex'
        },
        {
            id: 7,
            name: 'Neom',
            src: '/neom-thumb.png',
            srcmobile: '/neom-mobile.png',
            path: '/neom'
        },
        // {
        //     id: 8,
        //     name: 'Brickblock',
        //     src: '/brickblock-banner2.png',
        //     srcmobile: '/brickblock-banner2.png',
        //     path: '/brickblock'
        // },
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
            gsap.utils.toArray(".portfolio__mobile--item img").forEach(elem => {
                gsap.to(elem, {
                    y: 0,
                    opacity:1,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top bottom",
                        end: 'bottom center',
                    }
                });
            });
            gsap.utils.toArray(".portfolio__mobile--item h4").forEach(elem => {
                gsap.to(elem, {
                    y: 0,
                    opacity:1,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top bottom",
                        end: 'bottom center',
                    }
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


    const handleNewCurrentWorkIndex = newCurrentWorkIndex => {
        setCurrentWorkIndex(newCurrentWorkIndex)
    }
    const handleWorkListNameOrThumbnailClick = newIndex => {
        setArbitrartySelectedIndex(newIndex + .4)
    }
    let transitionKey = sortedWorks[0] ? sortedWorks[0].id : ''
    transitionKey += sortedWorks[1] ? sortedWorks[1].id : ''
    return (
        <div className='portfolio' ref={main}>
            <div className="portfolio__desktop">
                <WorkListNameInner
                    works={sortedWorks}
                    currentWorkIndex={currentWorkIndex}
                    onNameClick={handleWorkListNameOrThumbnailClick}
                    mode={mode}
                />
                <WorkListImagesInner
                    arbitrarySelectedIndex={arbitrarySelectedIndex}
                    onNewCurrentWorkIndex={handleNewCurrentWorkIndex}
                />
            </div>
            <div className="portfolio__mobile">
                {works.map((work, index) => (
                    <div className="portfolio__mobile--item" key={work.id}>
                        <Link to={work.path}>
                            <h4>
                                {work.name}
                            </h4>
                            <img
                                className="WorkListImages__ItemImage"
                                src={work.srcmobile}
                            />
                        </Link>
                    </div>
                ))}
                <div className="portfolio__clients">
                    <div className="portfolio__clients--slideAnim">
                        <Marquee>
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
                                <div className="portfolio__clients--logo">
                                    <img src={braclayslogo} alt="" />
                                </div>
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
                    <a className="portfolio__clients--cta btntrans" data-title="View all work" href="">View all work</a>
                </div>
            </div>



        </div>
    )
}

export default PortfolioInner