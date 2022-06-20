import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import $api, { API_URL } from "../../axios";
import { IAuthResponse } from "../../interfaces/authResponse.interface";
import { IRole } from "../../interfaces/role.interfase";
import { IUserCredentials } from "../../interfaces/userCredentials.interface";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials: IUserCredentials, { rejectWithValue }) => {
    try {
      const response = await $api.post<IAuthResponse>("/auth/login", {
        login: userCredentials.login,
        password: userCredentials.password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("groupId", response.data.groupId);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async (userCredentials: IUserCredentials, { rejectWithValue }) => {
    try {
      const response = await $api.post<IAuthResponse>("/auth/registration", {
        login: userCredentials.login,
        password: userCredentials.password,
        confirmPassword: userCredentials.confirmPassword,
        groupId: userCredentials.groupId,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("groupId", response.data.groupId);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await $api.get<IAuthResponse>("/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("groupId");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const refreshUserToken = createAsyncThunk(
  "auth/refreshUserToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<{
        token: string;
        userRoles: IRole[];
      }>(`${API_URL}/auth/refresh`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "x-user-id": localStorage.getItem("userId") || "",
        },
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
