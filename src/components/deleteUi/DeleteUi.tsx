import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import typeApi from '../../api/typeApi';
import { useMutation } from 'react-query';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { VoidFnt } from '../../models/types';

const DeleteUi = ({
  id,
  onSetHidden,
}: {
  id: number;
  onSetHidden: VoidFnt;
}) => {
  const { data, error, mutate } = useMutation((id: number) =>
    typeApi.deleteByID(id),
  );
  const handleDelete = () => {
    return mutate(id);
  };
  useEffect(() => {
    if (data) {
      toast.success('deleted product');
      onSetHidden();
    }
    if (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data.message);
      } else {
        console.log(error);
      }
    }
  }, [data, error]);

  return (
    <div
      className="w-full h-screen z-20 top-0 left-0 fixed flex justify-center items-center"
      style={{ background: 'rgba(0,0,0,0.4)' }}
    >
      <div className="w-96 h-60 bg-white z-20 rounded-md top-10 right-10 max-[420px]:w-full">
        <div className="grid grid-rows-3 px-10">
          <h4 className="text-2xl font-simebold mt-10">Delete Station?</h4>
          <p className="mt-2">
            This action is not reversible, all child-organisation data will be
            deleted.
          </p>
          <div className="flex justify-end gap-8 mt-10">
            <Button className="button-1" onClick={() => onSetHidden()}>
              Cancel
            </Button>
            <Button className="button-2" onClick={handleDelete}>
              Confrim
            </Button>
          </div>
        </div>
      </div>
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
  );
};

export default DeleteUi;
