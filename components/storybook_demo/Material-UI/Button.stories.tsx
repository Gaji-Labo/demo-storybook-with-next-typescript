import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  labelHighlight: {
    color: "red",
    fontWeight: "bold",
  },
});

export default { title: "Material-UI Button", component: Button };

export const Default: () => JSX.Element = () => {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary">
      Hello <span className={classes.labelHighlight}>World</span>
    </Button>
  );
};

export const Secondary: () => JSX.Element = () => (
  <Button variant="contained" color="secondary">
    Hello World
  </Button>
);
