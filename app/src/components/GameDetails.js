import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameDetails = ({ currentGame }) => {
  const classes = useStyles();
  // const currentScore = currentGame.calculateGameScore();
  return (
    <div className={classes.root}>
      <h1>Game:</h1>
      <u>Frame 1</u> <br />
      1:{currentGame.frames[0].roll1} <br />
      2:{currentGame.frames[0].roll2} <br />
      Score:
      <br />
      <br />
      <u>Frame 2</u>
      <br />
      1:{currentGame.frames[1].roll1}
      <br />
      2:{currentGame.frames[1].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 3</u>
      <br />
      1:{currentGame.frames[2].roll1}
      <br />
      2:{currentGame.frames[2].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 4</u>
      <br />
      1:{currentGame.frames[3].roll1}
      <br />
      2:{currentGame.frames[3].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 5</u>
      <br />
      1:{currentGame.frames[4].roll1}
      <br />
      2:{currentGame.frames[4].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 6</u>
      <br />
      1:{currentGame.frames[5].roll1}
      <br />
      2:{currentGame.frames[5].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 7</u>
      <br />
      1:{currentGame.frames[6].roll1}
      <br />
      2:{currentGame.frames[6].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 8</u>
      <br />
      1:{currentGame.frames[7].roll1}
      <br />
      2:{currentGame.frames[7].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 9</u>
      <br />
      1:{currentGame.frames[8].roll1}
      <br />
      2:{currentGame.frames[8].roll2}
      <br />
      Score:
      <br />
      <br />
      <u>Frame 10</u>
      <br />
      1:{currentGame.frames[9].roll1}
      <br />
      2:{currentGame.frames[9].roll2}
      <br />
      3:{currentGame.frames[9].roll3}
      <br />
      Score:
      <br />
      <br />
    </div>
  );
};

export default observer(GameDetails);
