import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#outer-ring",{duration: 0.7, alpha: 0, yoyo:true, repeat:5},"beep")
            .to("#scan",{duration: 1, alpha: 0, yoyo:true, repeat:5},"beep");
        
    return timeMachineTL;
}