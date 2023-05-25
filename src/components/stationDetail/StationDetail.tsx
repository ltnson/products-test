import { Typography, Toolbar, Button, CardMedia, Box } from '@mui/material';
import { Product, VoidFnt } from '../../models/types';

const StationDetail = ({
  onSetHidden,
  onSetEdit,
  viewProd,
}: {
  onSetHidden: VoidFnt;
  onSetEdit: VoidFnt;
  viewProd: Product;
}) => {
  return (
    <div
      className="w-full h-full z-20 top-0 left-0 fixed flex justify-end 
                md:justify-end max-[420px]:justify-center"
      style={{ background: 'rgba(0,0,0,0.4)' }}
    >
      <div className="h-full overflow-auto  bg-white w-96 md:h-auto  max-[420px]:w-full">
        <Box className="block bg-white rounded-md p-10 max-[400px]:p-6">
          <Toolbar style={{ padding: '0' }}>
            <Typography
              component="div"
              sx={{ fontSize: '20px', fontWeight: '500' }}
            >
              Station Detail
            </Typography>
            <Typography
              component="div"
              sx={{
                '@media (max-width: 420px)': {
                  display: 'flex',
                  justifyContent: 'flex-end',
                },
              }}
            >
              <Button
                className="button-1"
                sx={{ marginRight: '16px' }}
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
            sx={{ borderRadius: '10px' }}
            component="img"
            height="140"
            src={viewProd.images[0]}
          />

          <div className="flex flex-col gap-2 mt-4">
            <Typography variant="h6" sx={{ color: 'black' }}>
              {viewProd.title}
            </Typography>
            <Typography>Last update 24/07/2022 11:35:37</Typography>
            <Typography>Last ET update 24/07/2022 11:35:37</Typography>
          </div>
          <div className="flex gap-2 py-6 border-b border-zinc-400 max-[420px]:gap-1">
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
              <p className="text-xs">Autoswitch</p>
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
      </div>
    </div>
  );
};

export default StationDetail;
