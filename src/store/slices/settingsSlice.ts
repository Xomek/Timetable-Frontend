import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeGroup } from "../thunks/settingsThunks";

interface SettingsState {}

const initialState: SettingsState = {};

const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {},
  extraReducers: {
    [changeGroup.fulfilled.type]: (state, action: PayloadAction<number>) => {},
  },
});

export const {} = settingsSlice.actions;
export default settingsSlice.reducer;
