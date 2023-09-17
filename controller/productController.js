const asyncHandler = require('express-async-handler')
const Product = require("../models/productModel")

const createProducts = asyncHandler(async(req,res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

const getProduct = asyncHandler(async(req,res)=>{
    try{
        const{id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

const getProducts = asyncHandler(async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

const updateProducts = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`)
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({updatedProduct})
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})
const deleteProducts = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`)
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

module.exports = {
    createProducts,
    getProduct,
    getProducts,
    updateProducts,
    deleteProducts

}