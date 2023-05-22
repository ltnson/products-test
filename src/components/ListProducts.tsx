import { useState } from "react";

import { useQuery } from "react-query";
import typeApi from "../APIs/typeApi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  MenuItem,
  Select,
} from "@mui/material";

import ListTop from "./ListProducts/ListTop";
import ListBody from "./ListProducts/ListBody";

const ListProducts = () => {
  const [limit, setLimit] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);
  const [searchKey, setSearchKey] = useState<string>("");
  const buttons = [1, 2, 3, 4, 5, 6];

  const products = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => typeApi.getLimit(limit, skip),
    onError: (error) => {
      if (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.message);
        } else {
          console.log(error);
        }
      }
    },
  });

  const handleSearch = (value: string) => {
    setSearchKey("q=" + value);
  };

  const search = useQuery({
    queryKey: ["search", searchKey],
    queryFn: () => typeApi.getSearch(searchKey),
    onError: (error) => {
      if (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.message);
        } else {
          console.log(error);
        }
      }
    },
  });

  const handleGoPageNumb = (value: number) => {
    setSkip(value);
  };

  if (search?.data && search.data.products.length > 0) {
    return (
      <div className="h-screen text-slate-500 text-sm">
        <ListTop onSearch={handleSearch} />
        {search.isLoading && (
          <div className="w-full h-96 flex justify-center items-center">
            <Typography variant="h6">L o a d i n g . . . .</Typography>
          </div>
        )}
        {search.data && <ListBody items={search.data?.products} />}
      </div>
    );
  }

  return (
    <div className="h-screen text-slate-700 text-sm">
      <ListTop onSearch={handleSearch} />
      {products.isLoading && (
        <div className="w-full h-96 flex justify-center items-center">
          <Typography variant="h1">L o a d i n g . . . .</Typography>
        </div>
      )}
      {products.data && <ListBody items={products.data?.products} />}
      {products.data && (
        <Box
          sx={{
            margin: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            Showing {skip > 0 ? skip / limit + 1 : 1} to{" "}
            {Math.ceil(products.data?.limit / 30)} of {products.data?.total}{" "}
            entries
          </Typography>
          <Typography component="div" sx={{ display: "flex" }}>
            <Select
              value={limit}
              sx={{
                width: "130px",
                borderRadius: "0",
                margin: "0 20px",
                border: "1px solid black",
              }}
              onChange={(e) => setLimit(e.target.value as number)}
            >
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={5}>5 per page</MenuItem>
            </Select>

            <ButtonGroup color="inherit" size="small">
              <Button
                onClick={() => handleGoPageNumb(skip > 0 ? skip - limit : skip)}
                sx={{ borderRadius: "0" }}
              >
                Previous
              </Button>
              {buttons.map((i) => (
                <Button
                  key={i}
                  onClick={() => handleGoPageNumb(limit * i - limit)}
                  className={skip === i * limit - limit ? "button-1" : ""}
                >
                  {i}
                </Button>
              ))}
              <Button
                onClick={() =>
                  handleGoPageNumb(
                    skip < products.data?.total ? skip + limit : skip
                  )
                }
                sx={{ borderRadius: "0" }}
              >
                Next
              </Button>
            </ButtonGroup>
          </Typography>
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
        </Box>
      )}
    </div>
  );
};

export default ListProducts;
