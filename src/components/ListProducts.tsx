import ListTop from "./ListProducts/ListTop";
import ListBody from "./ListProducts/ListBody";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  MenuItem,
  TextField,
} from "@mui/material";

import { useQuery, useQueryClient } from "react-query";
import typeApi from "../APIs/typeApi";
import { DataProducts } from "../types/types";

const ListProducts = () => {
  const [limit, setLimit] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);
  const [key, setKey] = useState<string>("");
  const buttons = [1, 2, 3, 4, 5, 6];
  const [products, setProducts] = useState<DataProducts>();
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ["search", key],
    queryFn: async () => await typeApi.getSearch(key),
    onSuccess: (data) => {
      setProducts(data);
    },
  });
  console.log(products);

  useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => typeApi.getLimit(limit, skip),
    onSuccess: (data) => {
      setProducts(data);
    },
  });

  const handleSearchKey = (searchKey: string) => {
    setKey(searchKey);
  };

  return (
    <div className="h-screen text-slate-500 text-sm">
      <ListTop onSearch={handleSearchKey} />
      {/* && <Typography variant="h6">Loading....</Typography> */}
      {products && <ListBody items={products?.products} />}
      {products && (
        <Box
          sx={{
            margin: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            Showing {skip > 0 ? skip / limit : 1} to{" "}
            {Math.ceil(products?.limit / 30)} of {products?.total} entries
          </Typography>

          <Typography component="div" sx={{ display: "flex" }}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              select
              fullWidth
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              sx={{ width: "120px", fontSize: "14px", color: "inherit" }}
            >
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={5}>5 per page</MenuItem>
            </TextField>

            <ButtonGroup color="inherit" size="small">
              <Button onClick={() => setSkip(skip > 0 ? skip - limit : skip)}>
                Previous
              </Button>
              {buttons.map((i) => (
                <Button
                  key={i}
                  onClick={() => setSkip(limit * i - limit)}
                  className={skip === i * limit - limit ? "button-1" : ""}
                >
                  {i}
                </Button>
              ))}
              <Button
                onClick={() =>
                  setSkip(skip < products?.total ? skip + limit : skip)
                }
              >
                Next
              </Button>
            </ButtonGroup>
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default ListProducts;
