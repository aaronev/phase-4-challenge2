const router = require('express').Router()
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

router.route('/:id')
  .delete((req, res) => {
  ! req.user
  ? res.redirect('/sign-up')
  : getReviewsTable.toDelete(req.params.id)
})

module.exports = router