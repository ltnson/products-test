import { useQuery } from "react-query";
import typeApi from "../../APIs/typeApi";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { Typography, Toolbar, Button, CardMedia, Box } from "@mui/material";
import { VoidFnt } from "../../types/types";

const StationDetail = ({
  onSetHidden,
  onSetEdit,
  id,
}: {
  onSetHidden: VoidFnt;
  onSetEdit: VoidFnt;
  id: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => typeApi.getByID(id),
    onError: (error) => {
      if (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.errors.message);
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <div
      className="w-full h-screen  z-20 top-0 left-0 fixed flex justify-end"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div className="h-full overflow-auto bg-white w-2/6 text-zinc-600 overscroll-auto hover:overscroll-contain ">
        {isLoading && (
          <div className="w-full h-96 flex justify-center items-center">
            <Typography variant="h3">L o a d i n g . . . .</Typography>
          </div>
        )}
        <Box className="block bg-white rounded-md p-10">
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
                onClick={() => onSetHidden()}
              >
                Close
              </Button>
              <Button className="button-2" onClick={() => onSetEdit()}>
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
    </div>
  );
};

export default StationDetail;
