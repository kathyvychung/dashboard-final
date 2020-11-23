import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){
    dashboardTL.to("#buttons",{duration: 3, alpha:0, delay:5});
    return dashboardTL;
}