import { Products } from '../../types/types';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from '@mui/material';
import ItemProduct from './ItemProduct';

const ListBody = ({ items }: { items: Products[] }) => {
  return (
    <div className="flex-none max-[400px]:w-full ">
      <Box
        sx={{
          width: '97%',
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>State</TableCell>
                <TableCell sx={{ width: '160px' }}>
                  Number Of Stations
                </TableCell>
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
      </Box>
    </div>
  );
};

export default ListBody;
