import { useNavigate } from "react-router-dom";

import { TableRow, TableCell, Button, Stack, Switch } from "@mui/material";
import DeleteUi from "./DeleteUi";
import { useState } from "react";

const ItemProduct = ({
  item,
  onlyDelUI,
  onSetOnly,
}: {
  item: any;
  onlyDelUI: Boolean;
  onSetOnly: any;
}) => {
  const navigate = useNavigate();

  const [hidden, setHidden] = useState<Boolean>(false);

  const handleSetHidden = (value: Boolean) => {
    if (onlyDelUI && value === true) {
      return;
    }
    onSetOnly();
    setHidden(value);
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
      <TableCell className="relative">
        <Stack direction="row">
          <Button
            sx={{ color: "#004744", paddingLeft: "0" }}
            onClick={() => navigate(`/station-detail/${item.id}`)}
          >
            VIEW
          </Button>
          <Button
            sx={{ color: "#004744", paddingLeft: "0" }}
            onClick={() => navigate(`/edit-product/${item.id}`)}
          >
            EDIT
          </Button>
          <Button
            sx={{ color: "#7C7B7B", paddingLeft: "0" }}
            onClick={() => handleSetHidden(!hidden)}
          >
            DELETE
          </Button>
        </Stack>
        {hidden && (
          <DeleteUi id={item.id as number} onSetHidden={handleSetHidden} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default ItemProduct;
