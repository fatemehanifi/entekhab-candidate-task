import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { filter_field } from "../../atoms";
import { filter_value } from "../../atoms";
import { useRecoilState, RecoilRoot } from 'recoil';
import "./Navbar.scss";

export default function Navbar(props : any) {
  const [field, setField] = React.useState("");
  const [value, setValue] = React.useState("");
  const [filterField, setFilterField] = useRecoilState(filter_field);
  const [filterValue, setFilterValue] = useRecoilState(filter_value);

  const handleChange = (event: SelectChangeEvent) => {
    setField(event.target.value as string);
  };

  const handleClick = () => {
    setFilterField(field)
    setFilterValue(value)
    props.applyFilter()
  }

  return (
    <RecoilRoot>
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div">
            Filter:
          </Typography>
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Field</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value='name'>name</MenuItem>
                <MenuItem value='status'>status</MenuItem>
                <MenuItem value='species'>species</MenuItem>
                <MenuItem value='type'>type</MenuItem>
                <MenuItem value='gender'>gender</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Value"
            variant="outlined"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
            }}
            className="filter_value"
          />
          <Button className="submit_btn" onClick={handleClick}>submit</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </RecoilRoot>
  );
}
