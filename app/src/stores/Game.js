import { types } from "mobx-state-tree";
import { Frame } from "./Frame";

export const Game = types
  .model({
    frames: types.optional(types.array(Frame), []),
  })
  .views((self) => {
    function currentFrame() {
      return self.frames.length;
    }
    function isTenthFrame() {
      return false;
    }
    function shouldGetExtraRollInTenth() {
      return false;
    }
    function calculateGameScore() {
      return 300;
    }
    function previousFrame() {
      return self.frames[self.frames.length - 1];
    }
    function shouldMakeNewFrame() {
      if (self.frames.length === 0) return true;
      const lastFrame = previousFrame();
      return lastFrame.frameIsFinished();
    }
    return { previousFrame, shouldMakeNewFrame, calculateGameScore };
  })
  .actions((self) => {
    function addNewScore(score) {
      if (self.shouldMakeNewFrame()) {
        let newFrame = Frame.create();
        newFrame.setRoll1(score);
        self.frames.push(newFrame);
      } else {
        let frameToAddTo = self.previousFrame();
        frameToAddTo.setRoll2(score);
      }
    }
    function setFrames(frameArray) {
      self.frames = frameArray;
    }
    return { addNewScore, setFrames };
  });
