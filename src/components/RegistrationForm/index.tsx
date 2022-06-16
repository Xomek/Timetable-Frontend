import { Button, Typography, TextField, Theme, styled } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registrationUser } from "../../store/thunks/authThunks";
import { registrationFormSchema } from "../../yup/registrationForm.shema";
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
  const dispatch = useAppDispatch();
  const { groupList } = useAppSelector((state) => state.groups);

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        confirmPassword: "",
        groupId: "",
      }}
      onSubmit={(values) => {
        dispatch(registrationUser(values));
      }}
      validationSchema={registrationFormSchema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
      }) => (
        <RegistrationFormStyled onSubmit={handleSubmit}>
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
            sx={{ mb: 3 }}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.login && errors.login}
            error={touched.login && !!errors.login}
          />
          <TextField
            type="password"
            label="Пароль"
            name="password"
            value={values.password}
            sx={{ mb: 3 }}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && !!errors.password}
          />
          <TextField
            type="password"
            label="Повторите пароля"
            name="confirmPassword"
            value={values.confirmPassword}
            sx={{ mb: 3 }}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.confirmPassword && errors.confirmPassword}
            error={touched.confirmPassword && !!errors.confirmPassword}
          />
          <AppSelect
            label="Выберите группу"
            name="groupId"
            options={groupList}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.groupId}
            helperText={touched.groupId && errors.groupId}
            error={touched.groupId && !!errors.groupId}
          />
          <Button
            type="submit"
            sx={{
              color: "#fff",
              backgroundColor: "#1e202a",
              width: "55%",
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
        </RegistrationFormStyled>
      )}
    </Formik>
  );
};

export default RegistrationForm;
