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

const byID = userID => 
  UsersTable.getRowsByColumn('id', userID)
  .then(foundUser => foundUser[0])

const byEmail = email => 
  UsersTable.getRowsByColumn('email', email)
  .then(foundUser => foundUser[0])

const toAdd = (name, email, password, img) =>
  UsersTable.addRow([
    name, email, encrypt(password), img
  ])

module.exports = {
  all,
  byID,
  toAdd,
  byEmail,
  toVerifyPassword
}