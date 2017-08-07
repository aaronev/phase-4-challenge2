const DBTable = require('../database/database')
const AlbumsTable = new DBTable('albums', ['title','artist'])

const all = () => 
  AlbumsTable.getAllRows()
  .then(albums => albums)

const byID = (albumID) =>
  AlbumsTable.getRowsByColumn('id', albumID)
  .then(albums => albums)

const toSearch = (searchQuery) =>
	AlbumsTable. searchRowsByColumn(searchQuery, 'title')
	.then(foundTitle => foundTitle)

module.exports = {
  all,
  byID,
  toSearch
}