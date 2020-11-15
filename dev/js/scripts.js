// import * as Demo from './demo.js';
import {gsap} from "gsap";

import {stickAnimation} from "./stick.js"
import {greenCircleAnimation} from "./greenCircle.js"
import {whiteCircleAnimation} from "./whiteCircle.js"
import {pinkCircleAnimation} from "./pinkCircle.js"
import {whiteDisappear} from "./whiteDisappear"
import {greenDisappear} from "./greenDisappear"
// console.log(Demo);

const mainTL = gsap.timeline({paused:true});

mainTL.add(stickAnimation())
    .add(greenCircleAnimation())
    .add(whiteCircleAnimation())
    .add(pinkCircleAnimation())
    .add(whiteDisappear())
    .add(greenDisappear())
    .play();