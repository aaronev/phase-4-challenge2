const DBTable = require('../database/database')
const bcrypt = require('bcrypt')
const UsersTable = new DBTable('users', ['name', 'email', 'password', 'image'])

function encrypt(plainText) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(plainText, salt)
}

const toVerifyPassword = (plainText, hashedText) =>
  bcrypt.compareSync(plainText, hashedText)
  
const all = () =>
 UsersTable.getAllRows()
  .then(users => users)

const byID = userID => 
 UsersTable.getRowsByColumn('id', userID)
  .then(users => users)

const byEmail = value => 
  UsersTable.getRowsByColumn('email', value)
  .then(users => users[0])

const toAdd = (name, email, password, img) =>
  UsersTable.addRow([
    name, email, encrypt(password), img
  ])
  .then(users =>  users[0])

module.exports = {
  all,
  byID,
  toAdd,
  byEmail,
  toVerifyPassword
}