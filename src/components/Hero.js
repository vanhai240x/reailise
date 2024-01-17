import React, { useEffect, useRef, useState } from 'react'
import eye from '../assets/images/eye.svg'
import logo from '../assets/images/logo-black.svg'
import herograd from '../assets/images/grad-mouse.png'
import Splitting from "splitting";
import { gsap } from "gsap";
import { Power3, SplitText } from "gsap/all";
import { Parallax } from 'react-scroll-parallax';
import * as THREE from "three";

const Hero = () => {
    const [mousePos, setMousePos] = useState({});
    const introsplttext = useRef(null)
    const introsplttext2 = useRef(null)
    const introsplttext3 = useRef(null)
    const spanword = useRef()
    const grad1 = useRef()



    useEffect(() => {
        const text = new Splitting({ target: introsplttext.current, by: 'chars' });
        const text2 = new Splitting({ target: introsplttext2.current, by: 'chars' });
        const text3 = new Splitting({ target: introsplttext3.current, by: 'chars' });

        var spanWord = spanword.current;
        spanWord.innerHTML = spanWord.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span><span class="span-mask"></span></span>');

        let introtl = gsap.timeline({
            onStart: function () {
                setTimeout(() => {
                    new Sketch({
                        dom: document.getElementById("hero_banner")
                    });
                }, 3300);
            }
        });
        introtl.to(".intro__block--item1 .char", { delay: .7, duration: .55, stagger: 0.022, y: 0, ease: Power3.easeInOut });
        introtl.to(".intro__block--item2 .char", { duration: .55, stagger: 0.022, y: 0, ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro__block--item3 .char", { duration: .55, stagger: 0.022, y: 0, ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro__block--item4", { duration: .55, y: 0, ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro__block--item1 .char", { delay: .3, stagger: 0.022, duration: .55, y: '-110%', ease: Power3.easeInOut });
        introtl.to(".intro__block--item2 .char", { duration: .55, stagger: 0.022, y: '-110%', ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro__block--item3 .char", { duration: .55, stagger: 0.022, y: '-110%', ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro__block--item4", { duration: .55, y: '-100%', ease: Power3.easeInOut }, '>-.5');
        introtl.to(".intro", { duration: .8, y: '-100%', ease: Power3.easeOut });
        introtl.from(".span-line-inner", { duration: .8, stagger: .05, y: '105%', ease: Power3.easeInOut }, '>-.65');
        introtl.from(".heroBanner__textbox", { duration: .6, opacity: 0, y: 70, ease: Power3.easeInOut }, '>-.8');


        // const tl = gsap.timeline()
        // tl.from('.span-line-inner', {
        //     y: "105%",
        //     stagger: .1,
        //     ease: Power3.easeInOut,
        //     duration: .8,
        // });

        window.addEventListener('mousemove', onMouseMove);

        let cursorMoved = false
        function onMouseMove(e) {
            if (!cursorMoved) {
                let tl = gsap.timeline()
                tl.to(grad1, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: .1,
                })

                tl.to(grad1, {
                    opacity: 1,
                    duration: .3,
                })

                cursorMoved = true

            } else {
                gsap.to(grad1, .2, {
                    x: e.clientX,
                    y: e.clientY
                })
            }
        }
    }, []);
    return (
        <div className="heroBanner" id="hero_banner" data-grid="15"
            data-mouse="0.23"
            data-strength="0.25">
            <div className="intro">
                <div className="intro__block">
                    <h2 className='intro__block--item1' ref={introsplttext}>
                        Reinvent
                    </h2>
                </div>
                <div className="intro__block" ref={introsplttext2}>
                    <h2 className='intro__block--item2'>
                        Reimagine
                    </h2>
                </div>
                <div className="intro__block" ref={introsplttext3}>
                    <h2 className='intro__block--item3'>
                        Rethink
                    </h2>
                </div>
                <div className="intro__block">
                    <img className='intro__block--item4' src={logo} alt="" />
                </div>
            </div>

            <Parallax speed={-25}>
                <div className="gradient" ref={grad1}></div>
                <div className="gradient2"></div>
                <div className="heroBanner__wrapper">
                    {/* <div className="heroBanner__gradient">
                        <img src={herograd} alt="" />
                    </div> */}
                    <div className="container">
                        <div className="heroBanner__heading">
                            <h1 className='span-lines' ref={spanword}>
                                Award winning<br/>Creative Direction<br/>& Visual Design
                            </h1>
                        </div>
                        <div className="heroBanner__right">
                            <div className="heroBanner__eye" >
                                <img src={eye} alt="" className='eyeimg' />
                            </div>

                        </div>
                    </div>
                </div>
            </Parallax>
            <Parallax speed={5} className='heroBanner__parallaxbox'>
                <div className="heroBanner__textbox">
                    <p>
                        A tech & ai enthusiast that is obsessed with creating beautiful aesthetics that not only look good,
                        but serve a purpose and drive real value to people A true team leader, I’ve been known to inspire
                        others into creating their best work yet, with aiming to win awards with what we do, always.
                    </p>
                </div>
            </Parallax>
            <Parallax speed={5} className='heroBanner__parallaxbox tag_1'>
                <div className="heroBanner__textbox">
                    <p>Tech lover</p>
                </div>
            </Parallax>
            <Parallax speed={5} className='heroBanner__parallaxbox tag_1 tag_2'>
                <div className="heroBanner__textbox">
                    <p>Not scared to get my hands dirty</p>
                </div>
            </Parallax>
            <Parallax speed={5} className='heroBanner__parallaxbox tag_1 tag_3'>
                <div className="heroBanner__textbox">
                    <p>Nomad enthusiast</p>
                </div>
            </Parallax>
            <Parallax speed={5}>
                <div className="container heroBanner__footer">
                    <p>BRAND</p>
                    <p>WEB</p>
                    <p>PRODUCT</p>
                </div>
            </Parallax>
        </div>
    )
}

export default Hero

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

const vertex = `uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`

const fragment = `uniform float time;
uniform float progress;
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;


uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
void main()	{
	vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	vec4 color = texture2D(uTexture,newUV);
	vec4 offset = texture2D(uDataTexture,vUv);
	gl_FragColor = vec4(vUv,0.0,1.);
	gl_FragColor = vec4(offset.r,0.,0.,1.);
	gl_FragColor = color;
	gl_FragColor = texture2D(uTexture,newUV - 0.02*offset.rg);
	// gl_FragColor = offset;

}`
class Sketch {
    constructor(options) {
        this.scene = new THREE.Scene();

        this.container = options.dom;
        this.img = this.container.querySelector('.eyeimg')
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        var frustumSize = 1;
        var aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(frustumSize / -2, frustumSize / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);
        this.camera.position.set(0, 0, 2);

        this.time = 0;

        this.mouse = {
            x: 0,
            y: 0,
            prevX: 0,
            prevY: 0,
            vX: 0,
            vY: 0
        }

        this.isPlaying = true;
        this.settings();
        this.addObjects();
        this.resize();
        this.render();

        if (window.innerWidth > 1030) {
            this.setupResize();
            this.mouseEvents()
        }

    }

    getValue(val) {
        return parseFloat(this.container.getAttribute('data-' + val))
    }


    mouseEvents() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX / this.width;
            this.mouse.y = e.clientY / this.height;

            // console.log(this.mouse.x,this.mouse.y)

            this.mouse.vX = this.mouse.x - this.mouse.prevX;
            this.mouse.vY = this.mouse.y - this.mouse.prevY;


            this.mouse.prevX = this.mouse.x
            this.mouse.prevY = this.mouse.y;


        })
    }

    settings() {
        let that = this;
        this.settings = {
            grid: this.getValue('grid') || 34,
            mouse: this.getValue('mouse') || 0.25,
            strength: this.getValue('strength') || 1,
            relaxation: this.getValue('relaxation') || 0.9,
        };
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;


        // image cover
        this.imageAspect = 1.05 / 1.05;
        let a1;
        let a2;
        if (this.height / this.width > this.imageAspect) {
            a1 = this.imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = this.imageAspect;
        }

        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;

        this.camera.updateProjectionMatrix();
        this.regenerateGrid()


    }

    regenerateGrid() {
        this.size = this.settings.grid;

        const width = this.size;
        const height = this.size;

        const size = width * height;
        const data = new Float32Array(3 * size);
        const color = new THREE.Color(0xffffff);

        const r = Math.floor(color.r * 255);
        const g = Math.floor(color.g * 255);
        const b = Math.floor(color.b * 255);

        for (let i = 0; i < size; i++) {
            let r = Math.random() * 255 - 125;
            let r1 = Math.random() * 255 - 125;

            const stride = i * 3;

            data[stride] = r;
            data[stride + 1] = r1;
            data[stride + 2] = r;

        }

        // used the buffer to create a DataTexture

        this.texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType);

        this.texture.magFilter = this.texture.minFilter = THREE.NearestFilter;

        if (this.material) {
            this.material.uniforms.uDataTexture.value = this.texture;
            this.material.uniforms.uDataTexture.value.needsUpdate = true;
        }
    }

    addObjects() {

        this.regenerateGrid()
        let texture = new THREE.Texture(this.img)
        texture.needsUpdate = true;
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: {
                    value: 0
                },
                resolution: {
                    value: new THREE.Vector4()
                },
                uTexture: {
                    value: texture
                },
                uDataTexture: {
                    value: this.texture
                },
            },
            vertexShader: vertex,
            fragmentShader: fragment
        });

        this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }


    updateDataTexture() {
        let data = this.texture.image.data;
        for (let i = 0; i < data.length; i += 3) {
            data[i] *= this.settings.relaxation
            data[i + 1] *= this.settings.relaxation
        }

        let gridMouseX = this.size * this.mouse.x;
        let gridMouseY = this.size * (1 - this.mouse.y);
        let maxDist = this.size * this.settings.mouse;
        let aspect = this.height / this.width

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {

                let distance = ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2
                let maxDistSq = maxDist ** 2;

                if (distance < maxDistSq) {

                    let index = 3 * (i + this.size * j);

                    let power = maxDist / Math.sqrt(distance);
                    power = clamp(power, 0, 10)
                    // if(distance <this.size/32) power = 1;
                    // power = 1;

                    data[index] += this.settings.strength * 100 * this.mouse.vX * power;
                    data[index + 1] -= this.settings.strength * 100 * this.mouse.vY * power;

                }
            }
        }

        this.mouse.vX *= 0.9;
        this.mouse.vY *= 0.9;
        this.texture.needsUpdate = true
    }


    render() {
        if (!this.isPlaying) return;
        this.time += 0.05;
        this.updateDataTexture()
        this.material.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}