import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const loadingScreenTL = gsap.timeline();
export function loadingScreenAnimation(){
    loadingScreenTL.fromTo("#outside-thickring",{duration: 1, drawSVG:"0% 30%"}, {drawSVG:"70% 100%", ease:"none"})
                .to("#outside-thickring",{duration: 1, drawSVG:"100%", ease:"none"},"ring")
                .from("#inside-ring",{duration: 1, drawSVG:"0%", ease:"none", alpha: 0},"ring")
                .from("#bars",{duration: 0.5, alpha: 0, rotation: 340, transformOrigin:"middle"},"bars")
                .from("#R",{duration: 1, alpha: 0},"bars")

                .from(".scan",{duration: 1, alpha: 0, drawSVG:"0%"},"load")
                .fromTo(".extra",{duration: 1, drawSVG:"0% 30%", alpha: 0}, {duration: 2, drawSVG:"100% 100%", ease:"none", alpha: 1},"load")
                .to("#loading",{duration: 0.5, alpha:0},"part")
                
                .to("#top",{duration: 2, y:"-1000"},"part")
                .to("#bottom",{duration: 2, y:"1000"},"part")
                .to("#right",{duration: 2, x:"1500"},"part")
                .to("#left",{duration: 2, x:"-1500"},"part");
    return loadingScreenTL;
}