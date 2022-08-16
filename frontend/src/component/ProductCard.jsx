import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delete_product } from "../redux/actions/ProductAction";
const ProductCard = ({ p, i }) => {
  const dispatch = useDispatch();
  const { productSuccessMessage } = useSelector((state) => state.Product);


  

  useEffect(() => {
    if (productSuccessMessage) {
      window.location.reload()
      toast.success(productSuccessMessage);
      dispatch({ type: "PRODUCT_ADD_SUCCESS_CLEAR" });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSuccessMessage]);

  
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="card-container" key={i}>
        <h1>{p.productName}</h1>
        <p>
          {p.productDetails.slice(0, 150)}....{" "}
          <Link style={{ color: "#0000F1" }} to={`/view/${p._id}`}>
            Visit full product
          </Link>{" "}
        </p>
        <div className="flex">
          <h3>$ {p.productPrice}</h3>
          <h3>{p.productSku}</h3>
        </div>
        <div className="flex-2">
          <Link to={`/edit/${p._id}`}>
          <FaEdit className="edit" />
          </Link>
          <FaTrash
            onClick={() => dispatch(delete_product(p._id))}
            className="delete"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
