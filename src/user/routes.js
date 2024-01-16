const Router = require("express");

const userRouter = Router();

const {SignUpUser} = require("./controllers");

userRouter.post("/", SignUpUser);

module.exports = userRouter;