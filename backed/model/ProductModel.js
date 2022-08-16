const { Schema, model } = require("mongoose");
const ProductSchema = new Schema(
    {
        productName: {type: String , unique: true  ,required : true},
        productDetails: {type: String , required : true},
        productSku: {type: String , required : true},
        productPrice: {type: Number , required : true},
        createdAt: {type: Date , require : true},
        updatedAt: {type: Date , require : true}
    }
)


module.exports = model("Product" , ProductSchema)