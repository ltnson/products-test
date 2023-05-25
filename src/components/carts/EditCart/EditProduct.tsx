import {useEffect} from 'react';

import {Product, FormData, VoidFnt} from '../../../models/types';

import {useMutation} from 'react-query';
import typeApi from '../../../api/typeApi';
import axios from 'axios';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';

import {Button, TextareaAutosize, Toolbar, Typography} from '@mui/material';

const schema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(9, 'Title is too short'),

  description: yup
    .string()
    .required('Description is required')
    .min(20, 'Description is too short'),
});

const EditProduct = ({
  editProd,
  onSetHidden,
}: {
  editProd: Product;
  onSetHidden: VoidFnt;
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editProd.title,
      description: editProd.description,
    },
    mode: 'onBlur',
  });

  const {data, error, mutate} = useMutation((data: Product) =>
    typeApi.updateByID(editProd.id, data),
  );

  const onSubmit = (formData: FormData) => {
    editProd.title = formData.title;
    editProd.description = formData.description;
    return mutate(editProd);
  };

  useEffect(() => {
    if (data) {
      toast.success('updated product');
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
      className="w-full h-full z-20 top-0 left-0 fixed flex justify-end 
                  md:justify-end max-[420px]:justify-center"
      style={{background: 'rgba(0,0,0,0.4)'}}>
      <form
        className="h-full overflow-auto  bg-white w-96 md:h-auto
                       md:max-lg:w-2/3  max-[420px]:w-full">
        <Toolbar>
          <Typography
            component="div"
            sx={{fontSize: '18px', fontWeight: '500'}}>
            Edit Station
          </Typography>
          <Typography component="div">
            <Button
              className="button-1"
              sx={{marginRight: '16px'}}
              onClick={() => onSetHidden()}>
              Cancel
            </Button>
            <Button
              className="button-2"
              type="submit"
              onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </Typography>
        </Toolbar>

        <div className="px-8">
          {errors.description && (
            <p className="block w-full bg-red-50 border border-red-500 p-2 mb-4 text-red-400 rounded-md">
              {errors.description?.message}
            </p>
          )}
          {errors.title && (
            <p className="block w-full bg-red-50 border border-red-500 p-2 mb-4 text-red-400 rounded-md">
              {errors.title?.message}
            </p>
          )}
          <Typography
            className="bg-zinc-200 p-2 rounded-t-md "
            sx={{fontWeight: 'bold'}}>
            Title
          </Typography>
          <TextareaAutosize
            minRows={1}
            className="w-full bg-zinc-200 p-2 mb-8 rounded-b-md"
            {...register('title')}
          />
          <Typography
            sx={{fontWeight: 'bold'}}
            className="bg-zinc-200 p-2 rounded-t-md">
            Description
          </Typography>
          <TextareaAutosize
            minRows={4}
            className="w-full bg-zinc-200 p-2 mb-8 rounded-b-md"
            {...register('description')}
          />
        </div>
      </form>
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

export default EditProduct;
