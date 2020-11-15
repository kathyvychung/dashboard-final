import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function greenDisappear(){
    var tl = gsap.timeline();
    tl.to(".greenCircle",{duration: 1, alpha:0});

    return tl;
}