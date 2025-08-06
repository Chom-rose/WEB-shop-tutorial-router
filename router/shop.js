const path = require("path");
const express = require("express");
const router = express.Router();

let products = [
    { id: 1, name: "ปากกา", price: 25, stock: 100 },
    { id: 2, name: "สมุดโน็ต", price: 40, stock: 80 },
    { id: 3, name: "ยางลบ", price: 10, stock: 200 },
    { id: 4, name: "ดินสอ", price: 14, stock: 250 },
];

router.get("/products", (req, res) => {
    res.json(products);
});

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
}); 

module.exports = {
    router,
    products
};