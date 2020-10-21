import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Game Details:</h1>
      <t />
      <h3>Current Score: 50</h3>
      <t />
      <h3>Current Frame: 5</h3>
      <t />
      <h3>Rolls Left In Frame: 1</h3>
    </div>
  );
};

export default GameDetails;
