import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){
    dashboardTL.from("#controlCenter",{duration: 1, y:1000},"first")
                .to("#dashboardLine",{duration: 1, drawSVG:"100%", ease:"none"},"first")
                .from("#borderCPLeft",{duration: 1, x: 1000},"first")
                .from("#borderCPRight",{duration: 1, x: -1000},"first")
                .from("#topText",{duration: 1, alpha: 0},"first")
                .from("#map",{duration: 1, delay: 2, x:-300},"first");
        
    return dashboardTL;
}