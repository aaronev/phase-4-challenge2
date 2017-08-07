const router = require('express').Router()
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

router.get('/', (req, res, next) => {
  getAlbumsTable.all()
  .then( albums => {
    getUsersTable.all()
    .then( users => {
      getReviewsTable.byLatestThree()
      .then( reviews => {
        res.render('index', { albums, reviews, users })
      })
    })
  }).catch(next)
})

module.exports = router