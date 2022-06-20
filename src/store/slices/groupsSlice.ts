import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "../../interfaces/group.interface";
import { getGroup, getGroupList } from "../thunks/groupsThunks";

interface GroupsState {
  selectedGroup: IGroup | null;
  groupList: Omit<IGroup, "headmanId">[];
  loading: boolean;
  error: string;
}

const initialState: GroupsState = {
  selectedGroup: null,
  groupList: [],
  loading: false,
  error: "",
};

const groupsSlice = createSlice({
  initialState,
  name: "groups",
  reducers: {
    setGroup(state, action: PayloadAction<IGroup>) {
      state.selectedGroup = action.payload;
    },
  },
  extraReducers: {
    [getGroupList.fulfilled.type]: (
      state,
      action: PayloadAction<Omit<IGroup, "headmanId">[]>
    ) => {
      state.groupList = action.payload;
    },

    [getGroup.fulfilled.type]: (state, action: PayloadAction<IGroup>) => {
      state.selectedGroup = action.payload;
      state.loading = false;
    },
    [getGroup.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getGroup.pending.type]: (state) => {
      state.loading = true;
    },
  },
});

export const { setGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
