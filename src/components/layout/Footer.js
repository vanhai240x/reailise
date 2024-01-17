import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Parallax } from 'react-scroll-parallax'
import logoblack from '../../assets/images/logo-black.svg'
import logoblackFooter from '../../assets/images/logo-black-footer.svg';
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
                                <Link className='btntrans bblack' data-title='Say hello'
                                    to='#'
                                    onClick={(e) => {
                                        window.location.href = 'mailto:rebecca@reailise.com ';
                                        e.preventDefault();
                                    }}
                                >
                                    Say hello
                                </Link>
                            </div>
                        </div>
                        <div className="footer__contactinfo--right">
                            <p>
                                From England <br/>
                                Living in Berlin <br/>
                                Available to moooooove for work
                            </p>
                            <Link className='btntrans bblack' data-title='Say hello'
                                to='#'
                                onClick={(e) => {
                                    window.location.href = 'mailto:rebecca@reailise.com ';
                                    e.preventDefault();
                                }}
                            >
                                Say hello
                            </Link>
                        </div>
                    </div>
                    <div className="footer__logo">
                        <img src={logoblackFooter} alt="" />
                    </div>
                </div>
            </footer>
        </Parallax>

    )
}

export default Footer