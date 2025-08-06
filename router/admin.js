const path = require("path");

const express = require('express');

const router = express.Router();

const products = require('./shop').products;

router.get("/add-product", (req, res) => {
    console.log('Add Product Page');
    res.sendFile(path.join(__dirname, "../" , "views" , "add-product.html"))
});

router.post('/product', (req, res) => {
    const { name, price, stock } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        stock: parseInt(stock)
    };

    products.push(newProduct);
    console.log("เพิ่มสินค้าใหม่:", newProduct);

    res.redirect('/');
});

module.exports = router;