import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { add_product } from "../redux/actions/ProductAction";

const ProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  productDetails: Yup.string()
    .min(2, "Too Short!")
    .max(570, "Too Long!")
    .required("Required"),
  productSku: Yup.string()
    .min(5, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  productPrice: Yup.number()
  .min(0 , "Must be something")
  .required("Required")

});







export const FormContainer = () => {
  const dispatch = useDispatch();
  const { loader, productSuccessMessage , productError  } = useSelector( (state) => state.Product);
  


 useEffect(() => {
  if(productError && productError.error){
      toast.error(productError.error)
      dispatch({type: "PRODUCT_ADD_ERROR_CLEAR"})
  }
  if(productSuccessMessage){
    window.location.reload()
    toast.success(productSuccessMessage);
    dispatch({type: "PRODUCT_ADD_SUCCESS_CLEAR"})
   
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [productError , productSuccessMessage]);

 return (
  <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
  
  <Formik
    initialValues={{
      productName: "",
      productDetails: "",
      productSku: "",
      productPrice: 0,
    }}
    validationSchema={ProductSchema}
    onSubmit={(values) => {
    
      dispatch(add_product(values))

    }}
  >
    {({ errors, touched }) => (
      <div className="form-area">
        <Form>
          <h4 style={{color: "#fff"}}>Product form</h4>
          <div className="input">
            <Field name="productName" placeholder="product name" />
            {errors.productName && touched.productName ? (
              <div className="error">{errors.productName}</div>
            ) : null}
            
          </div>

          
          <div className="input">
            <Field name="productDetails"placeholder="product  description" />
            {errors.productDetails && touched.productDetails ? (
              <div className="error">{errors.productDetails}</div>
            ) : null}
            
          </div>

          <div className="input">
            <Field name="productSku"  placeholder="SKU"/>
            {errors.productSku && touched.productSku ? (
              <div className="error">{errors.productSku}</div>
            ) : null}
          
          </div>

          <div className="input">
            <Field placeholder="price" name="productPrice" type="Number" />
            {errors.productPrice && touched.productPrice ? (
              <div className="error">{errors.productPrice}</div>
            ) : null}
            
          </div>




          <button className="submit" type="submit">{ loader ? "Loading" : "Submit" } </button>
        </Form>
      </div>
    )}
  </Formik>
</div>
 )
}
