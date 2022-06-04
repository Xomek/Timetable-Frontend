import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../../interfaces/authResponse.interface";
import { IUser } from "../../../interfaces/user.interface";
import {
  loginUser,
  logout,
  refreshUserToken,
  registrationUser,
} from "../../thunks/auth/authThunks";

interface AuthState {
  user: IUser;
  auth: boolean;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: {} as IUser,
  auth: false,
  token: "",
  loading: false,
  error: "",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers: {
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loginUser.fulfilled.type]: (
      state,
      action: PayloadAction<IAuthResponse>
    ) => {
      state.auth = true;
      state.user.id = action.payload.userId;
      state.loading = false;
    },
    [loginUser.pending.type]: (state) => {
      state.loading = true;
    },
    [registrationUser.fulfilled.type]: (state) => {
      state.auth = true;
      state.loading = false;
    },
    [registrationUser.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [registrationUser.pending.type]: (state) => {
      state.loading = true;
    },
    [refreshUserToken.fulfilled.type]: (
      state,
      action: PayloadAction<{ token: string }>
    ) => {
      state.auth = true;
      state.token = action.payload.token;
    },
    [logout.fulfilled.type]: (state) => {
      state.auth = false;
      state.user = {} as IUser;
      localStorage.removeItem("token");
    },
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
