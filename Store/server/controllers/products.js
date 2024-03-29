const Product = require('../models/products')

const getAllProductsStatic = async(req,res,next) => {
    const products = await Product.find({featured: true})
    res.status(200).json(products)
}

const getAllProducts = async(req,res,next) => {
    const { featured, company, name } = req.query;
    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company) {
        queryObject.company = company 
    }

    if(name) {
        queryObject.name = name
    }

    const products = await Product.find(queryObject)
    res.status(200).json(products)
} 

module.exports = { getAllProductsStatic, getAllProducts}