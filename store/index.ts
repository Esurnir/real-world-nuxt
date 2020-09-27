import { getAccessorType } from "typed-vuex";

import * as events from "./events";

export const accessorType = getAccessorType({
  modules: {
    events
  }
});
