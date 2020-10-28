const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route("/:id")
  .delete(booksController.remove);

router
  .route("/searchbook/:search")
  .get(booksController.getSearchBook)

module.exports = router;
