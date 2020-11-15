import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function greenCircleAnimation(){
    var tl = gsap.timeline();
    tl.from(".greenCircle",{duration: timeOfAnimation, x:-1000, y:300})
    tl.to(".greenCircle",{duration: timeOfAnimation, x:800, y:300})

    return tl;
}