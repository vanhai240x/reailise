import React, { useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import ratio from '../helpers/ratio'
import { tabletP } from '../utils/bp'
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
import wefox from '../assets/images/wefox-logo.svg'
import mineirors from '../assets/images/MINEIROS-LOGO.svg'
import kenjologo from '../assets/images/KENJO.svg'
import Marquee from "react-fast-marquee";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkListNameInner = ({ works = [], currentWorkIndex = 0, onNameClick, mode = null }) => {

    const [rollerTranslateY, setRollerTranslateY] = useState(0)

    useEffect(() => {
        if (window.innerWidth > tabletP) {
            setRollerTranslateY(ratio(-4) * currentWorkIndex)
        }
    }, [currentWorkIndex])

    useEffect(() => {
        gsap.to(".WorksListNames__ItemEnterContainer p", {
            y: 0,
            opacity: 1,
            duration: .4,
            stagger: 0.05
        });
    }, [])

    let transitionKey = works[0] ? works[0].id : ''
    transitionKey += works[1] ? works[1].id : ''

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={transitionKey}
                timeout={300}
            >
                <div className={`WorkListNames inner ${mode}`}>
                    <div className="portfolio__clients">
                        <a className="portfolio__clients--cta btntrans scrollbtn" data-title="View all work" href="">View all work</a>
                        <div className="portfolio__clients--slideAnim scrolltrans">
                            <Marquee speed={30}>
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
                    </div>
                    <ul className="WorkListNames__Roller" style={{ transform: `translate3d(0, ${rollerTranslateY}vw, 0)` }}>
                        {works.map((work, index) => {
                            const distFromCurrent = currentWorkIndex - index
                            return (
                                <div className="WorksListNames__ItemEnterContainer" key={`works-list-names-${index}`}>
                                    <p
                                        className={`WorksListNames__Item ${currentWorkIndex === index ? 'isCurrent' : ''} WorksListNames__Item--DistFromCurrent${distFromCurrent}`}
                                        onClick={() => onNameClick(index)}
                                    >
                                        <span data-title={work.name}>{work.name}</span>
                                    </p>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default WorkListNameInner
