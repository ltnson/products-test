import { useState } from "react";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import glass from "../../assets/glass.svg";
import AddProduct from "../addProduct/AddProduct";

const ListTop = ({ onSearch }: { onSearch: any }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [hideAdd, setHideAdd] = useState<Boolean>(false);
  const onSubmitSearch = () => {
    if (searchKey) {
      onSearch(searchKey);
    }
  };
  const handleSetAddHidden = () => {
    setHideAdd(!hideAdd);
  };

  return (
    <>
      {hideAdd && <AddProduct onSetHidden={handleSetAddHidden} />}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography component="div">
            <div>
              <TextField
                placeholder="Search Programs"
                size="small"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <Button className="button-1" onClick={onSubmitSearch}>
                <img src={glass} className="w-4 h-4 mr-4" alt="React logo" />
                Stations
              </Button>
            </div>
          </Typography>
          <Typography component="div">
            <Button className="button-2" onClick={() => handleSetAddHidden()}>
              + Add Station
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ListTop;
