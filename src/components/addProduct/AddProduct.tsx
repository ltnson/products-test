import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormData } from "../../types/types";

import { Button, TextareaAutosize, Toolbar, Typography } from "@mui/material";

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

  const onSubmit = (formData: FormData) => console.log(formData);

  return (
    <div className="bg-zinc-200 px-96 py-10 ">
      <div className=" bg-white h-screen rounded-md p-10 h-full">
        <form>
          <Toolbar>
            <Typography component="div">Add Station</Typography>
            <Typography component="div">
              <Button className="button-1" sx={{ marginRight: "16px" }}>
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
    </div>
  );
};

export default AddProduct;
