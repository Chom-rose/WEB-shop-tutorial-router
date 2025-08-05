const express = require("express");

const app = express();

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use("/admin",adminRouter);
app.use(shopRouter);

app.use( (req ,res) => {
    console.log("Page not found");
    res.status(404).send("<h1>Page not found</h1>")
});


app.listen(3000);