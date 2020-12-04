import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { loadingScreenAnimation } from "./loadingScreen.js";
import { dashboardAnimation } from "./dashboard.js";
import { mapAnimation } from "./dashboard/map.js";

gsap.registerPlugin(GSDevTools);

// mapAnimation();

const mainTL = gsap.timeline();

mainTL.add(loadingScreenAnimation())
    .add(dashboardAnimation())
    .add(mapAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();