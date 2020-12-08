import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#clock-icon",{duration: 0.5, stroke:"#2DD4D6", fill:"#2DD4D6" },"-=2")
                .to("#dashboard",{duration: 2, y:-3000},"-=1")
                .from("#time-machine",{duration: 2, y:3000},"-=3")
                .from("#clock",{duration: 0.5, alpha: 0},"spin")
                .from("#tickMarks",{duration: 2, alpha: 0, rotation: 360, transformOrigin: "50% 50%"},"spin")
                .from("#inner-timer",{duration: 2, alpha: 0, rotation: -180, transformOrigin: "50% 50%"},"spin")
                .from("#outer-timer",{duration: 2, alpha: 0, rotation: -360, transformOrigin: "50% 50%"},"spin")
                .to("#button-travel",{duration: 1, fill:"#2DD4D6"});
        
    return timeMachineTL;
}

// var animate = function(text) {
//     var textSplit = SplitText.create(text, { type: "chars,words" });
//     return gsap.from(textSplit.chars, { duration:0.1, visibility:"hidden", stagger: 0.1 } );
//   };
  
//   animate('#past-text');