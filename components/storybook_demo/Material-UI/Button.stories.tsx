import React from "react";
import { Button } from "@material-ui/core";

export default { title: "Material-UI Button", component: Button };

export const Default: () => JSX.Element = () => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);

export const Secondary: () => JSX.Element = () => (
  <Button variant="contained" color="secondary">
    Hello World
  </Button>
);
