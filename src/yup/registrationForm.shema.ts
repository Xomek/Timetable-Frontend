import * as yup from "yup";

export const registrationFormSchema = yup.object({
  login: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Слишком короткий логин")
    .max(16, "Слишком длинный логин")
    .matches(
      /(?!-)(?!.*__)(?!.*-_)(?!.*_-)(?!.*--)^[_a-zA-Z0-9-]+$/,
      "Слишком простой логин"
    ),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Слишком короткий пароль")
    .max(32, "Слишком длинный пароль")
    .matches(
      /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/,
      "Слишком простой пароль"
    )
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      "Слишком простой пароль"
    ),
  confirmPassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});
