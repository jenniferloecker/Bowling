import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import FrameDetails from "./FrameDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameDetails = ({ currentGame }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {currentGame.frames.map((frame, index) => (
        <FrameDetails frame={frame} index={index} />
      ))}
    </div>
  );
};

export default observer(GameDetails);
