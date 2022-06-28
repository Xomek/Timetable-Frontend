import * as yup from "yup";

export const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Слишком короткий пароль")
    .max(32, "Слишком длинный пароль")
    .matches(
      /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/,
      "Пароль слишком простой"
    )
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      "Пароль слишком простой"
    ),
  newPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Слишком короткий пароль")
    .max(32, "Слишком длинный пароль")
    .matches(
      /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/,
      "Пароль слишком простой"
    )
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      "Пароль слишком простой"
    )
    .notOneOf(
      [yup.ref("oldPassword")],
      "Пароль не должен совпадать со старым"
    ),
});