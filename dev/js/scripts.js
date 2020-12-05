import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { loadingScreenAnimation } from "./loadingScreen.js";
import { dashboardAnimation } from "./dashboard.js";
import { mapAnimation } from "./dashboard/map.js";
import { dialsAnimation } from "./dashboard/dials.js";
import { timeMachineAnimation } from "./timeMachine.js";

gsap.registerPlugin(GSDevTools);

// mapAnimation();

const mainTL = gsap.timeline();

mainTL.add(loadingScreenAnimation())
    .add(dashboardAnimation(),"-=1")
    .add(mapAnimation(),"sensors")
    .add(dialsAnimation(),"sensors")
    .add(timeMachineAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();