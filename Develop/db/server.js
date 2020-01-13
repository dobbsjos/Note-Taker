const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));

// API Routes
module.exports = function (app) {

    app.get("/api/index", function (req, res) {
        res.json("../public/assets/js/index.js");
    });

    app.get("/api/index", function (req, res) {
        res.json("../public/assets/js/index.js");
    });


};
// HTML Routes
module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);

    });
};