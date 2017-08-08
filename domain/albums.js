const DBTable = require('../database/database')
const AlbumsTable = new DBTable('albums', ['title','artist'])

const all = () => 
  AlbumsTable.getAllRows()

const byID = (albumID) =>
  AlbumsTable.getRowsByColumn('id', albumID)

const toSearch = (searchQuery) =>
	AlbumsTable.searchRowsByColumn('title', 'artist',searchQuery)

module.exports = {
  all,
  byID,
  toSearch
}