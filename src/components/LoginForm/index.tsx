import { Button, Typography, TextField, Theme, styled } from "@mui/material";
import { FC } from "react";
import { Formik } from "formik";
import { loginFormSchema } from "../../yup/loginForm.shema";
import { useAppDispatch } from "../../store/hooks";
import { loginUser } from "../../store/thunks/authThunks";

const LoginFormStyled = styled("form")(({ theme }: { theme: Theme }) => ({
  minHeight: 500,
  maxWidth: 500,
  width: "100%",
  margin: "0 auto",
  "& .MuiTextField-root": { m: 1.5 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: "60px 30px",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        dispatch(loginUser(values));
      }}
      validationSchema={loginFormSchema}
    >
      {({ values, handleChange, handleSubmit, touched, errors }) => (
        <LoginFormStyled onSubmit={handleSubmit}>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              mb: "30px",
              color: "#1e202a",
            }}
          >
            Вход
          </Typography>

          <TextField
            type="text"
            name="login"
            label="Логин"
            value={values.login}
            sx={{ mb: 3 }}
            onChange={handleChange}
            helperText={touched.login && errors.login}
            error={touched.login && !!errors.login}
          />
          <TextField
            type="password"
            name="password"
            label="Пароль"
            value={values.password}
            sx={{ mb: 1 }}
            onChange={handleChange}
            helperText={touched.password && errors.password}
            error={touched.password && !!errors.password}
          />
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
            Войти
          </Button>
        </LoginFormStyled>
      )}
    </Formik>
  );
};

export default LoginForm;
