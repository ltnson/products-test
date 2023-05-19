import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "react-query";
import typeApi from "../../APIs/typeApi";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { Typography, Toolbar, Button, CardMedia, Box } from "@mui/material";

const StationDetail = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => typeApi.getByID(id),

    onError: (error) => {
      if (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.errors.message[0]);
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <div className="bg-zinc-200 px-96 py-10 text-zinc-600 leading-8">
      <Box className="block w-[44rem] bg-white rounded-md p-10 ">
        <Toolbar>
          <Typography
            component="div"
            sx={{ fontSize: "20px", fontWeight: "500" }}
          >
            Station Detail
          </Typography>
          <Typography component="div">
            <Button
              className="button-1"
              sx={{ marginRight: "16px" }}
              onClick={() => navigate("/")}
            >
              Close
            </Button>
            <Button
              className="button-2"
              onClick={() => navigate(`/edit-product/${id}`)}
            >
              Edit
            </Button>
          </Typography>
        </Toolbar>
        <CardMedia
          sx={{ borderRadius: "10px" }}
          component="img"
          height="140"
          src={data && data?.images[0]}
        />

        <div className="flex flex-col gap-2 mt-4">
          <Typography variant="h6" sx={{ color: "black" }}>
            {data && data?.title}
          </Typography>
          <Typography>Last update 24/07/2022 11:35:37</Typography>
          <Typography>Last ET update 24/07/2022 11:35:37</Typography>
        </div>
        <div className="flex gap-4 py-6 border-b border-zinc-400">
          <Button className="button-1" fullWidth>
            On
          </Button>
          <Button className="button-3" disabled fullWidth>
            Off
          </Button>
          <div className="border border-zinc-400 h-8"></div>
          <Button className="button-4" fullWidth>
            Ping
          </Button>
          <Button className="button-1" fullWidth>
            Autoswitch
          </Button>
        </div>
        <div className="grid grid-cols-2 my-6 pb-4 border-b border-zinc-400">
          <div>
            <p> Address</p>
            <p>Index</p>
            <p>Priority</p>
            <p>Pipe</p>
            <p>Plant</p>
            <p>Soil</p>
          </div>
          <div className="flex flex-col items-end text-teal-800">
            <span>678088724</span>
            <span>2</span>
            <span>1</span>
            <span>SM2</span>
            <span>Tree</span>
            <span>Soilmane</span>
          </div>
        </div>
        <div className="grid grid-cols-2 my-6 pb-4 border-b border-zinc-400">
          <div>
            <p>Water Required (mm)</p>
            <p>Surface Accumulation (mm)</p>
            <p>Precipitation Rate (mm/h)</p>
            <p>Expected Flow (l/m)</p>
            <p>Landscape Factor(%)</p>
          </div>
          <div className="flex flex-col items-end ">
            <span>0.00</span>
            <span>0.00</span>
            <span>6.67</span>
            <span>45.0</span>
            <span>12.00</span>
          </div>
        </div>
        <div className="grid grid-cols-2 my-6 ">
          <div>
            <p>Error Code</p>
          </div>
          <div className="flex flex-col items-end ">
            <p>0</p>
          </div>
        </div>
      </Box>
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
    </div>
  );
};

export default StationDetail;
