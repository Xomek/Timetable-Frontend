import { TextField, MenuItem } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getGroup, getGroupList } from "../../store/thunks/groupsThunks";
import Weeks from "../Weeks";

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

  function selectHandler(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    dispatch(getGroup(e.target.value));
  }

  return (
    <div>
      {auth ? (
        <Weeks weeks={[]} />
      ) : selectedGroup ? (
        selectedGroup.headmanId
      ) : (
        <TextField
          select
          label="Выберите группу"
          sx={{ width: "300px" }}
          value={selectValue}
          onChange={(e) => selectHandler(e)}
        >
          {groupList.map((group) => (
            <MenuItem key={group.id} value={group.id}>
              {group.title}
            </MenuItem>
          ))}
        </TextField>
      )}
    </div>
  );
};

export default Group;