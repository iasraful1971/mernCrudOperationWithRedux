import axios from "axios";

// Handle add schedule
export const add_product = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });
  try {
    const response = await axios.post("/rest-api/add-product", data);
    dispatch({
      type: "PRODUCT_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_ADD_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

// gets products
export const get_products = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`/rest-api/get-products?page=${page}`);
    dispatch({
      type: "PRODUCT_GET_SUCCESS",
      payload: {
        allProduct: response.data.getProducts,
        perPage: response.data.perPage,
        productsCounts: response.data.productCounts,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};

// get sinngle view

export const get_product = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/rest-api/single-view/${id}`);

    dispatch({
      type: "SINGLE_PRODUCT_GET_SUCCESS",
      payload: {
        singleProduct: response.data.singleProduct,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};

// delete

export const delete_product = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/rest-api/delete/${id}`);

    dispatch({
      type: "SINGLE_PRODUCT_DELETE_SUCCESS",
      payload: {
        deleteProduct: response.data.successMessage,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};

// edit
export const edit_product = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/rest-api/edit/${id}`);
    dispatch({
      type: "EDIT_PRODUCT_GET_SUCCESS",
      payload: {
        editProduct: response.data.editProduct,
      },
    });
    dispatch({
      type: "EDIT_REQUEST_SET",
    });
  } catch (error) {
    console.log(error.response);
  }
};

// update
export const update_product = (id, data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });
  try {
    const response = await axios.patch(`/rest-api/update/${id}`, data);
    dispatch({
      type: "PRODUCT_UPDATE_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_UPDATE_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};
