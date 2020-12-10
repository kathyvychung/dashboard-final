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
                .to("#buttonTM",{duration: 0.1, fillOpacity: 1, delay: 1})
                .to("#clock-month-text", {duration: 1, scrambleText:"MAR"},"past")
                .to("#outer-timer",{duration: 2, rotation: 170, transformOrigin: "50% 50%"},"past")
                .to("#inner-timer",{duration: 2, rotation: 90, transformOrigin: "50% 50%"},"past")
                .to("#right-bar",{duration: 2, y: 50, yoyo:true, repeat:3},"spin","past","teleport")
                .from("#left-bar",{duration: 2, y: 80, yoyo:true, repeat:3},"spin","past","teleport")
                .to("#myVideo2",{duration: 0.1, alpha: 0},"teleport")
                .to("#time-machine",{duration: 0.1, x:10, yoyo: true, repeat: 3},"teleport")

                //back to homepage
                .to("#time-machine",{duration: 2, y:3000},"home")
                .to("#sun",{duration: 2, alpha: 0},"home")
                .to("#rain",{duration: 2, alpha: 1},"home")
                .to("#dashboard",{duration: 2, y:0},"-=3")
                .to("#clock-icon",{duration: 0.1, stroke:"#BFE5E9", fill:"none"},"home")
                .to("#outer-ring",{duration: 0.7, alpha: 0, yoyo:true, repeat:5},"beep")
                .to("#scan",{duration: 1, alpha: 0, yoyo:true, repeat:5},"beep")
                .from(".beep",{duration: 1, alpha:0, yoyo:true, repeat:3},"beep")
                .to("#mph-text", {duration: 4, scrambleText:{text:"78", chars:"0123456789"}},"beep")
                .to("#temp-text", {duration: 4, scrambleText:{text:"36", chars:"0123456789"}},"beep")
                
                .to(".gauges",{duration: 1, drawSVG:"100%", ease:"none", stagger: 1},"beep")
                .to("#circleGauges",{duration: 1, stagger: 1},"beep")
                .to("#orange-load",{duration: 1, rotation: 360, transformOrigin: "50% 0%", stagger: 1},"beep");

        
    return timeMachineTL;
}

// var animate = function(text) {
//     var textSplit = SplitText.create(text, { type: "chars,words" });
//     return gsap.from(textSplit.chars, { duration:0.1, visibility:"hidden", stagger: 0.1 } );
//   };
  
//   animate('#past-text');