const DBTable = require('../database/database')
const ReviewsTable = new DBTable('reviews', ['user_id','album_id','review'])

const all = () => 
  ReviewsTable.getAllRows()
  .then(reviews => reviews)

const toAdd = (userID, albumID, review) => 
  ReviewsTable.addRow([userID, albumID, review])
  .then(reviews => reviews[0])

const byAlbumID = (albumID) => 
  ReviewsTable.getRowsByColumn('album_id', albumID)
  .then(reviews => reviews)

const byUserID = (userID) =>
  ReviewsTable.getRowsByColumn('user_id', userID)
  .then(reviews => reviews)

const byLatestThree = () =>
  ReviewsTable.getRowsByLimit(3)
  .then(reviews => reviews)

const toDelete = (reviewID) => 
  ReviewsTable.deleteByColumn('id', reviewID)
  .then(reviews => reviews)

  module.exports = {
    all,
    byAlbumID,
    byUserID,
    byLatestThree,
    toAdd,
    toDelete
  }