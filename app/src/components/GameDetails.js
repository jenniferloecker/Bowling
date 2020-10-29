import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import FrameDetails from "./FrameDetails";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameDetails = ({ currentGame }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      {currentGame.frames.map((frame, index) => (
        <FrameDetails key={index} frame={frame} index={index} />
      ))}
    </Grid>
  );
};

export default observer(GameDetails);
