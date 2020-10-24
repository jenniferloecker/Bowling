import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "50%",
  },
}));

const ScoreEntry = ({ currentGame }) => {
  const [newValue, setNewValue] = useState("");
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    currentGame.addNewScore(Number(newValue));
    setNewValue("");
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        className={classes.textField}
        label="Enter the next roll score:"
        value={newValue}
        onInput={(e) => setNewValue(e.target.value)}
      />
    </form>
  );
};

export default observer(ScoreEntry);
