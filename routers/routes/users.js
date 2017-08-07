const router = require('express').Router()
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

router.get('/:id', (req, res, next) => {
  getAlbumsTable.all()
  .then( albums => {
    getUsersTable.byID(req.params.id)
    .then( users => {
      ! users[0]
      ? res.render('./errors/not-found')
      : getReviewsTable.byUserID(req.params.id)
      .then( reviews => {
        res.render('profile', {
          albums, reviews, users
        })
      })
    })
  }).catch(next)
})

module.exports = router