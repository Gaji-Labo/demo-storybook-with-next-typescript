import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  labelHighlight: {
    color: "red",
    fontWeight: "bold",
  },
});

export default {
  title: "Material-UI CircularProgress",
  component: CircularProgress,
};

export const Default: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <CircularProgress className={classes.labelHighlight} color="primary" />
  );
};

export const Double: () => JSX.Element = () => (
  <>
    <CircularProgress color="primary" />
    <CircularProgress color="secondary" />
  </>
);

export const Triple: () => JSX.Element = () => (
  <>
    <CircularProgress color="primary" />
    <CircularProgress color="secondary" />
    <CircularProgress color="secondary" />
  </>
);
