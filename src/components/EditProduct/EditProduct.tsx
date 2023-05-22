import { useEffect } from "react";

import { Product, FormData, VoidFnt } from "../../types/types";

import { useQuery, useMutation } from "react-query";
import typeApi from "../../APIs/typeApi";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import { Button, TextareaAutosize, Toolbar, Typography } from "@mui/material";

const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(9, "Title is too short"),

  description: yup
    .string()
    .required("Description is required")
    .min(20, "Description is too short"),
});

const EditProduct = ({
  id,
  onSetHidden,
}: {
  id: string;
  onSetHidden: VoidFnt;
}) => {
  const product = useQuery({
    queryKey: ["product", id],
    queryFn: () => typeApi.getByID(id),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),

    mode: "onBlur",
  });

  const { data, error, mutate } = useMutation((data: Product) =>
    typeApi.updateByID(id, data)
  );

  const onSubmit = (formData: FormData) => {
    if (product.data) {
      product.data.title = formData.title;
      product.data.description = formData.description;
      return mutate(product.data);
    }
  };

  useEffect(() => {
    product;
    if (data) {
      toast.success("updated product");
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
      className="w-full h-screen z-20 top-0 left-0 fixed flex justify-end"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <form className="h-full overflow-auto  bg-white w-2/6">
        <Toolbar>
          <Typography
            component="div"
            sx={{ fontSize: "18px", fontWeight: "500" }}
          >
            Edit Station
          </Typography>
          <Typography component="div">
            <Button
              className="button-1"
              sx={{ marginRight: "16px" }}
              onClick={() => onSetHidden()}
            >
              Cancel
            </Button>
            <Button
              className="button-2"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </Typography>
        </Toolbar>
        {product.data && (
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
              sx={{ fontWeight: "bold" }}
            >
              Title
            </Typography>
            <TextareaAutosize
              minRows={1}
              defaultValue={product.data.title}
              className="w-full bg-zinc-200 p-2 mb-8 rounded-b-md"
              {...register("title")}
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              className="bg-zinc-200 p-2 rounded-t-md"
            >
              Description
            </Typography>
            <TextareaAutosize
              minRows={4}
              defaultValue={product.data.description}
              className="w-full bg-zinc-200 p-2 mb-8 rounded-b-md"
              {...register("description")}
            />
          </div>
        )}
      </form>
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

export default EditProduct;
