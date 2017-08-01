const passport = require('../../config/authentication')
const getAlbumsTable = require('../../domain/albums')
const getReviewsTable = require('../../domain/reviews')
const getUsersTable = require('../../domain/users')

const authenticates = {}
const deletes = {}
const adds = {}

authenticates.LocalStrategy = passport.authenticate('local', {
  successRedirect: '/sign-in',
  failureRedirect: '/sign-in',
  failureFlash: true
})

adds.newUser = (req, res, next) => {
  const {name, email, password} = req.body
  getUsersTable.byEmail(email)
  .then(foundEmail => {
    if (foundEmail) {
      req.flash('errorSignUp', 'Email already exist!')
      res.redirect('/sign-up')
    } else {
      getUsersTable.toAdd(name, email, password, '/img/no-dj.png')
      .then(addedUsers => { res.redirect('/sign-in') })
      .catch(next)
    }
  })
}

adds.newReview = (req, res, next) => {
  ! req.user
  ? res.redirect('/sign-up')
  : getReviewsTable.toAdd(
    req.user.id, 
    req.params.id, 
    req.body.review
    ).then( reviews => {
      res.redirect(`/albums/${req.params.id}`)
  }).catch(next)
} 

deletes.review = (req, res) => {
  ! req.user
  ? res.redirect('/sign-up')
  : getReviewsTable.toDelete(req.params.id)
}


module.exports = {adds, deletes, authenticates}