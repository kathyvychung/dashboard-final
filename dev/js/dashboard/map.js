import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 

gsap.registerPlugin(DrawSVGPlugin);

const mapTL = gsap.timeline();

export function mapAnimation(){
    mapTL.from("#map",{duration: 1, x:-300},"third");
        
    return mapTL;
}