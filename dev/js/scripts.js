import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { loadingScreenAnimation } from "./loadingScreen.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(loadingScreenAnimation);

//instantiate GSDevTools with default settings
GSDevTools.create();