const Router = require("express");

const userRouter = Router();

const {signUpUser, getAllUsers, loginUser} = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

userRouter.post("/", hashPass, signUpUser);
userRouter.post("/login", comparePass, loginUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;