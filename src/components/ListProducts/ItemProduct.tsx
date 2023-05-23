import { useState } from 'react';
import { VoidFnt } from '../../types/types';

import { TableRow, TableCell, Button, Stack } from '@mui/material';
import DeleteUi from './DeleteUi';
import EditProduct from '../EditProduct/EditProduct';
import StationDetail from '../stationDetail/StationDetail';
import Switch from '../../assets/Switch';

const ItemProduct = ({ item }: { item: any }) => {
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
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.rating}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>
        <Switch />
      </TableCell>
      <TableCell>
        <Stack direction="row">
          <Button sx={{ color: '#004744', paddingLeft: '0' }} onClick={() => handleSetViewHidden()}>
            VIEW
          </Button>
          <Button sx={{ color: '#004744', paddingLeft: '0' }} onClick={() => handleSetEditHidden()}>
            EDIT
          </Button>
          <Button sx={{ color: '#7C7B7B', paddingLeft: '0' }} onClick={() => handleSetHidden()}>
            DELETE
          </Button>
        </Stack>
        {hidden && <DeleteUi id={item.id as number} onSetHidden={handleSetHidden} />}
        {hideEdit && <EditProduct editProd={item} onSetHidden={handleSetEditHidden} />}
        {hideView && <StationDetail viewProd={item} onSetHidden={handleSetViewHidden} onSetEdit={handleGoEdit} />}
      </TableCell>
    </TableRow>
  );
};

export default ItemProduct;
