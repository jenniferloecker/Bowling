import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";
import { Game } from "../stores/Game";
import { observer } from "mobx-react";

const currentGame = Game.create();

const MainDisplay = () => {
  return (
    <React.Fragment>
      <ScoreEntry currentGame={currentGame} />
      <GameDetails currentGame={currentGame} />
    </React.Fragment>
  );
};

export default observer(MainDisplay);
