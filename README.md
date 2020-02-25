## Getting Started

1. Fork and clone the repo, `cd` into the repo
2. Run command `npm install` at terminal to install all dependencies
3. Create a `.env` file a root directory
4. Insert the following in `.env` file to connect to MySQL remote database
```
ENV=development
TIMEOUT=5000
PORT=9711

DB_VERSION=5.7
DB_HOST=<db_hostname>
DB_USER=<db_username>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_name>
``` 
4. Run command `npm start` to start the app
5. You can use POSTMAN to test your APIs by going to http://localhost:9711

* POST: `/paths` to add new paths.

* GET: `/paths` to see the list of paths.

* DELETE: `/paths` to clear the paths that you added

* GET: `/paths/<id>/navigate` should return the navigated path

6. Refer to `Navigator.txt` file for more explanation

