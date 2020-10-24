import { Game } from "./Game";
import { startingFrames } from "./StartingFrames";

const currentGame = Game.create();

it("it can return the current frame", () => {
  expect(currentGame.currentFrame()).toBe(0);
  currentGame.setFrames([{ roll1: 5 }]);
  expect(currentGame.currentFrame()).toBe(0);
  currentGame.setFrames([{ roll1: 5, roll2: 4 }, { roll1: null }]);
  expect(currentGame.currentFrame()).toBe(1);
  currentGame.setFrames([
    { roll1: 5, roll2: 4 },
    { roll1: 10, roll2: null },
    { roll1: null },
  ]);
  expect(currentGame.currentFrame()).toBe(2);
  currentGame.setFrames([
    { roll1: 5, roll2: 4 },
    { roll1: 10, roll2: null },
    { roll1: 0, rolll2: null },
  ]);
  expect(currentGame.currentFrame()).toBe(2);
  currentGame.setFrames([
    { roll1: 5, roll2: 4 },
    { roll1: 10, roll2: null },
    { roll1: 0, roll2: 6 },
    { roll1: null, roll2: null },
    { roll1: null, roll2: null },
  ]);
  expect(currentGame.currentFrame()).toBe(3);
});

it("it can add a new score", () => {
  currentGame.setFrames(startingFrames);
  currentGame.addNewScore(5);
  expect(currentGame.frames[0].roll1).toBe(5);
  currentGame.addNewScore(4);
  expect(currentGame.frames[0].roll2).toBe(4);
  currentGame.addNewScore(10);
  expect(currentGame.frames[1].roll1).toBe(10);
  expect(currentGame.frames[1].roll2).toBe(null);
  currentGame.addNewScore(0);
  expect(currentGame.frames[2].roll1).toBe(0);
  currentGame.addNewScore(6);
  expect(currentGame.frames[2].roll2).toBe(6);
  currentGame.addNewScore(0);
  expect(currentGame.frames[3].roll1).toBe(0);
  currentGame.addNewScore(0);
  expect(currentGame.frames[3].roll2).toBe(0);
  currentGame.addNewScore(9);
  expect(currentGame.frames[4].roll1).toBe(9);
  currentGame.addNewScore(1);
  expect(currentGame.frames[4].roll2).toBe(1);
});

it("it can add a new score", () => {
  currentGame.setFrames(startingFrames);
  currentGame.addNewScore(5);
  expect(currentGame.frames[0].roll1).toBe(5);
  currentGame.addNewScore(4);
  expect(currentGame.frames[0].roll2).toBe(4);
  currentGame.addNewScore(10);
  expect(currentGame.frames[1].roll1).toBe(10);
  expect(currentGame.frames[1].roll2).toBe(null);
  currentGame.addNewScore(0);
  expect(currentGame.frames[2].roll1).toBe(0);
  currentGame.addNewScore(6);
  expect(currentGame.frames[2].roll2).toBe(6);
  currentGame.addNewScore(0);
  expect(currentGame.frames[3].roll1).toBe(0);
  currentGame.addNewScore(0);
  expect(currentGame.frames[3].roll2).toBe(0);
  currentGame.addNewScore(9);
  expect(currentGame.frames[4].roll1).toBe(9);
  currentGame.addNewScore(1);
  expect(currentGame.frames[4].roll2).toBe(1);
});

it("it can add additional rolls to previous frames", () => {
  currentGame.setFrames(startingFrames);
  currentGame.addNewScore(7);
  currentGame.addNewScore(3);
  currentGame.addNewScore(4);
  expect(currentGame.frames[0].additionalRoll1).toBe(4);
  currentGame.addNewScore(5);
  expect(currentGame.frames[0].additionalRoll2).toBe(5);

  currentGame.addNewScore(10);
  expect(currentGame.frames[0].additionalRoll1).toBe(4);
  expect(currentGame.frames[0].additionalRoll2).toBe(5);
  expect(currentGame.frames[1].additionalRoll1).toBe(10);

  currentGame.addNewScore(10);
  expect(currentGame.frames[0].additionalRoll1).toBe(4);
  expect(currentGame.frames[0].additionalRoll2).toBe(5);
  expect(currentGame.frames[1].additionalRoll1).toBe(10);
  expect(currentGame.frames[1].additionalRoll2).toBe(10);
  expect(currentGame.frames[2].additionalRoll1).toBe(10);

  currentGame.addNewScore(1);
  expect(currentGame.frames[0].additionalRoll1).toBe(4);
  expect(currentGame.frames[0].additionalRoll2).toBe(5);
  expect(currentGame.frames[1].additionalRoll1).toBe(10);
  expect(currentGame.frames[1].additionalRoll2).toBe(10);
  expect(currentGame.frames[2].additionalRoll1).toBe(10);
  expect(currentGame.frames[2].additionalRoll2).toBe(1);
  expect(currentGame.frames[3].additionalRoll1).toBe(1);

  currentGame.addNewScore(2);
  expect(currentGame.frames[0].additionalRoll1).toBe(4);
  expect(currentGame.frames[0].additionalRoll2).toBe(5);
  expect(currentGame.frames[1].additionalRoll1).toBe(10);
  expect(currentGame.frames[1].additionalRoll2).toBe(10);
  expect(currentGame.frames[2].additionalRoll1).toBe(10);
  expect(currentGame.frames[2].additionalRoll2).toBe(1);
  expect(currentGame.frames[3].additionalRoll1).toBe(1);
  expect(currentGame.frames[3].additionalRoll2).toBe(2);
});
