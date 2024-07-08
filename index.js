const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.get("/somepath", (req, res) => {
    console.log("Some path is hitted");
    res.status(200).json({ hello: "world from /somepath" });
});
app.get("*", (req, res) => {
    console.log("Some routes get hit");
    res.status(200).json({ hello: "world from *" });
});
app.listen(port, () => {
    console.log("listening on port 3000");
});
