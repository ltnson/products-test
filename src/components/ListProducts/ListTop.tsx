import { useState } from 'react';
import { Button, TextField, Toolbar, Typography } from '@mui/material';
import AddProduct from '../addProduct/AddProduct';
import IconGlass from '../../assets/IconGlass';

const ListTop = ({ onSearch }: { onSearch: any }) => {
  const [hideAdd, setHideAdd] = useState<Boolean>(false);

  const handleSetAddHidden = () => {
    setHideAdd(!hideAdd);
  };

  return (
    <div className="flex-none">
      {hideAdd && <AddProduct onSetHidden={handleSetAddHidden} />}

      <Toolbar
        sx={{
          '@media (max-width: 400px)': {
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '10px',
            margin: '10px 0',
            alignItems: 'flex-start',
          },
        }}
      >
        <Typography component="div">
          <div>
            <TextField placeholder="Search Programs" size="small" onChange={(e) => onSearch(e.target.value)} />
            <Button className="button-1">
              <IconGlass />
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
    </div>
  );
};

export default ListTop;
