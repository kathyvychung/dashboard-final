import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();
dashboardTL.to("#buttons",{duration: 3, alpha: 0});

export function dashboardAnimation(){
    return dashboardTL;
}