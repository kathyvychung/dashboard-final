import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#dashboard",{duration: 2, y:-3000})
                .from("#time-machine",{duration: 2, y:3000},"-=3");
        
    return timeMachineTL;
}