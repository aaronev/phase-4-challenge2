const router = require('express').Router()
const getReviewsTable = require('../../domain/reviews')

router.delete('/:id', (req, res, next) => {
  ! req.user
  ? res.redirect('/authenticate/sign-up')
  : getReviewsTable.toDelete(req.params.id)
    .catch(next)
})

module.exports = router