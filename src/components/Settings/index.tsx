import { Typography, Box, Tabs, Tab, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Settings: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "60px 30px",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          textAlign: "center",
          mb: "30px",
          color: "#1e202a",
        }}
      >
        Настройки
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", width: 300 }}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TextField sx={{ mb: 2 }} placeholder="Логин" />
          <TextField sx={{ mb: 2 }} placeholder="Пароль" />
          <TextField placeholder="Роль" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField sx={{ mb: 2 }} placeholder="Тест" />
          <TextField sx={{ mb: 2 }} placeholder="Тест" />
          <TextField placeholder="Тест" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TextField sx={{ mb: 2 }} placeholder="123" />
          <TextField sx={{ mb: 2 }} placeholder="Тест" />
          <TextField placeholder="12" />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Settings;
