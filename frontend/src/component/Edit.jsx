import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowCircleLeft, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { delete_product, edit_product, update_product } from "../redux/actions/ProductAction";
const Edit = () => {
  const { id } = useParams();
  const { editRequest, editProduct, productSuccessMessage, loader } =
    useSelector((state) => state.Product);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    productName: "",
    productPrice: 0,
    productSku: "",
    productDetails: "",
  });
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (editRequest) {
      setState({
        productName: editProduct.productName,
        productPrice: editProduct.productPrice,
        productSku: editProduct.productSku,
        productDetails: editProduct.productDetails,
      });
      dispatch({ type: "EDIT-REQUEST_CLEAR" });
    } else {
      dispatch(edit_product(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editProduct, id]);

  useEffect(() => {
    if (productSuccessMessage) {
      toast.success(productSuccessMessage);
      window.location.href="/"
      dispatch({ type: "PRODUCT_ADD_ERROR_CLEAR" });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSuccessMessage]);

 const handleUpdate = (e) => {
  e.preventDefault();
  dispatch(update_product(editProduct._id , state))
 }

  return (
    <>
      <div className="edit-form-area">
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px",
            },
          }}
        />
        <div className="form-box">
          <div className="form-header">
            <div>
              <Link to="/">
                {" "}
                <h5>
                  <FaArrowCircleLeft /> Back{" "}
                </h5>
              </Link>
            </div>
            <div>
              <h2>
                <FaEdit /> Edit Product
              </h2>
            </div>
            <div>
              {" "}
              <h5   onClick={() => dispatch(delete_product(editProduct._id))}>
                <FaTrash style={{ color: "red" }} /> delete
              </h5>
            </div>
          </div>
          <form>
            <input
              placeholder="product name"
              type="text"
              name="productName"
              value={state.productName}
              onChange={handleInput}
            />
            <input
              placeholder="product price"
              type="number"
              name="productPrice"
              value={state.productPrice}
              onChange={handleInput}
            />
            <input
              placeholder="product SKU"
              type="text"
              name="productSku"
              value={state.productSku}
              onChange={handleInput}
            />
            <textarea
              placeholder="Description"
              name="productDetails"
              value={state.productDetails}
              onChange={handleInput}
            ></textarea>

            <div className="btn2">
              {" "}
              <Button
                onClick={handleUpdate}
                className="submit"
                variant="gradient"
                gradient={{ from: "red", to: "megenda" }}
              >
                {loader ? "Loading" : "update product"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
