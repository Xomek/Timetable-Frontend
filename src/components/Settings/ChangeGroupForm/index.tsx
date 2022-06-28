import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { changeGroup } from "../../../store/thunks/settingsThunks";
import { changeGroupSchema } from "../../../yup/settings/changeGroup.schema";
import AppSelect from "../../AppSelect";

const ChangeGroupForm: FC = () => {
  const groupList = useAppSelector((state) => state.groups.groupList);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { id: "" },
    validationSchema: changeGroupSchema,
    onSubmit: (values) => {
      dispatch(changeGroup(values));
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <AppSelect
        sx={{ mb: 2, width: "100%" }}
        name="id"
        label="Выберите группу"
        options={groupList}
        value={formik.values.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.id && !!formik.errors.id}
        helperText={formik.touched.id && formik.errors.id}
      />
      <Button type="submit" sx={{ width: "100%" }}>
        Подтвердить
      </Button>
    </Box>
  );
};

export default ChangeGroupForm;
