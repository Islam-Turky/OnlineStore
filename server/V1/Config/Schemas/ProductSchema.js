const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name:  {type: String, required: true, unique: true},
        description: {type: String, required: true},
        email: {type: String, required: true},
        price: {type: Number, required: true},
        images: [String],
        amount: {type: Number, required: true},
    },
    {timestamps: true, autoIndex: true},
)

const Product = model('Product', productSchema);
module.exports = Product;