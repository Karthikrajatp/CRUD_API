const express = require('express');
const router = express.Router();

const Product = require("../models/productModel");
const {getProducts,getProduct,createProducts, updateProducts, deleteProducts} = require("../controller/productController")

// add a product
router.post('/',createProducts);

// search for single product
router.get('/:id',getProduct);

// display all products
router.get('/',getProducts);

// update a product
router.put('/:id',updateProducts);

// delete a product
router.delete('/:id',deleteProducts);


module.exports = router