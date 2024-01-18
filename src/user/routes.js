const Router = require("express");

const userRouter = Router();

const {signUpUser, getAllUsers} = require("./controllers");

userRouter.post("/", signUpUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;