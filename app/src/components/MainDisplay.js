import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";
import { Game } from "../stores/Game";

const currentGame = Game.create();

const MainDisplay = () => {
  return (
    <React.Fragment>
      <ScoreEntry currentGame={currentGame} />
      <GameDetails currentGame={currentGame} />
    </React.Fragment>
  );
};

export default MainDisplay;
