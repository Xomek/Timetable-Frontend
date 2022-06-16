import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { FC, useState } from "react";

interface IAppSelectProps {
  sx?: SxProps<Theme>;
  label?: string;
  options: { id: string; title: string }[];
  value?: string;
  name?: string;
  helperText?: string | boolean;
  error?: boolean;
  onChange?: (arg?: any) => void;
  onBlur?: (arg?: any) => void;
}

const AppSelect: FC<IAppSelectProps> = ({
  sx,
  label,
  options,
  value,
  error,
  helperText,
  onChange,
  onBlur,
  ...props
}) => {
  const [selected, setSelected] = useState<string>("");

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    setSelected(e.target.value);
    onChange && onChange(e);
  };

  return (
    <FormControl sx={sx} error={error}>
      {label && <InputLabel id="app-select-label">{label}</InputLabel>}
      <Select
        labelId="app-select-label"
        id="app-select"
        label={label}
        value={value ? value : selected}
        onChange={onChangeSelect}
        onBlur={onBlur}
        {...props}
      >
        {options.map((option: { id: string; title: string }) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default AppSelect;
