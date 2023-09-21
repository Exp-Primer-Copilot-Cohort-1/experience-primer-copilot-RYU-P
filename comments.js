// create web server for comment

const exxpress = require('express')
const router = exxpress.Router()
const commentController = require('../controllers/commentController')

//handle request
router.get('/comments', commentController.comment_index)
router.get('/comments/create', commentController.comment_create_get)
router.post('/comments/create', commentController.comment_create_post)
router.get('/comments/:id', commentController.comment_details)

module.exports = router
router.delete('/comments/:id', commentController.comment_delete)
router.get('/comments/edit/:id', commentController.comment_edit_get)
router.put('/comments/:id', commentController.comment_edit_put)
