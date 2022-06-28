import * as yup from "yup";

export const changeGroupSchema = yup.object({
  id: yup.string().required("Обязательное поле"),
});
