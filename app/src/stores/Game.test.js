import { Game } from "./Game";

it("it can test whether to make a new frame", () => {
  const currentGame = Game.create();
  expect(currentGame.shouldMakeNewFrame()).toBe(true);
  currentGame.setFrames([{ roll1: 8 }]);
  expect(currentGame.shouldMakeNewFrame()).toBe(false);
  currentGame.setFrames([{ roll1: 8, roll2: 2 }]);
  expect(currentGame.shouldMakeNewFrame()).toBe(true);
  currentGame.setFrames([{ roll1: 10 }]);
  expect(currentGame.shouldMakeNewFrame()).toBe(true);
});

it("it can add a new score", () => {
  const currentGame = Game.create();
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

it("it can calculate a running score", () => {
  const currentGame = Game.create();
  currentGame.addNewScore(5);
  expect(currentGame.calculateGameScore()).toBe(5);
});
