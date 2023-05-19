import { DummyData, FormData } from "../../types/types";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useMutation } from "react-query";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, TextareaAutosize, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import typeApi from "../../APIs/typeApi";

const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title is too short"),

  description: yup
    .string()
    .required("Description is required")
    .min(20, "Description is too short"),
});

const AddProduct = () => {
  const navigate = useNavigate();

  const dummyData: DummyData = {
    title: "",
    description: "",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "...",
    images: ["some string"],
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
    mode: "onBlur",
  });

  const addProduct = useMutation((dummyData: DummyData) =>
    typeApi.addOne(dummyData)
  );

  const onSubmit = (formData: FormData) => {
    dummyData.title = formData.title;
    dummyData.description = formData.description;
    addProduct
      .mutateAsync(dummyData)
      .then(() => {
        if (addProduct.error) {
          if (axios.isAxiosError(addProduct.error)) {
            toast.error(addProduct.error?.response?.data.errors.message[0]);
          } else {
            console.log(addProduct.error);
          }
        }
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="bg-zinc-200 px-96 py-10 ">
      <div className="block w-[44rem] bg-white h-screen rounded-md p-10 h-full">
        <form>
          <Toolbar>
            <Typography
              component="div"
              sx={{ fontSize: "18px", fontWeight: "500" }}
            >
              Add Station
            </Typography>
            <Typography component="div">
              <Button
                className="button-1"
                sx={{ marginRight: "16px" }}
                onClick={() => navigate("/")}
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
          <div className="px-8">
            {errors.description && (
              <p className="block w-full bg-red-50   p-2 mb-4 text-red-400 rounded-md">
                {errors.description?.message}
              </p>
            )}
            {errors.title && (
              <p className="block w-full bg-red-50   p-2 mb-4 text-red-400 rounded-md">
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
              defaultValue="test"
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
              className="w-full bg-zinc-200 p-2 mb-8 rounded-b-md"
              {...register("description")}
            />
          </div>
        </form>
      </div>
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

export default AddProduct;
