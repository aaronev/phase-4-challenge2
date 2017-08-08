const DBTable = require('../database/database')
const AlbumsTable = new DBTable('albums', ['title','artist'])

const all = () => 
  AlbumsTable.getAllRows()
  .then(albums => albums)
  .catch(error => {
    console.log("ERROR: ", error)
    throw error
  })

const byID = (albumID) =>
  AlbumsTable.getRowsByColumn('id', albumID)
  .then(albums => albums)
  .catch(error => {
    console.log("ERROR: ", error)
    throw error
  })

const toSearch = (searchQuery) =>
	AlbumsTable. searchRowsByColumn(searchQuery, 'title')
	.then(foundTitle => foundTitle)
  .catch(error => {
    console.log("ERROR: ", error)
    throw error
  })

module.exports = {
  all,
  byID,
  toSearch
}