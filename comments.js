// create web server
const exxpress = require('express')
const router = exxpress.Router()
const commentController = require('../controllers/commentController')

// Create web server
// Path: /comments
router.get('/', commentController.index)
router.get('/:id', commentController.show)
router.post('/', commentController.create)
router.put('/:id', commentController.update)
router.delete('/:id', commentController.delete)

// Export
module.exports = router