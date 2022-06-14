import { createAsyncThunk } from "@reduxjs/toolkit";

export const changePassword = createAsyncThunk(
  "settings/changePassword",
  async (_, { rejectWithValue }) => {}
);

export const changeGroup = createAsyncThunk(
  "settings/changeGroup",
  async (_, { rejectWithValue }) => {}
);
