const User = require("./model");

const signUpUser = async (req, res) => {
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

const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.findAll();

        res.status(201).json({ message: "All Users list: ", allUsers: allUsers })
    }

    catch (error){
        res.status(500).json({ error: error, message: error.message });
    }
}

const loginUser = async (req, res) => {
    try{
        console.log("Hello ", req.user);
        res.status(201).json({ message: "login successful", user: req.user})
    }
    catch (error)
    {
        res.status(500).json({ error: error, message: error.message });
    }
}

module.exports = {
    signUpUser: signUpUser,
    getAllUsers: getAllUsers,
    loginUser: loginUser,
};