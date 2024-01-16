import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import Splitting from 'splitting'

const WorkWithUs = () => {
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
        <div className='workwithus'>
            <div className="workwithus__inner">
                <div className="workwithus__content">
                    <div className='workwithus__content--title' id='target' ref={splttext}>
                        <div className="line">
                            We are future-orientated and thrive
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            in complexity as we are problem-
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            solvers at our core. Our aim is to
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            win awards and create industry-
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            defining solutions across mobile
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            and web.
                            <div className="mask" ref={mask}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs