const router = require('express').Router()
const getUsersTable = require('../../domain/users')

router.route('/')
  .get((req, res) => { 
    res.render('sign-up') 
  })
  .post((req, res, next) => {
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
  })

module.exports = router