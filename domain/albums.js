const DBTable = require('../database/database')
const AlbumsTable = new DBTable('albums', ['title','artist'])

const all = () => 
  AlbumsTable.getAllRows()
  .then(albums => albums)
  .catch(error => {
    console.log("Query ERROR: =>", error)
    throw error
  })

const byID = (albumID) =>
  AlbumsTable.getRowsByColumn('id', albumID)
  .then(albums => albums)
  .catch(error => {
    console.log("Query ERROR: =>", error)
    throw error
  })

const toSearch = (searchQuery) =>
	AlbumsTable. searchRowsByColumn('title', searchQuery)
	.then(foundTitle => foundTitle)
  .catch(error => {
    console.log("Query ERROR: =>", error)
    throw error
  })

module.exports = {
  all,
  byID,
  toSearch
}