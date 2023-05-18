import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import test from "../../assets/test.svg";
import { useState } from "react";

const ListTop = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography component="div">
          <TextField
            placeholder="Search Programs"
            size="small"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <Button className="button-1" onClick={() => onSearch(searchKey)}>
            <img src={test} className="w-4 h-4 mr-4" alt="React logo" />
            Stations
          </Button>
        </Typography>
        <Typography component="div">
          <Button className="button-2">+ Add Station</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ListTop;
