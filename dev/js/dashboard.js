import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();
    dashboardTL.fromTo("#outside-thickring",{duration: 1, drawSVG:"0% 30%"}, {drawSVG:"70% 100%", ease:"none"})
                .to("#outside-thickring",{duration: 1, drawSVG:"100%", ease:"none"},"ring")
                .from("#inside-ring",{duration: 1, drawSVG:"0%", ease:"none", alpha: 0},"ring")
                .from("#bars",{duration: 0.5, alpha: 0, rotation: 340, transformOrigin:"middle"},"bars")
                .from("#R",{duration: 1, alpha: 0},"bars")
                .from(".scan",{duration: 2, alpha: 0, drawSVG:"0%"},"load")
                .fromTo(".extra",{duration: 2, drawSVG:"0% 30%", alpha: 0}, {duration: 2, drawSVG:"100% 100%", ease:"none", repeat: 2, alpha: 1},"load");

export function dashboardAnimation(){
    return dashboardTL;
}