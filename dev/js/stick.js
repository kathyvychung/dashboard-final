import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"

export function stickAnimation(){
    var tl = gsap.timeline();
    tl.to(".stick",{duration: timeOfAnimation, rotation: 360, x:500, y:400})

    return tl;
}
