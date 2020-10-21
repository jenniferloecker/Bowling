import { types } from "mobx-state-tree";
import Frame from "./Frame";

const Game = types
  .model("Game", {
    score: 0,
    frames: types.array(Frame),
  })
  .views((self) => ({
    currentFrame() {
      return self.frames.length;
    },
    isTenthFrame() {
      return false;
    },
    shouldGetExtraRollInTenth() {
      return false;
    },
  }))
  .actions((self) => ({
    addNewScoreToFrame(score) {
      frames[0].setScore(score);
    },
  }));

export default Game;
