import React, { useRef } from 'react'
import Ethos from './Ethos';
import Hero from './Hero';
import OurOffers from './OurOffers';
import Portfolio from './Portfolio';
import Service from './Service';
import WhyUs from './WhyUs';
import WorkListImages from './WorkListImages';
import useScrollSpy from 'react-use-scrollspy';

const Home = () => {
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -80,
    });
    return (
        <div>
            <nav className="subnav">
                <span className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}></span>
                <span className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>my potential</span>
                <span className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}></span>
                <span className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>my ethos</span>
                <span className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}></span>
                <span className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>why I’m the one</span>
                <span className={activeSection === 6 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}></span>
            </nav>
            <div ref={sectionRefs[0]}>
                <Hero />
            </div>
            <div ref={sectionRefs[1]}>
                <Portfolio  />
            </div>
            <div ref={sectionRefs[2]}>
                <Service  />
            </div>
            <div ref={sectionRefs[3]}>
                <Ethos  />
            </div>
            <div ref={sectionRefs[4]}>
                <OurOffers  />
            </div>
            <div ref={sectionRefs[5]}>
                <WhyUs  />
            </div>
            <div ref={sectionRefs[6]}>
            </div>
        </div>
    )
}

export default Home