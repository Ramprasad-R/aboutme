const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendfile("index1.html");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started and running on port 5000");
});