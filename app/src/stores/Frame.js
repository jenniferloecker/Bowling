import { types } from "mobx-state-tree";

export const Frame = types
  .model({
    roll1: types.maybeNull(types.number, null),
    roll2: types.maybeNull(types.number, null),
    roll3: types.maybeNull(types.number, null),
  })
  .views((self) => {
    function shouldGetNextFrame() {
      return false;
    }
    function isStrike() {
      return self.roll1 === 10;
    }
    function isSpare() {
      return self.roll1 + self.roll2 === 10;
    }
    function frameIsFinished() {
      return isStrike() || self.roll2 !== null;
    }
    return { frameIsFinished };
  })
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
