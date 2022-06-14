import { SelectChangeEvent } from "@mui/material";
import { FC, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getGroup, getGroupList } from "../../store/thunks/groupsThunks";
import AppSelect from "../AppSelect";
import Weeks from "./Weeks";

const Group: FC = () => {
  const auth = useAuth();
  const { selectedGroup, groupList } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGroupList());
  }, []);

  useEffect(() => {
    dispatch(getGroup(localStorage.getItem("groupId") || "123"));
  }, [auth]);

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    dispatch(getGroup(e.target.value));
  };

  return (
    <div>
      {auth ? (
        <>
          <AppSelect
            sx={{
              width: 300,
              display: "flex",
              margin: "0 auto",
              "& div": {
                width: "100%",
                color: "#fff",
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
            label="Выберите группу"
            options={groupList}
            onChange={(id) => onChangeSelect(id)}
          />
          {selectedGroup && <Weeks weeks={selectedGroup.weeks} />}
        </>
      ) : (
        <>
          <AppSelect
            sx={{
              width: 300,
              display: "flex",
              margin: "0 auto",
              "& div": {
                color: "#fff",
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
            label="Выберите группу"
            options={groupList}
            onChange={(id) => onChangeSelect(id)}
          />
          {selectedGroup && <Weeks weeks={selectedGroup.weeks} />}
        </>
      )}
    </div>
  );
};

export default Group;
