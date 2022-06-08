import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../axios";
import { IGroup } from "../../interfaces/group.interface";

export const getGroupList = createAsyncThunk(
  "groups/getGroupList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.get<Omit<IGroup, "headmanId">[]>(
        "/group/list"
      );
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getGroup = createAsyncThunk(
  "groups/getGroup",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await $api.get<IGroup>(`/group/schedule/${id}`);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
