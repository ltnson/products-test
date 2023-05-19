import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import typeApi from "../../APIs/typeApi";
import { useMutation } from "react-query";
import { Button } from "@mui/material";

const DeleteUi = ({ id, onSetHidden }: { id: number; onSetHidden: any }) => {
  const deleteProduct = useMutation((id: number) => typeApi.deleteByID(id));
  const handleDelete = () => {
    deleteProduct
      .mutateAsync(id)
      .then(() => {
        if (deleteProduct.error) {
          if (axios.isAxiosError(deleteProduct.error)) {
            toast.error(deleteProduct.error?.response?.data.errors.message[0]);
          } else {
            console.log(deleteProduct.error);
          }
        }
      })
      .then(() => {
        onSetHidden(false);
      });
  };
  return (
    <>
      <div className="absolute w-96 h-64 bg-white z-20 rounded-md top-10 right-10 shadow-2xl">
        <div className="grid grid-rows-3 px-10">
          <h4 className="text-2xl font-simebold mt-10">Delete Station?</h4>
          <p className="mt-2">
            This action is not reversible, all child-organisation data will be
            deleted.
          </p>
          <div className="flex justify-end gap-8 mt-10">
            <Button className="button-1" onClick={() => onSetHidden(false)}>
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
          className: "",
          style: {
            border: "0.2px solid #7367F0",
            padding: "8px",
            color: "#7367F0",
          },
        }}
      />
    </>
  );
};

export default DeleteUi;
