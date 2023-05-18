import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";

import { Products } from "../../types/types";

import ItemProduct from "./ItemProduct";

const ListBody = ({ items }: { items: Products[] }) => {
  return (
    <Box sx={{ width: "97%" }}>
      <TableContainer
        component={Paper}
        sx={{ margin: "0 20px", marginRight: "200px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Number Of Stations</TableCell>
              <TableCell>Enable</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <ItemProduct key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListBody;
