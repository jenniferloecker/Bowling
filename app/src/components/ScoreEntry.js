import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "50%",
  },
}));

const ScoreEntry = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField
        className={classes.textField}
        label="Enter the next roll score:"
      />
    </form>
  );
};

export default ScoreEntry;
