const router = require('express').Router()

router.use('/', require('./routes/home'))
router.use('/albums', require('./routes/albums'))
router.use('/users', require('./routes/users'))
router.use('/reviews', require('./routes/reviews'))
router.use('/sign-up', require('./routes/sign-up'))
router.use('/sign-in', require('./routes/sign-in'))

router.get('/sign-out', (req, res) => { 
  req.logout()
  res.redirect('/') 
})

module.exports = router