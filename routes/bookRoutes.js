const express = require ("express");
const { getAllBooks, getBook, createBook, editBook, deleteBook } = require("../controllers/bookControllers");
const router = express.Router()


router.get("/",getAllBooks);
router.get("/:id",getBook);
router.post("/create/new",createBook);
router.put("/edit/:id",editBook);
router.delete("/delete/:id",deleteBook);

module.exports = router


/*
router.get("/:id",(request,response,next) => {
    // response.send ("This route points to the book data page")
    response.status(200).json({success:{message:"This will send all of the books details data, or each book by their ID"}})
});


router.post("/create/new",(request,response,next) => {
    // response.send ("This route points to the Create Book page")
    response.status(200).json({success:{message:"This will send all of the data that will have the ability to create new books"}})
});


router.put("/edit/:id",(request,response,next) => {
    // response.send ("This route points to the edit page")
    response.status(200).json({success:{message:" This will send all of the update comic book form page data to modify a book by their ID"}})
});


router.delete("/delete/:id",(request,response,next) => {
    // response.send ("This route points to the delete page")
    response.status(200).json({success:{message:" This will send all of the data that will have the ability to delete a book by their ID"}})
});

*/ 



