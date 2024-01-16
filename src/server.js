require("dotenv").config();

const express = require("express");

const userRouter = require("./user/routes")

const port = process.env.PORT || 3000;

const User = require("./user/model");
// const controllers = require("./user/controllers");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.get("/healthy", (req, res) => {
    res.status(200).json({ message: "API is health"});
});

const syncTables = async () => {
    User.sync();
}

app.listen(port, () =>{
    syncTables();
    console.log(`App listening on port ${port}`);
})