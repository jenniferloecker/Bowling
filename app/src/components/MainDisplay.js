import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";
import { Game } from "../stores/Game";
import { observer } from "mobx-react";
import GameOverDisplay from "./GameOverDisplay";

const currentGame = Game.create();

const MainDisplay = () => {
  return (
    <React.Fragment>
      <ScoreEntry currentGame={currentGame} />
      <GameDetails currentGame={currentGame} />
      <GameOverDisplay />
    </React.Fragment>
  );
};

export default observer(MainDisplay);
