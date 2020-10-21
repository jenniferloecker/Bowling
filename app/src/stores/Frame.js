import { types } from "mobx-state-tree";

const Frame = types
  .model({
    roll1: types.maybeNull(types.number, null),
    roll2: types.maybeNull(types.number, null),
    roll3: types.maybeNull(types.number, null),
  })
  .views((self) => ({
    shouldGetNextFrame() {
      return false;
    },
    isStrike() {
      return roll1 === 10;
    },
    isSpare() {
      return roll1 + roll2 === 10;
    },
  }))
  .actions((self) => ({
    setRoll1(roll1) {
      self.roll1 = roll1;
    },
    setRoll2(roll2) {
      self.roll2 = roll2;
    },
    setRoll3(roll3) {
      self.roll3 = roll3;
    },
  }));

export default Frame;
