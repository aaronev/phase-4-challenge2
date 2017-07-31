const passport = require('../../config/authentication')
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

const authenticates = {}
const deletes = {}
const adds = {}

authenticates.LocalStrategy = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/sign-in',
  failureFlash: true
})

adds.newUser = (req, res) => {
  const {name, email, password} = req.body
  getUsersTable.byEmail(email)
  .then(foundEmail => {
    if (foundEmail) {
      req.flash('errorSignUp', 'Email already exist!')
      res.redirect('/sign-up')
    } else {
      getUsersTable.toAdd(name, email, password, '/img/no-dj.png')
      .then(addedUsers => { res.redirect('/sign-in') })
    }
  })
}

adds.newReview = (req, res, next) => {
  ! req.user
  ? res.redirect('/sign-in')
  : getReviewsTable.toAdd(
    req.user.id, 
    req.params.id, 
    req.body.review
    ).then( reviews => {
      res.redirect(`/albums/${req.params.id}`)
  }).catch(next)
} 

deletes.review = (req, res, next) => {
  ! req.user
  ? res.redirect('/sign-in')
  : getReviewsTable.toDelete(req.params.id)
  .then( deletedReview => {
    if(!deletedReview) {
    res.redirect(`/users/${req.user.id}`)
    }
  }).catch(next)
}


module.exports = {adds, deletes, authenticates}