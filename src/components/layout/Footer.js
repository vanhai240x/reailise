import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Parallax } from 'react-scroll-parallax'
import logoblack from '../../assets/images/logo-black.svg'
import { gsap } from "gsap";
import { Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from 'splitting'
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const splttext = useRef(null)
    const text = new Splitting({ target: splttext.current, by: 'word' });
    useEffect(() => {
        // let tl = gsap.timeline({

        // });
        gsap.from('.footer__logo', {
            scrollTrigger: {
                trigger: '.footer__top',
                start: "top+=30%",
            },
            y: "120%",
            skewY: '5deg',
            duration: .7,
            onStart: function () {
                console.log("hello footer");
            },
        });

        let getintouchtl = gsap.timeline({
            repeat: -1, yoyo: false,
            scrollTrigger: {
                trigger: '.footer',
                scrub: false,
                start: "top 70%",
                pin: 0,

            }
        });
        getintouchtl.to(".footerheading1", { duration: .55, y: 0, opacity: 1, ease: Power3.easeInOut });
        getintouchtl.to(".footerheading1", { delay: 1.2, duration: .55, y: '-100%', opacity: 0, ease: Power3.easeInOut });
        getintouchtl.to(".footerheading2", { duration: .55, y: 0, opacity: 1, ease: Power3.easeInOut });
        getintouchtl.to(".footerheading2", { delay: 1.2, duration: .55, y: '-100%', opacity: 0, ease: Power3.easeInOut });
    }, []);
    return (
        <Parallax speed={-30}>
            <footer className='footer'>
                <div className="footer__top">
                    <div className="footer__contactinfo">
                        <div className="footer__contactinfo--left">
                            <div className="footer__contactinfo--heading">
                                <h3 className='footerheading1'>
                                    Take a seat
                                </h3>
                                <h3 className='footerheading2'>
                                    Can’t wait to meet you
                                </h3>
                            </div>
                            <div className="footer__contactinfo--cta">
                                <Link className='btntrans bblack' data-title='Contact us'
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
                        <div className="footer__contactinfo--right">
                            <h4>
                                Contact@reailise.com
                            </h4>
                            <p>
                                Factory Görlitzer Park <br />
                                Lohmühlenstraße 65 <br />
                                12435 Berlin
                            </p>
                            <Link className='btntrans bblack' data-title='Contact us'
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
                    <div className="footer__logo">
                        <img src={logoblack} alt="" />
                    </div>
                </div>
                <div className="footer__copy">
                    <p>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 2.33333H1.77778V0.555556H10.6667V2.33333ZM8.88889 4.11111V5.88889H5.33333V7.66667H8.88889V9.44444H3.55556V4.11111H8.88889ZM12.4444 11.2222H10.6667V2.33333H12.4444V11.2222ZM10.6667 13H1.77778V11.2222H10.6667V13ZM1.77778 11.2222H0V2.33333H1.77778V11.2222Z" fill="white" />
                        </svg>
                        2023 Reailise all rights reserved
                    </p>
                </div>
            </footer>
        </Parallax>

    )
}

export default Footer