import { Products } from "../../types/types";

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
import ItemProduct from "./ItemProduct";
import { useState } from "react";

const ListBody = ({ items }: { items: Products[] }) => {
  const [onlyDelUI, setOnlyDelUI] = useState<Boolean>(false);
  const handleSetOnly = () => {
    setOnlyDelUI(!onlyDelUI);
  };
  return (
    <Box sx={{ width: "97%" }}>
      <TableContainer
        component={Paper}
        sx={{ margin: "0 20px", marginRight: "20px", paddingBottom: "230px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>State</TableCell>
              <TableCell sx={{ width: "160px" }}>Number Of Stations</TableCell>
              <TableCell>Enable</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: Products, index) => (
              <ItemProduct
                key={index}
                item={item}
                onlyDelUI={onlyDelUI}
                onSetOnly={handleSetOnly}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListBody;
