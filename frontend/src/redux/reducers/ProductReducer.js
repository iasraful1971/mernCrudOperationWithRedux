const initState = {
  loader: false,
  productError: "",
  productSuccessMessage: "",
  singleProduct: "",
  allProduct: [],
  perPage: 0,
  productCounts: 0,
  editProduct: "",
  editRequest: false,
 
};

export const ProductReducer = (state = initState, action) => {
  const { payload, type } = action;

  if (type === "SET_LOADER") {
    return {
      ...state,
      loader: true,
    };
  }
  if (type === "PRODUCT_ADD_SUCCESS") {
    return {
      ...state,
      loader: false,
      productError: "",
      productSuccessMessage: payload.successMessage,
    };
  }
  if (type === "PRODUCT_ADD_SUCCESS_CLEAR") {
    return {
      ...state,
      productSuccessMessage: "",
    };
  }
  if (type === "PRODUCT_ADD_ERROR_CLEAR") {
    return {
      ...state,
      productError: "",
    };
  }
  if (type === "PRODUCT_ADD_FAIL" || type === "PRODUCT_UPDATE_FAIL") {
    return {
      ...state,
      loader: false,
      productError: payload.error,
      productSuccessMessage: "",
    };
  }
  if (type === "PRODUCT_GET_SUCCESS") {
    return {
      ...state,
      loader: false,
      allProduct: payload.allProduct,
      productCounts: payload.productsCounts,
      perPage: payload.perPage,
    };
  }
  
  if (type === "SINGLE_PRODUCT_GET_SUCCESS") {
    return {
      ...state,
      loader: false,
      singleProduct: payload.singleProduct,
    
    };
  }
  if (type === "SINGLE_PRODUCT_DELETE_SUCCESS") {
    return {
      ...state,
      loader: false,
      productError: "",
      productSuccessMessage: payload.deleteProduct
    
    };
  }
  if (type === "EDIT_PRODUCT_GET_SUCCESS") {
    return {
      ...state,
      editProduct: payload.editProduct
    };
  }
  if (type === "EDIT_REQUEST_SET") {
    return {
      ...state,
      editRequest: true,
    };
  }
  if (type === "EDIT-REQUEST_CLEAR") {
    return {
      ...state,
      editRequest: false,
    };
  }
  if (type === "PRODUCT_UPDATE_SUCCESS") {
    return {
      ...state,
      loader: false,
      productError: "",
      productSuccessMessage: payload.successMessage
    };
  }



  return state;
};
