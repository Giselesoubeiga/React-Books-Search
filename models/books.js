const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    authors: Array,
    description: {
        type: String,
        trim: true,
        required: "Description is Required"
    },
    image: {
        type: String,
        trim: true,
        required: "Image is Required"
    },
    link: {
        type: String,
        trim: true,
        required: "Link is Required"
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;