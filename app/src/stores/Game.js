import { types } from "mobx-state-tree";
import { Frame } from "./Frame";

export const Game = types
  .model({
    frames: types.optional(types.array(Frame), [
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
      Frame.create(),
    ]),
  })
  .views((self) => {
    function currentFrame() {
      for (var i = 0; i < self.frames.length; i++) {
        if (self.frames[i].roll1 !== null && self.frames[i].roll2 !== null)
          continue;
        if (self.frames[i].roll1 === 10) continue;

        if (self.frames[i].roll1 == null) {
          return i;
        } else if (self.frames[i].roll2 == null) {
          return i;
        }
      }
    }
    function isTenthFrame() {
      return false;
    }
    function shouldGetExtraRollInTenth() {
      return false;
    }
    function calculateGameScore() {
      let gameScore = 0;
      if (self.frames.length === 0) {
        return gameScore;
      } else {
        gameScore += self.frames.map((frame, index) => {
          return frame.frameScore();
        });
        return gameScore;
      }
    }
    function lastFrame() {
      return self.frames[self.frames.length - 1];
    }
    return { lastFrame, calculateGameScore, currentFrame };
  })
  .actions((self) => {
    function addNewScore(score) {
      let frameToAddTo = self.frames[self.currentFrame()];
      if (frameToAddTo.roll1 === null) {
        frameToAddTo.setRoll1(score);
      } else if (frameToAddTo.roll2 === null) {
        frameToAddTo.setRoll2(score);
      }
    }
    function setFrames(frameArray) {
      self.frames = frameArray;
    }
    return { addNewScore, setFrames };
  });
