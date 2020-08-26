import React from "react";
import { CircularProgress } from "@material-ui/core";

export default {
  title: "Material-UI CircularProgress",
  component: CircularProgress,
};

export const Default: () => JSX.Element = () => (
  <CircularProgress color="primary" />
);

export const Double: () => JSX.Element = () => (
  <>
    <CircularProgress color="primary" />
    <CircularProgress color="secondary" />
  </>
);
