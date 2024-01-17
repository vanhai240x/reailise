import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { gsap } from "gsap";
import { Power3 } from "gsap/all";

const Header = () => {
    const comp = useRef();
    const [mobilemode, setmobilemode] = useState(false)
    const headerlogo = useRef();
    const headernav = useRef();
    const headerbtn = useRef();

    const handleMobileNav = () => {
        setmobilemode(!mobilemode)
    }

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            if (window.location.href.includes('portfolio')
                || window.location.href.includes('wefox')
                || window.location.href.includes('kenjo')
                || window.location.href.includes('brickblock')
                || window.location.href.includes('toyota')
                || window.location.href.includes('gea')
                || window.location.href.includes('mineiros')
                || window.location.href.includes('misterspex')
                || window.location.href.includes('neom')
                || window.location.href.includes('theorem')) {
                gsap.to(headernav.current, {
                    y: 0,
                    duration: .6,
                    delay: 1.1,
                    ease: Power3.easeOut
                });
                gsap.to(headerbtn.current, {
                    width: '120px',
                    duration: .7,
                    delay: 1.1,
                    ease: Power3.easeOut
                });
                gsap.to(headerlogo.current, {
                    y: 0,
                    opacity: 1,
                    delay: 1.1,
                    duration: .6,
                    ease: Power3.easeOut
                });
            } else {
                gsap.to(headernav.current, {
                    y: 0,
                    duration: .6,
                    delay: 3.8,
                    ease: Power3.easeOut
                });
                gsap.to(headerbtn.current, {
                    width: '120px',
                    duration: .7,
                    delay: 3.8,
                    ease: Power3.easeOut
                });
                gsap.to(headerlogo.current, {
                    y: 0,
                    opacity: 1,
                    duration: .6,
                    delay: 3.8,
                    ease: Power3.easeOut
                });
            }

            setTimeout(() => {
                gsap.to('.header', {
                    scrollTrigger: {
                        trigger: '.footer',
                        scrub: .1,
                        start: '-=500px',
                        toggleClass: { targets: '.header', className: 'hide' },
                        end: 'bottom top'
                    }
                })
                gsap.to('.subnav', {
                    scrollTrigger: {
                        trigger: '.footer',
                        scrub: .1,
                        start: '-=500px',
                        toggleClass: { targets: '.subnav', className: 'hide' },
                        end: 'bottom top'
                    }
                })
            }, 1000);

        }, [comp]); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup

    }, []);
    return (
        <header className="header">
            <button className={"header__mobileToggle " + (mobilemode ? "active" : "")} onClick={handleMobileNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="container d__flex jc__between ai__center">
                <div className="header__logo">
                    <Link to='/'>
                        <img src={logo} alt="" ref={headerlogo} />
                    </Link>
                </div>
                <nav className={"header__nav " + (mobilemode ? "show" : "")}>
                    <ul className="header__nav--menu">
                        <li className="header__nav--menu--item">
                            <Link className="link" data-title="Let’s talk" ref={headerbtn}
                                to='#'
                                onClick={(e) => {
                                    window.location.href = 'mailto:rebecca@reailise.com ';
                                    e.preventDefault();
                                }}
                            >
                                Let’s talk
                            </Link>
                        </li>
                        <li className="header__nav--menu--item">
                            <Link to='/portfolio' className="btnPrimary" data-title="Portfolio" ref={headernav}>
                                Portfolio
                            </Link>
                        </li>
                        {/* <li className="header__nav--menu--item">
                            <a href="mailto:rebecca@reailise.com " href="" className="">

                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header