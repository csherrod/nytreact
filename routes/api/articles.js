const router = require('express').Router()
const articleController = require('../../controllers/articleController')

// Matches with "/api/articles"
router.route('/')
  .get(articleController.findAll)
  .post(articleController.create)

// Matches with "/api/articles/nyt/"
router.route('/nyt')
  .get(articleController.search)

// Matches with "/api/articles/nyt/query"
router.route('/nyt/:query')
  .get(articleController.search)

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove)

module.exports = router
