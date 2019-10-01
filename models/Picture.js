const mongoose = require("mongoose");

const Picture = mongoose.model("Picture", {
    path: String,
    title: String
})

module.exports = Picture;