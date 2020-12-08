import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#clock-icon",{duration: 0.5, stroke:"#2DD4D6", fill:"#2DD4D6" },"-=2")
                .to("#dashboard",{duration: 2, y:-3000},"-=1")
                .from("#time-machine",{duration: 2, y:3000},"-=3")
                .from("#past", {duration: 4, scrambleText:{text:"11/10/2020", chars:"0123456789"}},"second");
        
    return timeMachineTL;
}