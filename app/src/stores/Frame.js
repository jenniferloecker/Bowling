import { types } from "mobx-state-tree";

const Frame = types
  .model({
    score: 0,
    roll: 0,
    strike: false,
    spare: false,
  })
  .views((self) => ({
    shouldGetNextFrame() {
      return false;
    },
  }))
  .actions((self) => ({
    setScore(score) {
      self.score = score;
    },
    nextFrameRoll(rollScore) {
      self.name = newName;
    },
  }));

export default Frame;
