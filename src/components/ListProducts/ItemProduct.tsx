import { TableRow, TableCell, Button, Stack, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemProduct = ({ item }: { item: any }) => {
  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.stoct}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>
        <Switch />
      </TableCell>
      <TableCell>
        <Stack direction="row">
          <Button
            sx={{ color: "#004744", paddingLeft: "0" }}
            onClick={() => navigate(`/station-detail/${item.id}`)}
          >
            VIEW
          </Button>
          <Button sx={{ color: "#004744", paddingLeft: "0" }}>EDIT</Button>
          <Button sx={{ color: "#7C7B7B", paddingLeft: "0" }}>DELETE</Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default ItemProduct;
