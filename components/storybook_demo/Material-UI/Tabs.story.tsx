import React from "react";
import { Tabs, Tab, Paper, Button } from "@material-ui/core";

const MuiTabs: () => JSX.Element = () => (
  <Paper square>
    <Tabs>
      <Tab label="一個目" />
      <Tab label="２個め" disabled />
      <Tab label="さいご" />
    </Tabs>
  </Paper>
);

export default { title: "Material-UI Tabs", component: MuiTabs };

export const Default: () => JSX.Element = () => <MuiTabs />;
