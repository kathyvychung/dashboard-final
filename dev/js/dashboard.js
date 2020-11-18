import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();
    dashboardTL.fromTo("#outside-thinring",{duration: 1, drawSVG:"30% -90%"}, {drawSVG:"100% 70%", ease:"none"})
                .to("#outside-thinring",{duration: 1, drawSVG:"100%", ease:"none"})
                .from("#inside-ring",{duration: 1, drawSVG:"100%", ease:"none"})
                .from("#bars",{duration: 0.5, alpha: 0, rotation: 340, transformOrigin:"middle"},"bars")
                // .from("#Path-2",{duration: 0.5, alpha: 0, drawSVG:"50% 50%", ease:"none"},"bars")
                // .from("#Path-2-Copy-2",{duration: 0.5, alpha: 0, drawSVG:"50% 50%", ease:"none"},"bars")
                // .from("#Path-2-Copy",{duration: 0.5, alpha: 0, drawSVG:"50% 50%"},"bars")
                .to("#loadingScan",{duration: 1, drawSVG:"100%", ease:"none"})
                .from("#R",{duration: 1, alpha: 0},"bars");

export function dashboardAnimation(){
    return dashboardTL;
}