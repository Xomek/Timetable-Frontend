import { Button, Typography, TextField, Theme, styled, Box } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registrationUser } from "../../store/thunks/authThunks";
import { registrationFormSchema } from "../../yup/auth/registrationForm.schema";
import AppSelect from "../AppSelect";

const RegistrationFormStyled = styled("form")(
  ({ theme }: { theme: Theme }) => ({
    minHeight: 700,
    maxWidth: 500,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "60px 30px",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  })
);

const RegistrationForm: FC = () => {
  const error = useAppSelector((state) => state.auth.error);
  const { groupList } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
      groupId: "",
    },
    validationSchema: registrationFormSchema,
    onSubmit: (values) => {
      dispatch(registrationUser(values));
    },
  });

  return (
    <RegistrationFormStyled onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          color: "red",
          textAlign: "center",
        }}
      >
        {error}
      </Box>
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
        value={formik.values.login}
        sx={{ mb: 3 }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.login && formik.errors.login}
        error={formik.touched.login && !!formik.errors.login}
      />
      <TextField
        type="password"
        label="Пароль"
        name="password"
        value={formik.values.password}
        sx={{ mb: 3 }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.password && formik.errors.password}
        error={formik.touched.password && !!formik.errors.password}
      />
      <TextField
        type="password"
        label="Повторите пароля"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        sx={{ mb: 3 }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        error={
          formik.touched.confirmPassword && !!formik.errors.confirmPassword
        }
      />
      <AppSelect
        sx={{ mb: 1 }}
        label="Выберите группу"
        name="groupId"
        options={groupList}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.groupId}
        helperText={formik.touched.groupId && formik.errors.groupId}
        error={formik.touched.groupId && !!formik.errors.groupId}
      />
      <Button
        type="submit"
        sx={{
          backgroundColor: "#1e202a",
          width: "55%",
          margin: "20px auto 0",
          border: "1px solid transparent",
          color: "primary.contrastText",
          ":hover": {
            color: "primary.main",
            backgroundColor: "primary.contrastText",
            border: "1px solid #1e202a",
          },
        }}
      >
        Зарегистрироваться
      </Button>
    </RegistrationFormStyled>
  );
};

export default RegistrationForm;
