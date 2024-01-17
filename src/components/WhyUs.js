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
          why I’m the one
        </h4>
        <h2 className='split-text'>
          Why I’m not the <br /> average Creative <br /> Director? My <br/> multidisciplinary <br/> background
        </h2>
      </div>
      <div className="whyus__row" ref={whyusrow}>
        <div className="whyus__col" ref={whyuscol}>
          <div className="whyus__col--icon" ref={icon1}>
            <img src={techicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                  Multidisciplinary Queen
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
                As a genuine craft designer, my expertise stems from a pixel-perfect foundation in digital design. I have a broad range of experience, spanning creative pitches, intricate product design, and comprehensive 360-degree development in branding, web, and product. I’m great at brand strategy, and able to create a brand from scratch that truly aligns with the values of a company.
              </p>
            </div>

          </div>
        </div>
        <div className="whyus__col" ref={whyuscol}>
          <div className="whyus__col--icon" ref={icon2}>
            <img src={globeicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                  I’m your partner, not just a “freelancer”
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
                I work with clients and products that I truly resonate with. I see myself as partner, not just vendor, which means I get to know you, your business and your vision. This tailored approach allows me to create solutions aligned with your needs, fostering collaboration for our shared success.
              </p>
            </div>

          </div>
        </div>
        <div className="whyus__col" ref={whyuscol}>
          <div className="whyus__col--icon" ref={icon3}>
            <img src={trophyicon} alt="" />
          </div>
          <div className="whyus__col--wrapper">
            <div className="whyus__col--left">
              <div className="whyus__col--left--heading">
                <h3>
                Notable Awards
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
                I won the prestigious Royal Society of Arts SDA award, past alumni James Dyson, Sir Jony Ive, Chief Design Officer of Apple; Betty Jackson, CBE, award-winning fashion designer. Clarke, Former Head of Innovation at Nike; and Bill Moggridge, Co-founder of IDEO and designer of the first laptop.
              </p>
              <p>
                I’m only interested in setting the bar at the top, creating magical digital experiences that leave a “wow” impression that both convert and stand out.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs