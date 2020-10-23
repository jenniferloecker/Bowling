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
      return self.frames.pop();
    }
    function shouldMakeNewFrame() {
      const lastFrame = self.previousFrame();
      return lastFrame.frameIsFinished();
    }
    return { calculateGameScore };
  })
  .actions((self) => {
    function addNewScore(score) {
      const newFrame = Frame.create();
      newFrame.setRoll1(score);
      self.frames.push(newFrame);
    }
    return { addNewScore };
  });
