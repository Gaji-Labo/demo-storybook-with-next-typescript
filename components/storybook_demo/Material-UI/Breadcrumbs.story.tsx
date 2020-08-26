import React from "react";
import { Breadcrumbs, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  labelHighlight: {
    color: "red",
    fontWeight: "bold",
  },
});

const MuiBreadcrumbs: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Material-UI
      </Link>
      <Link color="inherit" href="#">
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};

export default { title: "Material-UI Breadcrumbs", component: MuiBreadcrumbs };

export const Default: () => JSX.Element = () => <MuiBreadcrumbs />;
