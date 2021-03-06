import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";
import { Game } from "../stores/Game";
import { observer } from "mobx-react";
import GameOverDisplay from "./GameOverDisplay";
import { startingFrames } from "../stores/StartingFrames";

let currentGame = Game.create();

const startOver = () => {
  currentGame.setFrames(startingFrames);
};

const MainDisplay = () => {
  return (
    <React.Fragment>
      <ScoreEntry currentGame={currentGame} />
      <GameDetails currentGame={currentGame} />
      {currentGame.isGameOver() && (
        <GameOverDisplay currentGame={currentGame} startOver={startOver} />
      )}
    </React.Fragment>
  );
};

export default observer(MainDisplay);
