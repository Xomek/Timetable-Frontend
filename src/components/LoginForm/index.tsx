import { Button, Box, Typography, TextField } from "@mui/material";
import { FC } from "react";
import { Formik } from "formik";
import { loginFormSchema } from "../../yup/loginForm.shema";

const LoginForm: FC = () => {
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginFormSchema}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
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
            height: "500px",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              mb: "20px",
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
            onChange={handleChange}
            helperText={errors.login}
            error={!!errors.login}
          />
          <TextField
            type="password"
            name="password"
            label="Пароль"
            value={values.password}
            onChange={handleChange}
            helperText={errors.password}
            error={!!errors.password}
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
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
