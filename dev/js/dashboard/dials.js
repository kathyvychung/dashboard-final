import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dialsTL = gsap.timeline();

export function dialsAnimation(){
    dialsTL.to("#outer-ring",{duration: 0.7, alpha: 0, yoyo:true, repeat:5},"beep")
            .to("#scan",{duration: 1, alpha: 0, yoyo:true, repeat:5},"beep");
        
    return dialsTL;
}