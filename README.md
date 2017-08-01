# Vinyl

A community for record enthusiasts to review their favorite albums.

## Getting Started

### Set Up Database
Use the following commands to set up and seed the PSQL database:
```
1. `$ npm run db:create`	: Create PostgreSQL database `vinyl`
1. `$ npm run db:schema` 	: Set ups the database tables
1. `$ npm run db:seed`		: Loads the datas for each table
```

### Set Up Server
Use the following commands to set up the server:
1. `$ npm install` 			: Installs all dependencies
1. `$ npm start`			: Starts the Server at http://localhost:3000
1. Sign Up and then Sign In!

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses Express file structure, and includes SQL files to set up the schema and import data.

### MVC

```
README.md           	# you are here
server.js           	# web server
package.json        	# npm standard
configurations/			# - folder is for configurations that applies throughout the codebase
authentication.js		# file that is configured		
database/				# - folder is for database connection and queries
database.js 			# file for connections and queries 
schema.sql 				# file that shows all the columns of each tables
seed.sql          		# file that seed the ablums, users, and reviews data
domain/ 				# - folder is for abstract functions 
public/ 				# - folder is static and used for image files, css, and vanilla js
views/              	# - folder renders get method pages layouts and information as ejs html template
```
