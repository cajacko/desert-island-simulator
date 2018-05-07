import ScenesStart from "../scenes/Start";
import ScenesGame from "../scenes/Game";

export default [
  {
    path: "/game",
    exact: true,
    component: ScenesGame
  },
  {
    component: ScenesStart
  }
];
