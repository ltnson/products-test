import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import glass from "../../assets/glass.svg";

const ListTop = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const navigate = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefalut();
    onSearch(searchKey);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography component="div">
          <form onSubmit={onSubmit}>
            <TextField
              placeholder="Search Programs"
              size="small"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button className="button-1">
              <img src={glass} className="w-4 h-4 mr-4" alt="React logo" />
              Stations
            </Button>
          </form>
        </Typography>
        <Typography component="div">
          <Button className="button-2" onClick={() => navigate("/add-product")}>
            + Add Station
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ListTop;
