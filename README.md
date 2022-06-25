# Node-js CRUD API No framework

### How to use:
1. Clone repository:
> git clone git@github.com:querta/nodejs-CRUD-api.git && cd nodejs-CRUD-api
2. Install dependencies 
> npm install
3. To start in regular mode:
> npm run start:prod
3.1 To start in dev mode (using nodemon):
> npm run start:dev
4. Open postman.
Default endpoint is http://localhost:4000/api/users but you can change port in .env


## Technical requirements

- Task is implemented on Typescript. Working on 16 LTS version of Node.js
- Using `nodemon`, `dotenv`, `cross-env`, `eslint`, `uuid` libraries.
- Prefer asynchronous API whenever possible

## Implementation details

1. Implemented endpoint `api/users`:
    - **GET** `api/users` is used to get all persons
        - Server is answering with `status code` **200** and all users records if any. Try to add user with POST if there is no users.
    - **GET** `api/users/${userId}` 
        - Server answers with `status code` **200** and and record with `id === userId` if it exists
        - Server answers with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with `status code` **404** and corresponding message if record with `id === userId` doesn't exist
    - **POST** `api/users` is used to create record about new user and store it in database
        - Server answers with `status code` **201** and newly created record
        - Server answers with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    - **PUT** `api/users/{userId}` is used to update existing user
        - Server answers with` status code` **200** and updated record
        - Server answers with` status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with` status code` **404** and corresponding message if record with `id === userId` doesn't exist
    - **DELETE** `api/users/${userId}` is used to delete existing user from database
        - Server answers with `status code` **204** if the record is found and deleted
        - Server answers with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
        - Server answers with `status code` **404** and corresponding message if record with `id === userId` doesn't exist
2. Users are stored in memory as `objects` that have following properties:
    - `id` — unique identifier (`string`, `uuid`) generated on server side
    - `name` — user's name (`string`, **required**)
    - `age` — user's age (`number`, **required**)
    - `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
3. Requests to non-existing endpoints (e.g. `some-non/existing/resource`) are handled (server answers with `status code` **404** and corresponding human-friendly message)
4. Errors on the server side that occur during the processing of a request are handled and processed correctly (server should answer with `status code` **500** and corresponding human-friendly message)
5. Value of `port` on which application is running is stored in `.env` file
6. There are 2 modes of running application (**development** and **production**):
    - The application is running in development mode using `nodemon` (there is a `npm` script `start:dev`)
    - The application is running in production mode (there is a `npm` script `start:prod` that starts the build process and then runs the bundled file)
