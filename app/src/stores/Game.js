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
    runningScore: types.maybeNull(types.number, null),
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
    function nextRollMax() {
      const currentFrame = self.frames[self.currentFrame()];
      if (currentFrame.roll1 !== null && currentFrame.roll1 < 10) {
        return 10 - currentFrame.roll1;
      } else {
        return 10;
      }
    }
    function calculateGameScores() {
      self.runningScore = 0;
      for (var i = 0; i < self.frames.length; i++) {
        const frameScore = self.frames[i].frameScore();
        if (frameScore !== null) {
          self.runningScore += frameScore;
          self.frames[i].setCumulativeScore(self.runningScore);
        }
      }
    }
    function lastFrame() {
      return self.frames[self.frames.length - 1];
    }
    return { lastFrame, calculateGameScores, currentFrame, nextRollMax };
  })
  .actions((self) => {
    function addNewScore(score) {
      let currentFrameNumber = self.currentFrame();
      let frameToAddTo = self.frames[currentFrameNumber];
      if (frameToAddTo.roll1 === null) {
        frameToAddTo.setRoll1(score);
      } else if (frameToAddTo.roll2 === null) {
        frameToAddTo.setRoll2(score);
      }
      addToPreviousFrames(currentFrameNumber, score);
      self.calculateGameScores();
    }
    function addToPreviousFrames(currentFrameNumber, score) {
      if (currentFrameNumber === 0) return;
      let previousFrame = null;
      let penultimateFrame = null;
      if (currentFrameNumber === 1) {
        previousFrame = self.frames[0];
      } else {
        previousFrame = self.frames[currentFrameNumber - 1];
        penultimateFrame = self.frames[currentFrameNumber - 2];
      }
      if (previousFrame.additionalRoll1 === null) {
        previousFrame.setAdditionalRoll1(score);
      } else if (previousFrame.additionalRoll2 === null) {
        previousFrame.setAdditionalRoll2(score);
      }

      if (penultimateFrame !== null) {
        if (penultimateFrame.additionalRoll1 === null) {
          penultimateFrame.setAdditionalRoll1(score);
        } else if (penultimateFrame.additionalRoll2 === null) {
          penultimateFrame.setAdditionalRoll2(score);
        }
      }
    }
    function setFrames(frameArray) {
      self.frames = frameArray;
    }
    return { addNewScore, setFrames };
  });
