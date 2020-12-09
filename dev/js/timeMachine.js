import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

const timeMachineTL = gsap.timeline();

export function timeMachineAnimation(){
    timeMachineTL.to("#clock-icon",{duration: 0.5, stroke:"#2DD4D6", fill:"#2DD4D6" },"-=2")
                .to("#dashboard",{duration: 2, y:-3000},"-=1")
                .from("#time-machine",{duration: 2, y:3000},"-=3")
                .from("#clock",{duration: 0.5, alpha: 0},"spin")
                .from("#tickMarks",{duration: 2, alpha: 0, rotation: 360, transformOrigin: "50% 50%"},"spin")
                .from("#inner-timer",{duration: 2, alpha: 0, rotation: -180, transformOrigin: "50% 50%"},"spin")
                .from("#outer-timer",{duration: 2, alpha: 0, rotation: -360, transformOrigin: "50% 50%"},"spin")
                .from("#past-text", {duration: 1, scrambleText:"11/10/2020"})
                .to("#buttonTM",{duration: 0.5, fillOpacity: 1, delay: 1})
                .to("#clock-month-text", {duration: 1, scrambleText:"MAR"},"past")
                .to("#outer-timer",{duration: 2, rotation: 170, transformOrigin: "50% 50%"},"past")
                .to("#inner-timer",{duration: 2, rotation: 90, transformOrigin: "50% 50%"},"past")
                .to("#right-bar",{duration: 2, y: 50, yoyo:true, repeat:5},"spin","past")
                .from("#left-bar",{duration: 2, y: 80, yoyo:true, repeat:5},"spin","past")
                .to("#myVideo2",{duration: 0.5, alpha: 0});
        
    return timeMachineTL;
}

// var animate = function(text) {
//     var textSplit = SplitText.create(text, { type: "chars,words" });
//     return gsap.from(textSplit.chars, { duration:0.1, visibility:"hidden", stagger: 0.1 } );
//   };
  
//   animate('#past-text');