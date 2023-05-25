import {useState} from 'react';
import {VoidFnt} from '../../../models/types';

import {TableRow, TableCell, Button} from '@mui/material';
import DeleteUi from '../../carts/deleteCart/DeleteUi';
import EditProduct from '../../carts/EditCart/EditProduct';
import StationDetail from '../../carts/viewCart/StationDetail';
import Switch from '../../../theme/Switch';

const ItemProduct = ({item}: {item: any}) => {
  const [hidden, setHidden] = useState<Boolean>(false);
  const [hideView, setHideView] = useState<Boolean>(false);
  const [hideEdit, setHideEdit] = useState<Boolean>(false);

  const handleSetHidden: VoidFnt = () => {
    setHidden(!hidden);
  };
  const handleSetEditHidden: VoidFnt = () => {
    setHideEdit(!hideEdit);
  };
  const handleSetViewHidden: VoidFnt = () => {
    setHideView(!hideView);
  };
  const handleGoEdit: VoidFnt = () => {
    setHideView(!hideView);
    setHideEdit(!hideEdit);
  };

  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell
        sx={{
          '@media (max-width: 420px)': {
            display: 'none',
          },
        }}>
        {item.description}
      </TableCell>
      <TableCell>{item.rating}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>
        <Switch />
      </TableCell>
      <TableCell>
        <div className="flex md:max-lg:flex-col max-[765px]:flex-col">
          <Button
            sx={{color: '#004744', paddingLeft: '0'}}
            onClick={() => handleSetViewHidden()}>
            VIEW
          </Button>
          <Button
            sx={{color: '#004744', paddingLeft: '0'}}
            onClick={() => handleSetEditHidden()}>
            EDIT
          </Button>
          <Button
            sx={{color: '#7C7B7B', paddingLeft: '0'}}
            onClick={() => handleSetHidden()}>
            DELETE
          </Button>
        </div>
        {hidden && (
          <DeleteUi id={item.id as number} onSetHidden={handleSetHidden} />
        )}
        {hideEdit && (
          <EditProduct editProd={item} onSetHidden={handleSetEditHidden} />
        )}
        {hideView && (
          <StationDetail
            viewProd={item}
            onSetHidden={handleSetViewHidden}
            onSetEdit={handleGoEdit}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default ItemProduct;
