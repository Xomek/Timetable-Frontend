import { Typography, Box, Tabs, Tab, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import AppSelect from "../AppSelect";
import SelectGroup from "../AppSelect";

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
  const groupList = useAppSelector((state) => state.groups.groupList);
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
          <Tab label="Пароль" {...a11yProps(0)} />
          <Tab label="Группа" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TextField sx={{ mb: 2 }} placeholder="Пароль" />
          <TextField placeholder="Новый пароль" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField sx={{ mb: 2 }} placeholder="Пароль" />
          <AppSelect
            sx={{ width: "100%" }}
            label="Выберите группу"
            options={groupList}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Settings;
