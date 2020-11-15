import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function pinkCircleAnimation(){
    var tl = gsap.timeline();
    tl.from(".pinkCircle",{duration: timeOfAnimation, x:-700, y:100})
    tl.to(".pinkCircle",{duration: timeOfAnimation, x:500, y:-100},"-=0.5")
    tl.to(".pinkCircle",{duration: 1, alpha:0})

    return tl;
}