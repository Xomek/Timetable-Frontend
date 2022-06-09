import { TextField, MenuItem } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getGroup, getGroupList } from "../../store/thunks/groupsThunks";
import Weeks from "./Weeks";

const Group: FC = () => {
  const auth = useAuth();
  const [selectValue, setSelectValue] = useState<string>("");
  const { groupList, selectedGroup } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGroupList());
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      setSelectValue(selectedGroup.title);
    }
  }, [selectedGroup]);

  useEffect(() => {
    dispatch(getGroup(localStorage.getItem("groupId") || "123"));
  }, [auth]);

  function selectHandler(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    dispatch(getGroup(e.target.value));
  }

  return (
    <div>
      {auth ? (
        <>
          <TextField
            select
            label="Выберите группу"
            sx={{
              margin: "0 auto",
              display: "block",
              maxWidth: 300,
              "& div": {
                width: "100%",
              },
              "& label": {
                color: "#fff",
                backgroundColor: "#2d333b",
              },
              "&:before": {
                borderColor: "#fff",
              },
              "&:after": {
                borderColor: "#fff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              borderRadius: 1,
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white",
                },

              "&:hover .MuiInputLabel-root": {
                color: "white",
              },
            }}
            value={selectValue}
            onChange={(e) => selectHandler(e)}
          >
            {groupList.map((group) => (
              <MenuItem key={group.id} value={group.id}>
                {group.title}
              </MenuItem>
            ))}
          </TextField>
          {selectedGroup && <Weeks weeks={selectedGroup.weeks} />}
        </>
      ) : (
        <>
          <TextField
            select
            label="Выберите группу"
            sx={{
              margin: "0 auto",
              display: "block",
              maxWidth: 300,
              "& div": {
                width: "100%",
              },
              "& label": {
                color: "#fff",
                backgroundColor: "#2d333b",
              },
              "&:before": {
                borderColor: "#fff",
              },
              "&:after": {
                borderColor: "#fff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              borderRadius: 1,
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white",
                },
              "&:hover .MuiInputLabel-root": {
                color: "white",
              },
            }}
            value={selectValue}
            onChange={(e) => selectHandler(e)}
          >
            {groupList.map((group) => (
              <MenuItem key={group.id} value={group.id}>
                {group.title}
              </MenuItem>
            ))}
          </TextField>
          {selectedGroup && <Weeks weeks={selectedGroup.weeks} />}
        </>
      )}
    </div>
  );
};

export default Group;
