const mongoose = require("mongoose");

const { Schema } = mongoose;


const bookSchema = new Schema({
    title: {
      type: String,
      required: [true, "A title is required"],
    },
    author: {
      type: String,
      required: [true, "The author's name is required"],
    },
    publisher: {
      type: String,
      required: [true, "The publisher is required"],
    },
    genre: {
      type: String,
      required: [true, "The genre is required"],
    },
    pages: {
      type: Number,
      required: [true, "The pages are required"],

    },
    rating: {
        type: Number,
        required: [true, "The rating is required"],
      },
      synopsis: {
        type: String,
        required: [true, "The synopsis is required"],
      },
      image: {
        type: String,
        required: [true, "The image is required"],
      },
  });
  




const Book = mongoose.model('Book', bookSchema);


module.exports = Book;