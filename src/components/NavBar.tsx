import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Dehaze } from '@mui/icons-material';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleGoProducts = () => {
    setAnchorEl(null);
    navigate('/');
  };

  return (
    <div className="h-16 max-[420px]:my-6 max-[420px]:h-auto bg-white">
      <AppBar position="static" color="transparent">
        <Toolbar
          sx={{
            '@media (max-width: 420px)': {
              padding: '0 ',
              paddingBottom: '16px',
            },
          }}
        >
          <Typography variant="h6" component="div">
            <IconButton
              sx={{ borderRadius: '8px', width: '40px', height: '40px' }}
              id="programs"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                setAnchorEl(e.currentTarget)
              }
              aria-controls={openMenu ? 'programs-menu' : undefined}
              aria-haspopup={true}
              arira-aria-expanded={openMenu ? 'true' : undefined}
            >
              <Dehaze />
            </IconButton>
            <Menu
              id="programs-menu"
              anchorEl={anchorEl}
              open={openMenu}
              MenuListProps={{ 'aria-labelledby': 'programs-menu' }}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={handleGoProducts}>Products</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Potcats</MenuItem>
            </Menu>
            Programs
          </Typography>
          <Typography component="div">
            <div className="flex items-center ">
              <div>
                <p
                  className="text-end text-sm font-semibold"
                  style={{ color: '#004744' }}
                >
                  Sam Rabera
                </p>
                <p className="text-end text-sm text-slate-500 m-0">
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
