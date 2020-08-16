import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import SubmissionTabs from "./SubmissionTabs";
import DataGrid from "./DataGrid";

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
          label="Upcoming Classes"
        />
        <Tab
          style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
          label="Submissions"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DataGrid></DataGrid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubmissionTabs></SubmissionTabs>
      </TabPanel>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
