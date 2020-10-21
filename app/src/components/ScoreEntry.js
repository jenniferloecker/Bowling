import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const ScoreEntry = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField label="Enter the next Score:" />
    </form>
  );
};

export default ScoreEntry;
