import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { loadingScreenAnimation } from "./loadingScreen.js";
import { dashboardAnimation } from "./dashboard.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL.add(loadingScreenAnimation())
    .add(dashboardAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();