// import * as Demo from './demo.js';
import {gsap} from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(GSDevTools);

import {giraffeAnimation} from "./dashboard.js"

const mainTL = gsap.timeline();
mainTL.add(giraffeAnimation);

//instantiate GSDevTools with default settings
// GSDevTools.create();