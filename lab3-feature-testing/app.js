const express = require("express");
const app = express();

const WELCOME_FEATURE =
    process.env.WELCOME_FEATURE === "true";

app.get("/", (req, res) => {
    res.send("Feature Flag Testing Application");
});

app.get("/feature", (req, res) => {
    if (WELCOME_FEATURE) {
        res.send("Welcome Feature is ENABLED!");
    } else {
        res.send("Welcome Feature is DISABLED!");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
