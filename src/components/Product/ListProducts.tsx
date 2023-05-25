import {useState} from 'react';

import {useQuery} from 'react-query';
import typeApi from '../../api/typeApi';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

import {
  Button,
  ButtonGroup,
  Typography,
  MenuItem,
  Select,
  CircularProgress,
} from '@mui/material';

import ListTop from './topProduct/ListTop';
import ListBody from './bodyProduct/ListBody';

const ListProducts = () => {
  const [limit, setLimit] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);
  const [searchKey, setSearchKey] = useState<string>('');
  const buttons = [1, 2, 3, 4, 5, 6];

  const products = useQuery({
    queryKey: ['products', limit, skip],
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
    if (value === '') {
      setSearchKey('no');
    } else {
      setSearchKey('q=' + value);
    }
  };

  const search = useQuery({
    queryKey: ['search', searchKey],
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
      <div className="h-auto text-slate-500 text-sm w-full px-4">
        <ListTop onSearch={handleSearch} />
        {search.isLoading && (
          <div className="w-full h-96 flex justify-center items-center">
            <CircularProgress
              style={{
                width: '120px',
                height: '120px',
              }}
            />
          </div>
        )}
        {search.data && <ListBody items={search.data?.products} />}
      </div>
    );
  } else if (searchKey === 'no' || products) {
    return (
      <div className="min-h-[90%] text-slate-700 text-sm flex flex-col w-full px-4 max-[420px]:px-0 md:p-1">
        <ListTop onSearch={handleSearch} />
        {products.isLoading && (
          <div className="w-full h-96 flex justify-center items-center">
            <CircularProgress
              style={{
                width: '120px',
                height: '120px',
              }}
            />
          </div>
        )}
        {products.data && <ListBody items={products.data?.products} />}
        {products.data && (
          <div
            className="grow flex justify-between mx-6 h-full items-end py-8           
           max-[900px]:flex-col 
          max-[900px]:items-center max-[900px]:gap-4 max-[900px]:justify-end">
            <Typography>
              Showing {skip > 0 ? skip / limit + 1 : 1} to{' '}
              {Math.ceil(products.data?.total / products.data?.limit)} of{' '}
              {products.data?.total} entries
            </Typography>
            <Typography
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
              }}>
              <Select
                value={limit}
                sx={{
                  width: '130px',
                  borderRadius: '0',
                  border: '1px solid black',
                }}
                onChange={(e) => setLimit(e.target.value as number)}>
                <MenuItem value={10}>10 per page</MenuItem>
                <MenuItem value={5}>5 per page</MenuItem>
              </Select>

              <ButtonGroup color="inherit" size="small">
                <Button
                  onClick={() =>
                    handleGoPageNumb(skip > 0 ? skip - limit : skip)
                  }
                  sx={{
                    borderRadius: '0',
                  }}>
                  Previous
                </Button>
                <Button
                  disabled
                  sx={{
                    display: 'none',
                    '@media (max-width: 420px)': {
                      display: 'block',
                      backgroundColor: '#004744',
                      border: '1px solid',
                    },
                  }}>
                  <p className="text-white">
                    {skip > 0 ? skip / limit + 1 : 1}
                  </p>
                </Button>
                {buttons.map((i) => (
                  <Button
                    key={i}
                    onClick={() => handleGoPageNumb(limit * i - limit)}
                    className={skip === i * limit - limit ? 'button-5' : 'w-4'}
                    sx={{
                      '@media (max-width: 420px)': {
                        display: 'none',
                      },
                    }}>
                    {i}
                  </Button>
                ))}
                <Button
                  onClick={() =>
                    handleGoPageNumb(
                      skip < products.data?.total ? skip + limit : skip,
                    )
                  }
                  sx={{
                    borderRadius: '0',
                  }}>
                  Next
                </Button>
              </ButtonGroup>
            </Typography>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                className: '',
                style: {
                  border: '0.2px solid #7367F0',
                  padding: '8px',
                  color: '#7367F0',
                },
              }}
            />
          </div>
        )}
      </div>
    );
  }
  return <hr></hr>;
};

export default ListProducts;
