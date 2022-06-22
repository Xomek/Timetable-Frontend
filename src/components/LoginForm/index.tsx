import { Button, Typography, TextField, Theme, styled } from "@mui/material";
import { FC } from "react";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <LoginFormStyled onSubmit={formik.handleSubmit}>
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
        value={formik.values.login}
        sx={{ mb: 3 }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.login && formik.errors.login}
        error={formik.touched.login && !!formik.errors.login}
      />
      <TextField
        type="password"
        name="password"
        label="Пароль"
        value={formik.values.password}
        sx={{ mb: 1 }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.password && formik.errors.password}
        error={formik.touched.password && !!formik.errors.password}
      />
      <Button
        type="submit"
        sx={{
          color: "primary.contrastText",
          backgroundColor: "primary.main",
          width: "50%",
          margin: "20px auto 0",
          border: "1px solid transparent",
          ":hover": {
            color: "#1e202a",
            backgroundColor: "primary.contrastText",
            border: "1px solid #1e202a",
          },
        }}
      >
        Войти
      </Button>
    </LoginFormStyled>
  );
};

export default LoginForm;
