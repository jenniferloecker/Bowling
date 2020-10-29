import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameOverDisplay = () => {
  const classes = useStyles();
  return (
    <Fragment className={classes.root}>
      <div>Final Score: 300</div>
      <Button variant="contained" color="primary">
        Start Over
      </Button>
    </Fragment>
  );
};

export default GameOverDisplay;
