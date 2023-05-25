import {useState} from 'react';
import {Button, TextField, Toolbar, Typography} from '@mui/material';
import AddProduct from '../addProduct/AddProduct';
import IconGlass from '../../theme/IconGlass';

const ListTop = ({onSearch}: {onSearch: any}) => {
  const [hideAdd, setHideAdd] = useState<Boolean>(false);

  const handleSetAddHidden = () => {
    setHideAdd(!hideAdd);
  };

  return (
    <div className="flex-none">
      {hideAdd && <AddProduct onSetHidden={handleSetAddHidden} />}

      <Toolbar>
        <Typography component="div">
          <div>
            <TextField
              placeholder="Search Programs"
              size="small"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Button
              className="button-1"
              sx={{
                '@media (max-width: 420px)': {
                  display: 'none',
                },
              }}>
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
