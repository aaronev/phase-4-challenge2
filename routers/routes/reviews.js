const router = require('express').Router()
const getReviewsTable = require('../../domain/reviews')

router.delete('/:id', (req, res) => {
  ! req.user
  ? res.redirect('/sign-up')
  : getReviewsTable.toDelete(req.params.id)
})

module.exports = router