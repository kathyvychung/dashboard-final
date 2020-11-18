import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { dashboardAnimation } from "./dashboard.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(dashboardAnimation);

//instantiate GSDevTools with default settings
GSDevTools.create();