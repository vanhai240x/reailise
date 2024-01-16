import React, { useRef, useLayoutEffect } from 'react'
import mineirosbanner1 from '../assets/images/mineiros-banner1.png'
import mineirosbanner2 from '../assets/images/mineiros-banner2.png'
import mineirosbanner3 from '../assets/images/mineiros-banner3.png'
import mineirosmobile1 from '../assets/images/mineiros-mobile1.png'
import mineirosmobile2 from '../assets/images/mineiros-mobile2.png'
import mineirosmobile3 from '../assets/images/mineiros-mobile3.png'
import mineiroslogo from '../assets/images/mineiros-logo-new.svg'
import Splitting from 'splitting'
import { gsap } from "gsap";
import { Expo } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


gsap.registerPlugin(ScrollTrigger);

const Mineiros = () => {
    const splittingRef = useRef([]);
    const innermain = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const text = new Splitting({ target: '.split-text', by: 'chars' });

            const transdetailstl = gsap.timeline()

            setTimeout(() => {
                transdetailstl.to(".detailsInnerHero__projectInfo h2 .char", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.01,
                    duration: .8,
                    ease: Expo.easeOut
                });
                transdetailstl.to(".detailsInnerHero__headingWrapper", {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: Expo.easeOut
                }, '>-.7');
                transdetailstl.to(".detailsInnerHero__moreInfo--text p .char", {
                    delay: -1,
                    y: 0,
                    skewY: 0,
                    opacity: 1,
                    stagger: 0.001,
                    duration: 1,
                    ease: Expo.easeOut
                });

                ScrollTrigger.batch(".img-slide", {
                    onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: .8, ease: "sine.out" }),
                    start: '-=550px'
                });
                ScrollTrigger.batch(".detailsBlock__text p .char", {
                    onEnter: batch => gsap.to(batch, {
                        y: 0, opacity: 1, stagger: 0.0004, duration: .6,
                    }),
                });


                gsap.to('.detailsExplained__heading .sectionTitle__shape', {
                    opacity: 1,
                    ease: "sine.out",
                    duration: .5,
                    scrollTrigger: {
                        trigger: '.detailsExplained__heading',
                        scrub: false,
                        start: "top 80%",

                    }
                })
                gsap.to('.detailsExplained__heading .sectionTitle__heading h4 .char', {
                    y: 0,

                    opacity: 1,
                    ease: "sine.out",
                    stagger: 0.005,
                    duration: .5,
                    scrollTrigger: {
                        trigger: '.detailsExplained__heading',
                        scrub: false,
                        start: "top 80%",
                        pin: 0,

                    }
                })
                gsap.to('.detailsExplained__text h2 .char', {
                    y: 0,

                    opacity: 1,
                    ease: "sine.out",
                    stagger: 0.005,
                    duration: .5,
                    scrollTrigger: {
                        trigger: '.detailsExplained__text',
                        scrub: false,
                        start: "top 70%",
                        pin: 0,

                    }
                })
                gsap.to('.detailsExplained__text p .word', {
                    y: 0,
                    opacity: 1,
                    stagger: 0.008,
                    duration: .4,
                    scrollTrigger: {
                        trigger: '.detailsExplained__text p',
                        scrub: false,
                    }
                })
            }, 1200);

        }, innermain); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    return (
        <div className='innerbg' ref={innermain}>

            <div className="detailsInnerHero">
                <div className="detailsInnerHero__projectInfo">
                    <div className="container">
                        <h2 className="detailsInnerHero__projectName split-text" data-splitting>
                            Mineiros
                        </h2>
                    </div>
                    <div className="detailsInnerHero__headingWrapper">
                        <Marquee speed={70}>
                            <h1 className="detailsInnerHero__projectHeading big innerBigText">
                                The IaC Solutions led branding
                            </h1>
                        </Marquee>
                    </div>
                </div>
                <div className="container">
                    <div className="detailsInnerHero__moreInfo">
                        <ul className="detailsInnerHero__moreInfo--catagory">
                            <li className="catagory__item">
                                <p>
                                    BRANDING
                                </p>
                            </li>
                            <li className="catagory__item">
                                <p>
                                    RESPONSIVE WEBSITE
                                </p>
                            </li>
                            <li className="catagory__item">
                                <p>
                                    PRODUCT UI DESIGN
                                </p>
                            </li>
                            <li className="catagory__item">
                                <p>
                                    PRODUCT UX DESIGN
                                </p>
                            </li>
                        </ul>
                        <div className="detailsInnerHero__moreInfo--text right_col">
                            <p className='split-text' data-splitting>
                                We completely transformed Mineiros. Using slick, light-filled gradients, dynamic illustrations and forward-thinking, futuristic graphics paired with a bold colour scheme. Mineiros now looks like a game-changer for their industry, Infrastructure As Code. We designed their new complete brand, logo, responsive website and SaaS product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projectBanner">
                <div className="container">
                    <img className="img-slide" src={mineirosbanner1} alt="" />
                </div>
            </div>

            <div className="detailsExplained">
                <div className="container">
                    <div className="detailsExplained__content">
                        <div className="detailsExplained__heading sectionTitle">
                            <div className="sectionTitle__shape">
                                <img src="../assets/images/round-ball.png" alt="" />
                            </div>
                            <div className="sectionTitle__heading">
                                <h4 className='split-text' data-splitting>
                                    EXPLAINED
                                </h4>
                            </div>
                        </div>
                        <div className="detailsExplained__text right_col">
                            <h2 className='split-text' data-splitting>
                                The innovative, unique brand for a game-changer in the Infrastructure As Code industry
                            </h2>
                            <p className='split-text' data-splitting>
                                We combined carefully devised illustration styles, one more abstract and one more literal to help portray what Mineiros does in a visually engaging and exciting way. All illustrations are light, and use the signature gradient. The light and airy feeling is of course what users should feel when they use the SaaS product, which is connected to the main visual in the logo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailsBlock">
                <div className="container">
                    <div className="detailsBlock__banner">
                        <img className="img-slide" src={mineirosbanner2} alt="" />
                    </div>
                </div>
            </div>

            <div className="detailsLogo">
                <div className="container">
                    <div className="detailsLogo__wrapper right_col">
                        <img className="img-slide" src={mineiroslogo} alt="" />
                    </div>
                </div>
            </div>

            <div className="mobileScreen">
                <div className="container">
                    <div className="mobileScreen__wrapper">
                        <div className="mobileScreen__wrapper--item">
                            <img className="img-slide" src={mineirosmobile1} alt="" />
                        </div>
                        <div className="mobileScreen__wrapper--item">
                            <img className="img-slide" src={mineirosmobile2} alt="" />
                        </div>
                        <div className="mobileScreen__wrapper--item">
                            <img className="img-slide" src={mineirosmobile3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailsBlock bottomMargin">
                <div className="container">
                    <div className="detailsBlock__banner">
                        <img className="img-slide" src={mineirosbanner3} alt="" />
                    </div>
                    <div className="detailsBlock__text right_col">
                        <p className='split-text' data-splitting>
                            The wefox brand book shows off the simplistic, minimal yet unique aesthetic. A bold playful colour pallette is friendly and catches the eye. We chose the primary orange colour as it’s associated with joy, warmth and creativity, the perfect connotations for the wefox brand.
                        </p>
                    </div>
                </div>
            </div>

            <div className="innerNav">
                <div className="container">
                    <div className="innerNav__wrapper">
                        <Link to='/neom' className="link" data-title="previous project">
                            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.3812 26.8816C12.6214 27.1695 12.9716 27.3432 13.3461 27.36C13.7206 27.377 14.0852 27.2356 14.3504 26.9705C14.6153 26.7053 14.7569 26.341 14.7398 25.9665C14.7228 25.5917 14.5492 25.2415 14.2612 25.0016L3.39145 14.0747L3.39145 15.3988C3.85227 15.3741 4.80145 15.47 4.29244 14.9805C3.39145 14.53 3.39145 14.53 3.39145 13.59C3.39145 13.135 3.85228 12.7498 3.39145 12.7254L3.39145 14.0747L14.276 3.13341C14.5178 2.88005 14.6526 2.54355 14.6526 2.19341C14.6526 1.84328 14.5178 1.50654 14.276 1.25341C14.0268 1.00346 13.6887 0.863144 13.336 0.863144C12.9832 0.863144 12.6449 1.00346 12.396 1.25341L0.514311 13.135C0.258852 13.381 0.114335 13.7202 0.114335 14.0747C0.114335 14.4296 0.258852 14.769 0.514311 15.0147L12.3812 26.8816Z"
                                    fill="white" />
                            </svg>
                            previous project
                        </Link>
                        <Link to='/wefox' className="link" data-title="next project">
                            next project
                            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.61881 1.11844C2.37856 0.830459 2.02842 0.656835 1.6539 0.640049C1.27937 0.623001 0.914793 0.76437 0.649645 1.02953C0.384746 1.29469 0.243118 1.659 0.260166 2.03352C0.277214 2.40831 0.450835 2.75846 0.738817 2.99843L11.6086 13.9253V12.6012C11.1477 12.6259 10.1986 12.53 10.7076 13.0195C11.6086 13.47 11.6086 13.47 11.6086 14.41C11.6086 14.865 11.1477 15.2502 11.6086 15.2746V13.9253L0.724046 24.8666C0.482224 25.1199 0.347418 25.4565 0.347418 25.8066C0.347418 26.1567 0.482224 26.4935 0.724046 26.7466C0.973206 26.9965 1.31128 27.1369 1.66404 27.1369C2.01681 27.1369 2.35514 26.9965 2.60404 26.7466L14.4857 14.865C14.7411 14.619 14.8857 14.2798 14.8857 13.9253C14.8857 13.5704 14.7411 13.231 14.4857 12.9853L2.61881 1.11844Z"
                                    fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mineiros