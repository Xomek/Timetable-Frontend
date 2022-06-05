import { Button, Box, Typography, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registrationUser } from "../../store/thunks/authThunks";
import { registrationFormSchema } from "../../yup/registrationForm.shema";

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState<string>("");
  const { groupList } = useAppSelector((state) => state.groups);

  function handleSelect(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSelectValue(e.target.value);
  }

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        confirmPassword: "",
        groupId: "",
      }}
      onSubmit={(values) => dispatch(registrationUser(values))}
      validationSchema={registrationFormSchema}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: "60px 30px",
            width: "500px",
            height: "700px",
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
            Регистрация
          </Typography>
          <TextField
            type="text"
            label="Логин"
            name="login"
            value={values.login}
            onChange={handleChange}
            helperText={errors.login}
            error={!!errors.login}
          />
          <TextField
            type="password"
            label="Пароль"
            name="password"
            value={values.password}
            onChange={handleChange}
            helperText={errors.password}
            error={!!errors.password}
          />
          <TextField
            type="password"
            label="Повторите пароля"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            helperText={errors.confirmPassword}
            error={!!errors.confirmPassword}
          />
          <TextField
            select
            name="groupId"
            label="Выберите группу"
            value={selectValue}
            onChange={(e) => {
              handleChange(e);
              handleSelect(e);
            }}
            helperText={errors.groupId}
            error={!!errors.groupId}
          >
            {groupList.map((group) => (
              <MenuItem key={group.id} value={group.id}>
                {group.title}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            sx={{
              color: "#fff",
              backgroundColor: "#1e202a",
              width: "50%",
              margin: "20px auto 0",
              border: "1px solid transparent",
              ":hover": {
                color: "#1e202a",
                backgroundColor: "#fff",
                border: "1px solid #1e202a",
              },
            }}
          >
            Зарегистрироваться
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default RegistrationForm;
