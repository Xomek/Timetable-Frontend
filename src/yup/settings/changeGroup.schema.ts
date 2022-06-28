import * as yup from "yup";

export const changeGroupShema = yup.object({
  id: yup.string().required("Обязательное поле"),
});
