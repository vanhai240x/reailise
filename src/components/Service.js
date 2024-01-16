import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bggrid from '../assets/images/bg-grid.svg'
gsap.registerPlugin(ScrollTrigger);


const Service = () => {
    useEffect(() => {

        gsap.from('.service__vision--slide', {
            scrollTrigger: {
                trigger: '.service',
                start: "-=50%",
            },
            y: '110%',
        });
        gsap.from('.service__textbox', {
            scrollTrigger: {
                trigger: '.service',
                start: "-=30%",
            },
            y: 100,
            opacity: 0,
        });

        ScrollTrigger.refresh()

    }, []);
    return (
        <div className="service" data-scroll-section>
            <div className="service__bg">
                <img src={bggrid} alt="" />
            </div>
            <div className="service__vision">
                <Parallax translateX={[0, -20]} className='mdone'>
                    <div className="service__vision--slide textSlide">
                        <h1 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
                            Fearless visionaries
                        </h1>
                    </div>
                </Parallax>
                <Parallax translateX={[0, -100]} className='mdblock'>
                    <div className="service__vision--slide textSlide">
                        <h1 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
                            Fearless visionaries
                        </h1>
                    </div>
                </Parallax>
            </div>
            <Parallax speed={20}>
                <div className="service__textbox">
                    <span className="border">
                        <svg width="698" height="196" preserveAspectRatio='none' viewBox="0 0 698 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-202.5" y="0.5" width="900" height="195" rx="97.5" fill="#22201E" fill-opacity="0.7" stroke="url(#paint0_linear_742_817)" />
                            <defs>
                                <linearGradient id="paint0_linear_742_817" x1="476.529" y1="0.00117793" x2="-39.7695" y2="54.6592" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#585653" />
                                    <stop offset="0.767226" stop-color="#47413A" />
                                    <stop offset="0.844475" stop-color="#97FC6A" />
                                    <stop offset="0.900271" stop-color="#93A58B" stop-opacity="0.641243" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <div className="bordermobile">
                        <svg width="372" height="193" preserveAspectRatio='none' viewBox="0 0 372 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="371" height="192" rx="29.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19469)" />
                            <defs>
                                <linearGradient id="paint0_linear_994_19469" x1="280.56" y1="0.0011599" x2="65.4286" y2="9.55053" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#585653" />
                                    <stop offset="0.767226" stop-color="#47413A" />
                                    <stop offset="0.844475" stop-color="#97FC6A" />
                                    <stop offset="0.900271" stop-color="#93A58B" stop-opacity="0.641243" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <button>
                        +
                    </button>
                    <p>
                        Fear is the mortal enemy of creativity, joy and happiness. We celebrate the genius in those who
                        decide to run free. And we achieve together.
                    </p>
                </div>
            </Parallax>
        </div>
    )
}

export default Service