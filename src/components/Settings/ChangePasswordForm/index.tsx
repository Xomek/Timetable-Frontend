import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { changePassword } from "../../../store/thunks/settingsThunks";
import { changePasswordSchema } from "../../../yup/settings/changePassword.schema";

const ChangePasswordForm: FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { oldPassword: "", newPassword: "" },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      dispatch(changePassword(values));
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        sx={{ mb: 2, width: "100%" }}
        type="password"
        placeholder="Пароль"
        name="oldPassword"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
        error={formik.touched.oldPassword && !!formik.errors.oldPassword}
      />
      <TextField
        type="password"
        placeholder="Новый пароль"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
        error={formik.touched.newPassword && !!formik.errors.newPassword}
        sx={{ mb: 2, width: "100%" }}
      />
      <Button type="submit" sx={{ width: "100%" }}>
        Подтвердить
      </Button>
    </Box>
  );
};

export default ChangePasswordForm;
