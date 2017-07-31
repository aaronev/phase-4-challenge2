const router = require('express').Router()
const renders = require('./utilities/renders')
const { authenticates, adds, deletes } = require('./utilities/auth')

router.get('/', renders.homePage)
router.get('/users/:id', renders.usersPage)

router.route('/albums/:id')
  .get(renders.albumsPage)
  .post(adds.newReview)

router.route('/reviews/:id')
  .delete(deletes.review)

router.route('/sign-up')
  .get(renders.signUpPage)
  .post(adds.newUser)

router.route('/sign-in')
  .get(renders.signInPage)
  .post(authenticate.LocalStrategy)

module.exports = router