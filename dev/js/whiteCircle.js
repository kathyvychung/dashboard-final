import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function whiteCircleAnimation(){
    var tl = gsap.timeline();
    tl.from(".whiteCircle",{duration: timeOfAnimation, x:-550, y:-100})
    tl.to(".whiteCircle",{duration: timeOfAnimation, x:650, y:100},"-=0.5")

    return tl;
}