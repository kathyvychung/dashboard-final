import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){
    dashboardTL.from("#controlCenter",{duration: 1, y:1000},"first")
                .from("#basic-time", {duration: 1, alpha: 0, scrambleText:"01010"},"first")
                .from("#borderCPLeft",{duration: 1, x: 1000},"first")
                .from("#borderCPRight",{duration: 1, x: -1000},"first")
                .from("#hexagon",{duration: 1, drawSVG:"0%", ease:"none", alpha: 0},"first")
                .from("topText",{duration: 1, alpha: 0},"first")
                
                .from("#basic-bottom", {duration: 1, alpha: 0, scrambleText:"01010"},"second")
                .from(".fuelTank",{duration: 1, alpha: 0, stagger: 1},"second")
                .from(".wifiTank",{duration: 1, alpha: 0, stagger: 1},"second")
                .from("#dials",{duration: 1, alpha: 0},"second")
                .from("#meterStick",{duration: 4, alpha: 0, rotation: 720, transformOrigin: "left bottom"},"second")
                .from("#outer-ring",{duration: 3, alpha: 0, rotation: 360, transformOrigin: "50% 50%"},"second")
                .from("#inner-ring",{duration: 3, alpha: 0, rotation: -360, transformOrigin: "50% 50%"},"second")
                .from("#mph-text", {duration: 4, scrambleText:{text:"0", chars:"0123456789"}},"second")
                
                .from(".gauges",{duration: 1, drawSVG:"0%", ease:"none", alpha: 0, stagger: 1},"second")
                .from("#circleGauges",{duration: 1, alpha: 0, stagger: 1},"second")
                .from("#orange-load",{duration: 1, rotation: 360, transformOrigin: "50% 0%", alpha: 0, stagger: 1},"second")

                //direction map
                .to("#direction",{duration: 0.5, stroke:"#2DD4D6", fill:"#2DD4D6" },"third")
                .from("#map",{duration: 1, x:-300},"third")
                .to("#locate",{duration: 1, alpha:0},"third");
        
    return dashboardTL;
}