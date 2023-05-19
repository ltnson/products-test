import { useNavigate } from "react-router-dom";

import typeApi from "../../APIs/typeApi";

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { TableRow, TableCell, Button, Stack, Switch } from "@mui/material";

const ItemProduct = ({ item }: { item: any }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync, error } = useMutation(() => typeApi.deleteByID(item.id));
  const handleDelete = () => {
    mutateAsync().then(() => {
      if (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.errors.message[0]);
        } else {
          console.log(error);
        }
      }
    });
  };

  const handlePrefetch = (id: string) => {
    queryClient.prefetchQuery(["product", id], {
      queryFn: () => typeApi.getByID(id),
    });
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
        <Stack
          direction="row"
          onMouseEnter={() => handlePrefetch(String(item.id))}
        >
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
            onClick={handleDelete}
          >
            DELETE
          </Button>
        </Stack>
      </TableCell>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "0.2px solid #7367F0",
            padding: "8px",
            color: "#7367F0",
          },
        }}
      />
    </TableRow>
  );
};

export default ItemProduct;
