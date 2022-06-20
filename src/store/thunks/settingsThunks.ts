import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../axios";
import { IGroup } from "../../interfaces/group.interface";
import { setGroup } from "../slices/groupsSlice";
import { getGroup } from "./groupsThunks";

export const changePassword = createAsyncThunk(
  "settings/changePassword",
  async (
    values: { oldPassword: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await $api.post<boolean>("user/self/password", values);
      return data;
    } catch ({ message }) {
      return rejectWithValue({ message });
    }
  }
);

export const changeGroup = createAsyncThunk(
  "settings/changeGroup",
  async (values: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $api.post<IGroup>("user/self/group", values);
      const res: any = await dispatch(getGroup(values.id));
      localStorage.setItem("groupId", values.id);
      dispatch(setGroup(res.payload));

      return data;
    } catch ({ message }) {
      return rejectWithValue({ message });
    }
  }
);
