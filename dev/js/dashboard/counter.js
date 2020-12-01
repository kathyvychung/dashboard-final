import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const counterTL = gsap.timeline();

export function counterAnimation(){
    counterTL.from("#controlCenter",{duration: 1, y:1000},"first");
        
    return counterTL;
}