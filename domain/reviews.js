const DBTable = require('../database/database')
const ReviewsTable = new DBTable('reviews', ['user_id','album_id','review'])

const all = () => 
  ReviewsTable.getAllRows()

const toAdd = (userID, albumID, review) => 
  ReviewsTable.addRow([userID, albumID, review])

const byAlbumID = (albumID) => 
  ReviewsTable.getRowsByColumn('album_id', albumID)

const byUserID = (userID) =>
  ReviewsTable.getRowsByColumn('user_id', userID)

const byLatestThree = () =>
  ReviewsTable.getRowsByLimit(3)

const toDelete = (reviewID) => 
  ReviewsTable.deleteByColumn('id', reviewID)

  module.exports = {
    all,
    byAlbumID,
    byUserID,
    byLatestThree,
    toAdd,
    toDelete
  }