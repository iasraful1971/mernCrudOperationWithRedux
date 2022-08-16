const Product = require("../model/ProductModel");
// add product
module.exports.add_product = async (req, res) => {
  const { productName, productDetails, productSku, productPrice } = req.body;
  try {
    await Product.create({
      productName,
      productDetails,
      productSku,
      productPrice,
    });
    res.status(201).json({
      successMessage: "product added success",
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};

// get all products

module.exports.get_products = async (req, res) => {
  const { page } = req.query;

  const perPage = 2;
  const skipPage = parseInt(page - 1) * perPage;

  try {
    const productCounts = await Product.find({}).countDocuments();
    const getProducts = await Product.find({})
      .skip(skipPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).json({
      getProducts,
      perPage,
      productCounts,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};

// get single view

module.exports.get_product = async (req, res) => {
  const { id } = req.params;
  try {
    const singleProduct = await Product.findById(id);
    res.status(200).json({
      singleProduct,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};
// get single view

module.exports.delete_product = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      successMessage: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};

// edit

module.exports.edit_product = async (req, res) => {
  const { id } = req.params;
  try {
    const editProduct = await Product.findOne({ id });
    res.status(200).json({ editProduct });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "There was some issue",
      },
    });
  }
};

module.exports.update_product = async (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, productSku, productDetails } = req.body;

  const error = {};
  if (!productName) {
    error.productName = "provide a  name";
  }
  if (!productPrice) {
    error.productPrice = " Ensure a price";
  }
  if (!productSku) {
    error.productSku = "Add sku";
  }
  if (!productDetails) {
    error.productDetails = "Add details";
  }

  if (Object.keys(error).length == 0) {
    try {
      await Product.findByIdAndUpdate(id, {
        productName, productPrice, productSku, productDetails
      });
      res.status(200).json({ successMessage: "product update successful" });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  } else {
    res.status(400).json({ errorMessage: error });
  }
};
