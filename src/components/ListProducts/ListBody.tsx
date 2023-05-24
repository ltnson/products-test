import { Products } from '../../types/types';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import ItemProduct from './ItemProduct';

const ListBody = ({ items }: { items: Products[] }) => {
  return (
    <div className="flex-none max-[400px]:w-full px-6 max-[400px]:px-0">
      <TableContainer component={Paper} sx={{ margin: '0' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>State</TableCell>
              <TableCell sx={{ width: '160px' }}>Number Of Stations</TableCell>
              <TableCell>Enable</TableCell>
              <TableCell>Actions</TableCell>
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
