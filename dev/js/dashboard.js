import {gsap} from "gsap";

// gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
giraffeTL.from("#logo",{duration: 3, y: 600, ease: "none"});


export function giraffeAnimation(){
    return giraffeTL;
}