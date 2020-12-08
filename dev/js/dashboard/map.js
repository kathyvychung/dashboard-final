import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

const mapTL = gsap.timeline();
    .to(".beep",{duration: 1, alpha:0, repeat:3})

export function mapAnimation(){
    mapTL.to("#locate",{duration: 1, alpha:1})
        .to("#locate",{duration: 1, x: 60, y: 20})
        .to("#locate",{duration: 1, x: -30, y: -40},"beep")
        .from("#coordinates", {duration: 4, scrambleText:{chars:"0123456789"}},"second");
        
    return mapTL;
}

    // timeline for repeating animations
    // const aniRepeat = new gsap.timeline({repeat:1})
    // aniRepeat.add(mapAnimation())