const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);


app.use((req,res)=>{
    res.status(404).send("Page not found");
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
});