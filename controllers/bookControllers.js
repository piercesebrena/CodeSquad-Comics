
const booksData = require(`../data/data`);

const getAllBooks = async (request, response, next) => {
    try {
      await response.status(200).json({success: {message: "Found all books!" },data:booksData, statusCode:200}) 
    } catch (error) {
        response.status(400).json({error: {message: "Something went wrong getting all the books!" }, statusCode:400})   
    }

}
//DONE 
const getBook = async (request, response, next) => {
const {id} = request.params

const foundBook = booksData.find(book=> book.id === Number(id));
    try {
        await response.status(200).json({success: {message: "Found the book you are looking for!" },data:foundBook, statusCode:200}) 
      } catch (error) {
          response.status(400).json({error: {message: "Something went wrong retrieving a book!"}, statusCode:400})   
      }
}

 const createBook = async (request, response, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis } = request.body
    const newBook = new Book({title, author, publisher, genre, pages, rating, synopsis}) 
    try {
        await newBook.save()
        response.status(201).json({success: {message: "A new book is created" },data:newBook, statusCode:201}) 
      
    } catch (error) {
          response.status(400).json({error: {message: "Something went wrong creating a book!" }, statusCode:400})   
       }
 }

 const editBook = async (request, response, next) => {
    const {id} = request.params 
    const { title, author, publisher, genre, pages, rating, synopsis } = request.body
    try {
        await Book.findByIdAndUpdate(id, {
            $set: {
                title,
                author,
                publisher,
                genre,
                pages,
                rating,
                synopsis
                }
        },{new: true });

        response.status(201).json({success: {message: "Book is updated" }, statusCode:201}) 
      } catch (error) {
           response.status(400).json({error: {message: "Something went wrong while editing the book~" }, statusCode:400})   
      }
 }

 const deleteBook = async (request, response, next) => {
 const {id} = request.params 
    try {
        await Book.findByIdAndDelete(id)
        response.status(200).json({success: {message: "Book deleted successfully!" },statusCode:200}) 
      } catch (error) {
           response.status(400).json({error: {message: "Something went wrong while deleting the book!" }, statusCode:400})   
      }
 }








 
module.exports = {getAllBooks, getBook, createBook, editBook, deleteBook}
/*
const template = async (request, response, next) => {
    try {
        await response.status(200).json({success: {message: "" },data:booksData, statusCode:200}) 
      } catch (error) {
          response.status(400).json({error: {message: "" }, statusCode:400})   
      }
}
*/