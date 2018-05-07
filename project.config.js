import Entry from "./src";
import reducers from "./src/store/reducers";
import routes from "./src/config/routes";

export default {
  type: "web",
  entryComponent: Entry,
  reducers,
  routes
};
