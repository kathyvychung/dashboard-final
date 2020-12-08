import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#clock-icon",{duration: 0.5, stroke:"#2DD4D6", fill:"#2DD4D6" },"fourth")
                .to("#dashboard",{duration: 2, y:-3000})
                .from("#time-machine",{duration: 2, y:3000},"-=3");
                .from(".gauges",{duration: 1, drawSVG:"0%", ease:"none", alpha: 0, stagger: 1},"second")
        
    return timeMachineTL;
}