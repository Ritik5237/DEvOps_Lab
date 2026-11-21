require('dotenv').config();

console.log("Application Started");

if (process.env.APP_USERNAME && process.env.APP_PASSWORD) {
    console.log("Application credentials loaded successfully");
} else {
    console.log("Application credentials are missing");
}
