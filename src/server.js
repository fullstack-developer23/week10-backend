const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/healthy", (req, res) => {
    res.status(200).json({ message: "API is health"});
});

app.listen(port, () =>{
  
    console.log(`App listening on port ${port}`);
})