import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import TextScroll from './TextScroll';
import Splitting from 'splitting'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const Ethos = () => {
    const splttext = useRef(null)
    const mask = useRef(null)
    const text = new Splitting({ target: splttext.current, by: 'lines' });
    const comp = useRef();

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {

        gsap.utils.toArray(".mask").forEach(elem => {
            gsap.to(elem, {
                width: 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: 'bottom center',
                    scrub: true
                }
            });
        });

    }, []);
    return (
        <div className="ethos" id='ethos'>
            <div className="ethos__content">
                <h4 className="ethos__content--mobiletitle">
                    my ethos
                </h4>
                <div className='ethos__content--title' id='target' ref={splttext}>
                    <div className="line">
                        I consistently question the
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        established norms and craft
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        groundbreaking solutions that
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        redefine industry standards, all
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        achieved through close
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        collaboration with my clients.
                        <div className="mask" ref={mask}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ethos