import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";

const MainDisplay = () => {
  return (
    <React.Fragment>
      <ScoreEntry />
      <GameDetails />
    </React.Fragment>
  );
};

export default MainDisplay;
