const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://janyelle:<PASS>@cluster0.4dztqk9.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to Mongo");
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}
module.exports = main;
