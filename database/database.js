const pgp = require('pg-promise')()
const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const db = pgp(connectionString)

module.exports = class DataBaseGenericTableFunctions {
  constructor(tableName, columnsForThePurposeOfAddingToTheTableAsAnArray) {
    this.table = tableName
    this.columns = columnsForThePurposeOfAddingToTheTableAsAnArray
  }

  generate_$1$2etc() {
    let colmns = []
    for (let i = 1; i <= this.columns.length; i++) {
      colmns.push('$'+ i)
    }
    return colmns.join()
  } 

  addRow(valuesAsAnArray) {
    return db.any(`
      INSERT INTO 
        ${this.table} 
        (${this.columns}) 
      VALUES 
        (${this.generate_$1$2etc()})
      RETURNING 
        *`, valuesAsAnArray
    )
  }
  
  deleteByColumn(column, value) {
    return db.none(`
      DELETE FROM 
        ${this.table} 
      WHERE 
        ${column} = $1`, value
    )
  }

  getAllRows() {
    return db.any(`
      SELECT 
        * 
      FROM 
        ${this.table}
      ORDER BY 
        timestamp
      DESC`
    )
  }

 getRowsByColumn(column, value) { 
  return db.any(`
    SELECT 
      * 
    FROM 
      ${this.table} 
    WHERE 
      ${column} = $1
    ORDER BY 
      timestamp
    DESC`, value
    )
  }

  getRowsByLimit(limit) {
    return db.any(`
      SELECT 
        * 
      FROM 
        ${this.table}
      ORDER BY 
        timestamp
      DESC
      LIMIT $1
      `, limit
    )
  }
}