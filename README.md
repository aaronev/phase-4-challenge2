# Vinyl

A community for record enthusiasts to review their favorite albums.

## Getting Started

### Set Up Database
Use the following commands to set up and seed the PSQL database:
```
1. `$ npm run db:create`	: Create PostgreSQL database `vinyl`
2. `$ npm run db:schema` 	: Set ups the database tables
3. `$ npm run db:seed`		: Loads the datas for each table
```

### Set Up Server
Use the following commands to set up the server:
```
1. `$ npm install`	: Installs all dependencies
2. `$ npm start`	: Starts the server at http://localhost:3000
```

Once server is running sign up and the sign in.

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses Express file structure, and includes SQL files to set up the schema and import data.

### MVC

```
README.md 	: you are here
package.json 	: npm standard
server.js 	: web server
configurations 	: folder is for configurations that applies throughout the codebase
authentication.js 	: file within configuration that is configured
database 	: folder is for database connection and queries
database.js 	: file within database for connections and queries 
schema.sql 	: file within database that shows all the columns of each tables
seed.sql 	: file within database that seed the ablums, users, and reviews data
domain 	: folder is for abstract functions 
public 	: static and used for image files, css, and vanilla js
views 	: renders get method pages layouts and information as ejs html template
```
