import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){
    dashboardTL.to("#buttons",{duration: 1, alpha:0, delay:5})
                .to("#dashboardLine",{duration: 1, drawSVG:"100%", ease:"none"});
    return dashboardTL;
}