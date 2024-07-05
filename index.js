const express = require("express");
const app = express();
const port = 3000;
app.get("*", (req, res) => {
    console.log("Some routes get hit");
    res.status(200).json({ hello: "world" });
});
app.listen(port, () => {
    console.log("listening on port 3000");
});
