require("dotenv").config();

const cors = require("cors");

const express = require("express");

const userRouter = require("./user/routes")

const port = process.env.PORT || 5001;

const User = require("./user/model");
// const controllers = require("./user/controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/healthy", (req, res) => {
    res.status(200).json({ message: "API is health"});
});

const syncTables = async () => {
   await User.sync();
}

app.listen(port, () =>{
    syncTables();
    console.log(`App listening on port ${port}`);
})