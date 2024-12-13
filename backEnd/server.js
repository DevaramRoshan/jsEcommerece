const express = require("express");
const { connectMongoDb } = require("./dbConnection");
const cors = require("cors");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const categoryRouter = require("./routes/category");
const itemRouter = require("./routes/item");
const app = express();
const PORT = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/ECOMMERCE").then(() => console.log("mongodb connected "));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/category", categoryRouter);
app.use("/item", itemRouter);


app.listen(PORT, () => console.log(`server is running live on port:${PORT}`));