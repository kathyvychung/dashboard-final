import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function whiteDisappear(){
    var tl = gsap.timeline();

    tl.to(".whiteCircle",{duration: 1, alpha:0})
    
    return tl;
}