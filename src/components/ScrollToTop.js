import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // ScrollTrigger.getAll().forEach(st => st.kill())
        // setTimeout(() => {
        //     ScrollTrigger.getAll().forEach(st => st.refresh())
        // }, 1000);
        console.log(ScrollTrigger.getAll());
    }, [pathname]);

    return null;
}