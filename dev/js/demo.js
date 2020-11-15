import {gsap} from "gsap";

gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
giraffeTL.from("#neck",{duration: 3, y: 600, ease: "none"}, "swing")
        .from("#first",{duration: 2, alpha:0}, "swing")
        .from("#second",{duration: 2, alpha:0, delay: 1}, "swing")
        .from("#third",{duration: 2, alpha:0, delay: 2}, "swing")
        .from("#tail",{duration:1, rotation:20, transformOrigin:"left top", repeat:3, ease: "none"}, "swing")
        .to("#tail",{duration:1, rotation:0, transformOrigin:"left top", repeat:3, ease: "none"}, "swing")
        .to("#part1",{ duration: 0.1, alpha: 0})
        .from("#part2",{duration: 0.1, alpha:0})
        .from("#neck2",{duration: 3, y: 600},"rise")
        .from("#leaf1",{duration: 3, y: 600},"rise")
        .from("#leaf2",{duration: 3, y: 600},"rise")
        .from("#completion",{duration: 2.5, y: 500},"rise")
        .from("#ear2",{rotation:20, transformOrigin:"left top"});


export function giraffeAnimation(){
    return giraffeTL;
}