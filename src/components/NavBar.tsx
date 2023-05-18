import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Dehaze } from "@mui/icons-material";
import { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div">
            <IconButton
              id="programs"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                setAnchorEl(e.currentTarget)
              }
              aria-controls={openMenu ? "programs-menu" : undefined}
              aria-haspopup={true}
              arira-aria-expanded={openMenu ? "true" : undefined}
            >
              <Dehaze />
            </IconButton>
            <Menu
              id="programs-menu"
              anchorEl={anchorEl}
              open={openMenu}
              MenuListProps={{ "aria-labelledby": "programs-menu" }}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Potcats</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Some else</MenuItem>
            </Menu>
            Programs
          </Typography>
          <Typography component="div">
            <div className="flex items-center">
              <div>
                <p
                  className="text-end text-sm font-medium"
                  style={{ color: "#004744" }}
                >
                  Sam Rabera
                </p>
                <p className="text-end text-sm text-slate-400 m-0">
                  Oraganisation Name
                </p>
              </div>
              <Avatar></Avatar>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
