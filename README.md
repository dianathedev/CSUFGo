## CSUFGo

<p>Web application used students/staff/faculty to advertise campus wide events. </p>

The following instructions are for a Mac(iOS).
## Setup

* Install Node.js
https://nodejs.org/en/
* Install MongoDB
https://www.mongodb.com

Be sure to run in the project root to install dependencies:

	$ npm install

### Running

MongoDB

	$ mongod -dbpath /Users/<user>/Databases/MongoDB/

MongoDB Client

	$ mongo

See http://docs.mongodb.org/manual/core/crud-introduction/ for queries, etc.

Express

	$ npm start

You should be able to run and view http://localhost:3000/#/home

### To Do

Implement the search functionality
