import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const mapTL = gsap.timeline();

export function mapAnimation(){
    mapTL.to("#locate",{duration: 1, alpha:1})
        .to("#locate",{duration: 1, x: 60, y: 20})
        .to("#locate",{duration: 1, x: -30, y: -40});
        
    return mapTL;
}