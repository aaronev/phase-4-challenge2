const router = require('express').Router()
const getAlbumsTable = require('../../domain/albums')

router.route('/')
  .get((req, res) => {
  res.render('search', {foundQueries: null})
})
  .post((req, res) => {
    const {searchQueries} = req.body
    getAlbumsTable.toSearch(searchQueries)
    .then(foundQueries => {
      res.render('search', {foundQueries})
    })
  })

module.exports = router