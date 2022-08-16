const {
  add_product,
  get_products,
  get_product,
  delete_product,
  edit_product,
  update_product,
} = require("../controllers/ProductController");

const router = require("express").Router();
router.post("/add-product", add_product);
router.get("/get-products", get_products);
router.get("/single-view/:id", get_product);
router.delete("/delete/:id", delete_product);
router.get("/edit/:id", edit_product);
router.patch("/update/:id", update_product);

module.exports = router;
