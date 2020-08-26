import React from "react";
import { Tabs, Tab, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  labelHighlight: {
    color: "red",
    fontWeight: "bold",
  },
});

const MuiTabs: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <Paper square>
      <Tabs>
        <Tab label="一個目" className={classes.labelHighlight} />
        <Tab label="２個め" disabled />
        <Tab label="さいご" />
      </Tabs>
    </Paper>
  );
};

export default { title: "Material-UI Tabs", component: MuiTabs };

export const Default: () => JSX.Element = () => <MuiTabs />;
