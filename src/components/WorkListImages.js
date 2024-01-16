import React, { useRef, useEffect } from 'react'
// import { navigate } from 'gatsby'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import lerp from '../helpers/lerp'
import clamp from '../helpers/clamp'
import smoothScrollTo from '../helpers/smoothScrollTo'
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
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);


const WorkListImages = ({
    works = [
        {
            id: 0,
            src: '/wefox.png',
            path:'/wefox'
        },
        {
            id: 1,
            src: '/THEOREM.png',
            path:'/theorem'
        },
        {
            id: 2,
            src: '/MINEIROS.png',
            path:'/'
        },
    ],
    onNewCurrentWorkIndex,
    opacityThreshold = 3,
    opacityMultiplier = 1.25,
    scaleDiff = 2.5,
    translateDiff = 15,
    scrollStrength = 0.1,
    projectSwitchThreshold = 0.5,
    arbitrarySelectedIndex,
    onItemEnter,
    onItemLeave
}) => {

    const projectsLength = works.length // to remove when linked wiht data
    const opacityThresholdInRatio = (1 / projectsLength) * opacityThreshold

    const containerEl = useRef(null)
    const scrollerItemsEls = useRef([])
    const listItemsEls = useRef([])

    const localCurrentWorkIndex = useRef(0)

    useEffect(() => {
        smoothScrollTo(null, 0, window.innerHeight * arbitrarySelectedIndex)
    }, [arbitrarySelectedIndex])

    useEffect(() => {

        gsap.from(".scrollbtn", {
            scrollTrigger: {
                trigger: ".WorkListImages",
                start: "top top",
                end: "bottom top",
            },
            scale: .8,
            duration: .5,
            opacity: 0,
        });
        gsap.from(".scrolltrans", {
            scrollTrigger: {
                trigger: ".WorkListImages",
                start: "top top",
                end: "bottom top",
            },
            y: 200,
            opacity: 0,
        });

        ScrollTrigger.refresh()

        // if (localStorage.getItem('is-touch') === 'true') return
        if (window.innerWidth < tabletP) return

        let rafId = null
        let wh = null
        let targetRatioProgressOnScreen = [...Array(projectsLength)].map(() => 0)
        let ratioProgressOnScreen = [...Array(projectsLength)].map(() => 0)

        const handleScroll = () => {
            scrollerItemsEls.current.map((scrollerItemEl, index) => {
                if (scrollerItemEl === null) return;
                const scrollerItemElTop = scrollerItemEl.getBoundingClientRect().top
                targetRatioProgressOnScreen[index] = scrollerItemElTop / -wh
                // Update current index
                if (scrollerItemElTop < wh * projectSwitchThreshold && scrollerItemElTop > -wh * (1 - projectSwitchThreshold) && index !== localCurrentWorkIndex.current) {
                    onNewCurrentWorkIndex(index)
                    localCurrentWorkIndex.current = index
                }
            })
        }

        const loop = () => {
            listItemsEls.current.map((listItemEl, index) => {
                if (listItemEl === null) return;
                ratioProgressOnScreen[index] = lerp(ratioProgressOnScreen[index], targetRatioProgressOnScreen[index], scrollStrength)
                // Translate and opacity when on screen
                const clampedRatioOnScreen = clamp(ratioProgressOnScreen[index], 0, 1)
                // Scale and add additional translate y and opacity when below screen
                const ratioBelowScreen = ratioProgressOnScreen[index] / -projectsLength
                const clampedRatioBelowScreen = clamp(ratioBelowScreen, 0, 1)
                // Styles
                listItemEl.style.transform = `translate3d(0, ${(-wh * clampedRatioOnScreen - ratioProgressOnScreen[index] * translateDiff)}px, 0) scale(${1 - (.2 * clampedRatioBelowScreen)})`
                let opacity = 0
                let grayscale = 0
                if (clampedRatioBelowScreen <= opacityThresholdInRatio && clampedRatioBelowScreen > 0) { //bellow screen
                    opacity = 1 - ((clampedRatioBelowScreen - 1.05) / opacityThresholdInRatio) * opacityMultiplier // -0.05 ensure that it's full opacity even while not being fully on screen
                    grayscale = (clampedRatioBelowScreen / opacityThresholdInRatio) * 3
                }
                else if (clampedRatioBelowScreen === 0 && clampedRatioOnScreen >= 0) { // on screen
                    // opacity = 1 - clampedRatioOnScreen
                    opacity = 1
                    grayscale = 1
                }
                listItemEl.style.opacity = opacity
                listItemEl.style.filter = `blur(${grayscale}px)`
            })
            rafId = requestAnimationFrame(loop)
        }

        const handleResize = () => {
            wh = window.innerHeight
        }

        rafId = requestAnimationFrame(loop)
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        handleResize()
        handleScroll()
        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // const handleListItemClick = () => {
    //     navigate(`/case/${works[localCurrentWorkIndex.current].case.document.uid}`)
    // }

    let transitionKey = works[0] ? works[0].id : ''
    transitionKey += works[1] ? works[1].id : ''

    const handleMouseEnter = () => {
        // onItemEnter()
    }

    const handleMouseLeave = () => {
        // onItemLeave()
    }

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={transitionKey}
                timeout={300}
            >
                <div className="WorkListImages" ref={containerEl}>
                    <div className="WorkListImages__List">
                        
                        {works.map((work, index) => (
                            <div
                                className="WorkListImages__ListItem"
                                key={`work-list-images-list-item-${index}`}
                                ref={ref => listItemsEls.current[index] = ref}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="WorkListImages__ListItemHoverScale">
                                    {/* <Link to={`/case/${work.case.document.uid}`}> */}
                                    <Link to={work.path}>
                                        <img
                                            className="WorkListImages__ItemImage"
                                            src={work.src}
                                        />
                                    </Link>

                                    {/* </Link> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="WorkListImages__Scroller">
                        {[...Array(projectsLength)].map((x, index) => (
                            <div className="WorkListImages__ScrollerItem" ref={ref => scrollerItemsEls.current[index] = ref} key={`work-list-images-scroller-item-${index}`}></div>
                        ))}
                    </div>

                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default WorkListImages