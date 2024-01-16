import React, { useRef, useEffect } from 'react'
import techicon from '../assets/images/deep-tech-icon.svg'
import globeicon from '../assets/images/globe-hand.svg'
import trophyicon from '../assets/images/trophy.svg'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {

  const whyusheading = useRef(null);
  const whyusrow = useRef(null);
  const whyuscol = useRef(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  useEffect(() => {
    const text = new Splitting({ target: '.split-text', by: 'chars' });

    const headingel = whyusheading.current;
    const el = whyusrow.current;
    const elcol = whyuscol.current;
    const iconanim1 = icon1.current;
    const iconanim2 = icon2.current;
    const iconanim3 = icon3.current;
    if (window.innerWidth > 1030) {
      gsap.to(headingel, {
        scale: .6,
        opacity: 0,
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: '#whyus',
          start: () => "top top",
          end: () => "bottom+=20%",
          scrub: true,
        }
      });
      gsap.to(iconanim1, {
        x: '80%',
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: '#whyus',
          start: () => "top top",
          end: () => "bottom+=20%",
          scrub: true,
        }
      });
      gsap.to(iconanim2, {
        x: '80%',
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: '#whyus',
          start: () => "top center",
          end: () => `+=${el.scrollWidth - elcol.offsetWidth / 3}`,
          scrub: true,
        }
      });
      gsap.to(iconanim3, {
        x: '80%',
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: '#whyus',
          start: () => "bottom center",
          end: () => `+=${el.scrollWidth - elcol.offsetWidth - 300}`,
          scrub: true,
        }
      });
      gsap.to(el, {
        x: () => {
          return -el.scrollWidth + elcol.offsetWidth;
        },
        ease: "none",
        scrollTrigger: {
          trigger: '#whyus',
          start: () => "bottom bottom",
          end: () => `+=${el.scrollWidth - elcol.offsetWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    } else {

      ScrollTrigger.batch(".whyus__heading h4 .char", {
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, stagger: 0.008, duration: .8, ease: "sine.out" }),
        start: '-=300px',

      });
      ScrollTrigger.batch(".whyus__heading h2 .char", {
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, stagger: 0.008, duration: .8, ease: "sine.out" }),
        start: '-=300px',
      });
      gsap.utils.toArray(".whyus__col").forEach(elem => {
        gsap.to(elem, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: 'bottom center',
          }
        });
      });
      gsap.utils.toArray(".whyus__col--icon img").forEach(elem => {
        gsap.to(elem, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: 'bottom center',
          }
        });
      });
      gsap.utils.toArray(".whyus__col--left--number h2").forEach(elem => {
        gsap.to(elem, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: 'bottom center',
          }
        });
      });
      gsap.utils.toArray(".whyus__col--left--heading h3").forEach(elem => {
        gsap.to(elem, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: 'bottom center',
          }
        });
      });
      gsap.utils.toArray(".whyus__col--text p").forEach(elem => {
        gsap.to(elem, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: 'bottom center',
          }
        });
      });
      // ScrollTrigger.batch(".whyus__col", {
      //   onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: .8, ease: "sine.out" }),
      //   start: '-=300px',
      // });
      // ScrollTrigger.batch(".whyus__col--icon img", {
      //   onEnter: batch => gsap.to(batch, { scale: 1, opacity: 1, duration: .5, ease: "sine.out" }),
      //   start: '-=500px',
      // });
      // ScrollTrigger.batch(".whyus__col--left--number h2", {
      //   onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: .5, ease: "sine.out" }),
      //   start: '-=500px',
      // });
      // ScrollTrigger.batch(".whyus__col--left--heading h3", {
      //   onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: .5, ease: "sine.out" }),
      //   start: '-=500px',
      // });
      // ScrollTrigger.batch(".whyus__col--text p", {
      //   onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: .5, ease: "sine.out" }),
      //   start: '-=500px',
      // });
      // gsap.from(el, {
      //   y:60,
      //   opacity:0,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: '#whyus',
      //   }
      // });
    }
  }, []);
  return (
    <div className='whyus' id='whyus'>
      <div className="whyus__heading" ref={whyusheading}>
        <h4 className='split-text'>
          why we’re the one
        </h4>
        <h2 className='split-text'>
          Why are we not <br /> the average <br /> creative studio?
        </h2>
      </div>
      <div className="whyus__row" ref={whyusrow}>
        <div className="whyus__col" ref={whyuscol}>
          <span className="border">
            <svg className='desktop' width="1018" height="869" preserveAspectRatio='none' viewBox="0 0 1018 869" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="1017" height="868" rx="109.5" fill="#22201E" fill-opacity="0.59" stroke="url(#paint0_linear_742_1295)" />
              <defs>
                <linearGradient id="paint0_linear_742_1295" x1="767.77" y1="0.00522256" x2="178.318" y2="15.9076" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#585653" />
                  <stop offset="0.767226" stop-color="#47413A" />
                  <stop offset="0.844475" stop-color="#97FC6A" />
                  <stop offset="0.900271" stop-color="#93A58B" stop-opacity="0.641243" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg className='mobile' width="357" height="593" preserveAspectRatio='none' viewBox="0 0 357 593" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="356" height="592" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19731)" />
              <defs>
                <linearGradient id="paint0_linear_994_19731" x1="117.868" y1="-24.4289" x2="321.184" y2="685.855" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#8E8E8E" />
                  <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                  <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                  <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                  <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="whyus__col--icon" ref={icon1}>
            <img src={techicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                  We specialise in deep tech
                </h3>
              </div>
              <div className="whyus__col--left--number">
                <h2>
                  01
                </h2>
              </div>
            </div>
            <div className="whyus__col--text">
              <p>
                We thrive in complexity and are problem-solvers at our core. No subject matter is too tricky for us to wrap our heads around. We love to work with game-changing, industry defining products that often involve ai, algorithms and deep technical knowledge.
              </p>
            </div>

          </div>
        </div>
        <div className="whyus__col" ref={whyuscol}>
          <span className="border">
            <svg className='desktop' width="1018" height="869" preserveAspectRatio='none' viewBox="0 0 1018 869" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="1017" height="868" rx="109.5" fill="#22201E" fill-opacity="0.59" stroke="url(#paint0_linear_742_1295)" />
              <defs>
                <linearGradient id="paint0_linear_742_1295" x1="767.77" y1="0.00522256" x2="178.318" y2="15.9076" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#585653" />
                  <stop offset="0.767226" stop-color="#47413A" />
                  <stop offset="0.844475" stop-color="#97FC6A" />
                  <stop offset="0.900271" stop-color="#93A58B" stop-opacity="0.641243" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg className='mobile' width="357" height="593" preserveAspectRatio='none' viewBox="0 0 357 593" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="356" height="592" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19731)" />
              <defs>
                <linearGradient id="paint0_linear_994_19731" x1="117.868" y1="-24.4289" x2="321.184" y2="685.855" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#8E8E8E" />
                  <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                  <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                  <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                  <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="whyus__col--icon" ref={icon2}>
            <img src={globeicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                  We are partners
                </h3>
              </div>
              <div className="whyus__col--left--number">
                <h2>
                  02
                </h2>
              </div>
            </div>
            <div className="whyus__col--text">
              <p>
                We work with clients and products that we truly believe will be game-changing and industry defining. We see ourselves as partners, not just vendors, which means we get to know you, your business and your vision.
              </p>
            </div>

          </div>
        </div>
        <div className="whyus__col" ref={whyuscol}>
          <span className="border">
            <svg className='desktop' width="1018" height="869" preserveAspectRatio='none' viewBox="0 0 1018 869" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="1017" height="868" rx="109.5" fill="#22201E" fill-opacity="0.59" stroke="url(#paint0_linear_742_1295)" />
              <defs>
                <linearGradient id="paint0_linear_742_1295" x1="767.77" y1="0.00522256" x2="178.318" y2="15.9076" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#585653" />
                  <stop offset="0.767226" stop-color="#47413A" />
                  <stop offset="0.844475" stop-color="#97FC6A" />
                  <stop offset="0.900271" stop-color="#93A58B" stop-opacity="0.641243" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg className='mobile' width="357" height="593" preserveAspectRatio='none' viewBox="0 0 357 593" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="356" height="592" rx="13.5" fill="#22201E" fill-opacity="0.3" stroke="url(#paint0_linear_994_19731)" />
              <defs>
                <linearGradient id="paint0_linear_994_19731" x1="117.868" y1="-24.4289" x2="321.184" y2="685.855" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#8E8E8E" />
                  <stop offset="0.287753" stop-color="#646464" stop-opacity="0.859656" />
                  <stop offset="0.447332" stop-color="white" stop-opacity="0.762345" />
                  <stop offset="0.583254" stop-color="#868686" stop-opacity="0.659271" />
                  <stop offset="1" stop-color="#7C7C7C" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </span>
          <div className="whyus__col--icon" ref={icon3}>
            <img src={trophyicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                  We are award-winning
                </h3>
              </div>
              <div className="whyus__col--left--number">
                <h2>
                  03
                </h2>
              </div>
            </div>
            <div className="whyus__col--text">
              <p>
                Our designers are award-winning. Our founder and CEO, Rebecca won the prestigious Royal Society of Arts SDA award, past alumni James Dyson, Sir Jony Ive, Chief Design Officer of Apple; Betty Jackson, CBE, award-winning fashion designer. Clarke, Former Head of Innovation at Nike; and Bill Moggridge, Co-founder of IDEO and designer of the first laptop
              </p>
              <p>
                Our designers are award-winning. Our founder and CEO, Rebecca won the prestigious Royal Society of Arts SDA award, past alumni James Dyson, Sir Jony Ive, Chief Design Officer of Apple; Betty Jackson, CBE, award-winning fashion designer. Clarke, Former Head of Innovation at Nike; and Bill Moggridge, Co-founder of IDEO and designer of the first laptop
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs