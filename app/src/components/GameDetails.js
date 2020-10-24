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

      <h3>Frame 1</h3>
      <h5>1:{currentGame.frames[0].roll1}</h5>
      <h5>2:{currentGame.frames[0].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 2</h3>
      <h5>1:{currentGame.frames[1].roll1}</h5>
      <h5>2:{currentGame.frames[1].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 3</h3>
      <h5>1:{currentGame.frames[2].roll1}</h5>
      <h5>2:{currentGame.frames[2].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 4</h3>
      <h5>1:{currentGame.frames[3].roll1}</h5>
      <h5>2:{currentGame.frames[3].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 5</h3>
      <h5>1:{currentGame.frames[4].roll1}</h5>
      <h5>2:{currentGame.frames[4].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 6</h3>
      <h5>1:{currentGame.frames[5].roll1}</h5>
      <h5>2:{currentGame.frames[5].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 7</h3>
      <h5>1:{currentGame.frames[6].roll1}</h5>
      <h5>2:{currentGame.frames[6].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 8</h3>
      <h5>1:{currentGame.frames[7].roll1}</h5>
      <h5>2:{currentGame.frames[7].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 9</h3>
      <h5>1:{currentGame.frames[8].roll1}</h5>
      <h5>2:{currentGame.frames[8].roll2}</h5>
      <h5>Score:</h5>
      <h3>Frame 10</h3>
      <h5>1:{currentGame.frames[9].roll1}</h5>
      <h5>2:{currentGame.frames[9].roll2}</h5>
      <h5>3:{currentGame.frames[9].roll3}</h5>
      <h5>Score:</h5>
    </div>
  );
};

export default observer(GameDetails);
