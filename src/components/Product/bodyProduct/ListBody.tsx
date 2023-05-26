import {Products} from '../../../models/types';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import ItemProduct from '../item/ItemProduct';

const ListBody = ({items}: {items: Products[]}) => {
  return (
    <div className="flex-none max-[420px]:text-xs max-[420px]:w-full px-6 max-[420px]:px-4 block  overflow-auto max-h-[78%]">
      <TableContainer
        component={Paper}
        sx={{
          margin: '0',
        }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="text-center">ID</p>
              </TableCell>
              <TableCell>
                <p className="text-center">Name</p>
              </TableCell>
              <TableCell sx={{display: 'block', width: '350px'}}>
                <p className="text-center">Description</p>
              </TableCell>
              <TableCell>
                <p className="text-center">State</p>
              </TableCell>
              <TableCell>
                <p className="text-center">Number Of Stations</p>
              </TableCell>
              <TableCell>
                <p className="text-center">Enable</p>
              </TableCell>
              <TableCell>
                <p className="text-center">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: Products, index) => (
              <ItemProduct key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListBody;
