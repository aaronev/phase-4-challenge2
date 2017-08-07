const router = require('express').Router()
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

router.get('/:id', (req, res, next) => {
    getAlbumsTable.byID(req.params.id)
    .then( albums => {
      console.log(albums[0], 'albums')
      console.log(albums, 'albums wtihtouth 0')
      ! albums[0]
      ? res.render('./errors/error', {error: albums[0]})
      : getUsersTable.all()
      .then( users => {
        getReviewsTable.byAlbumID(req.params.id)
        .then( reviews => {
          res.render('album-info', { albums, reviews, users })
        })
      })
    }).catch(next)
  })

router.post('/:id/reviews', (req, res, next) => {
  ! req.user
  ? res.redirect('/sign-up')
  : getReviewsTable.toAdd(
    req.user.id, 
    req.params.id, 
    req.body.review
    ).then( reviews => {
      res.redirect(`/albums/${req.params.id}`)
  }).catch(next)
})

module.exports = router