const User = require("./model");

const SignUpUser = async (req, res) => {
    console.log(req.body);

    try{

        const result = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        res.status(201).json({ message: "User signed up successfully.", result: result })
    }

    catch (error){
        res.status(500).json({ error: error, message: error.message });
    }
}

module.exports = {
    SignUpUser: SignUpUser,
};