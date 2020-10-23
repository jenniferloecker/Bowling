import { Game } from "./Game";

it("it can calculate a running score", () => {
  const currentGame = Game.create();
  currentGame.addNewScore(5);
  const currentScore = currentGame.calculateGameScore();
  expect(currentScore).toBe(5);
});
