import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

const mapTL = gsap.timeline();

export function mapAnimation(){
    mapTL.to("#locate",{duration: 1, alpha:1})
        .to("#locate",{duration: 1, x: 60, y: 20})
        .to("#locate",{duration: 1, x: -30, y: -40},"beep")
        .from(".beep",{duration: 1, alpha:0, yoyo: true, repeat:3},"beep")
        .to("#coordinates", {duration: 2, scrambleText:{chars:"0123456789"}},"beep");
        
    return mapTL;
}

    // timeline for repeating animations
    // const aniRepeat = new gsap.timeline({repeat:1})
    // aniRepeat.add(mapAnimation())