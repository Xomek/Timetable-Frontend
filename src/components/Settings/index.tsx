import {
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  styled,
  Theme,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import { FC, SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeGroup, changePassword } from "../../store/thunks/settingsThunks";
import AppSelect from "../AppSelect";

const SettingsStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#fff",
  padding: "60px 30px",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

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
          <Typography component={"span"}>{children}</Typography>
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

  const { userRoles } = useAppSelector((state) => state.auth.user);
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  const roleTitles = userRoles.map((role) => role.title);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SettingsStyled>
      <Typography
        component={"h2"}
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
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: 300,
          }}
        >
          {roleTitles.includes("student") && [
            <Tab key={"password"} label="Пароль" {...a11yProps(0)} />,
            <Tab key={"group"} label="Группа" {...a11yProps(1)} />,
          ]}
          {roleTitles.includes("headman") && [
            <Tab
              key={"password"}
              label="Изменить расписание"
              {...a11yProps(2)}
            />,
          ]}
          {roleTitles.includes("admin") && ""}
        </Tabs>
        {roleTitles.includes("student") && (
          <>
            <TabPanel value={value} index={0}>
              <Formik
                initialValues={{ oldPassword: "", newPassword: "" }}
                onSubmit={(values) => {
                  dispatch(changePassword(values));
                }}
              >
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mb: 2 }}
                      type="password"
                      placeholder="Пароль"
                      name="oldPassword"
                      value={values.oldPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      type="password"
                      placeholder="Новый пароль"
                      name="newPassword"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ mb: 2 }}
                    />
                    <Button type="submit" sx={{ width: "100%" }}>
                      Подтвердить
                    </Button>
                  </Box>
                )}
              </Formik>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Formik
                initialValues={{ id: "" }}
                onSubmit={(values) => {
                  dispatch(changeGroup(values));
                }}
              >
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                  <Box component="form" onSubmit={handleSubmit}>
                    <AppSelect
                      sx={{ width: "100%" }}
                      name="id"
                      label="Выберите группу"
                      options={groupList}
                      value={values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Button type="submit" sx={{ width: "100%" }}>
                      Подтвердить
                    </Button>
                  </Box>
                )}
              </Formik>
            </TabPanel>
          </>
        )}
        {roleTitles.includes("headman") && (
          <>
            <TabPanel value={value} index={2}></TabPanel>
          </>
        )}
        {roleTitles.includes("admin") && <></>}
      </Box>
    </SettingsStyled>
  );
};

export default Settings;
