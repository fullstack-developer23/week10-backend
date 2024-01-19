const bcrypt = require("bcrypt");
const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT);
const hashPass = async (req, res, next) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("hashPassword: ", hashPassword);
        req.body.password = hashPassword;
        next();
    }
    catch (error)
    {
        res.status(500).json({ message: error });
    }
}

const comparePass = async (req, res, next) => {
    try{
        const user = await User.findOne({
            where: {username: req.body.username},
        })

        const passwordCheck = await bcrypt.compare
        (req.body.password, user.password);
        // console.log(passwordCheck);
        if(!passwordCheck)
        {
            res.status(404).json({ message: "passwords do not match" });
            return
        }
        req.user = user;
        next();
    }

    catch (error)
    {
        res.status(500).json({ message: error.message, error:error });
    }

   
}

module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
}