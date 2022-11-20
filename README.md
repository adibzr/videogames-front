# Individual Project - Henry Videogames

## deployed proyect
https://videogames-adib-raed.up.railway.app/

## Instruction to run local

Clone front (https://github.com/adibzr/videogames-front) and back (https://github.com/adibzr/videogames-back) repository
project split into front and back for deployment

install dependencies with command:
```install
npm install
```

For database install postgreSQL: https://www.postgresql.org/download/

Create account in https://rawg.io/apidocs to get api key

Create a file in videogames-back called '.env' in project root directory
and copy the following
```env
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
PORT=
API_KEY=
```
- in __DB_USER__ copy your posgreSQL username__
- in __DB_PASSWORD__ copy your posgreSQL password__
- in __DB_HOST__
- in __PORT__ assign a port (default 4000)__
- in __API_KEY__ copy rawg api key


Create a file called '.env' in videogames-front root directory
and copy the following
```env
REACT_APP_BASE_URL=
```
- __Assign a port__ (default 3000)


run front with command; run back with command:
```
npm start
```


## Project objective
Create an app to visualize available videogames from [rawg](https://rawg.io/apidocs) API and be able to

- Search for videogames
- Filter / Order
- Create videogame and store in database


### Endpoints used

- GET <https://api.rawg.io/api/games>
- GET <https://api.rawg.io/api/genres>
- GET <https://api.rawg.io/api/games/{id}>


#### Technologies used

- React
- Redux
- Express
- Sequelize - Postgres

## Frontend

- Search by name input.
- Videogame card shows:
  - Image
  - Name
  - Genre
- Filter by genre and created or from API.
- Order alphabetically or by rating. Ascending or descending .
- 15 games per page, next, prev button.
- Created videogames may be modified or deleted.


__Videogame detail__:

- Show image, name, genre
- Description
- Release date
- Rating
- Platforms

__Videogame creation__:

- controles form with:
  - Name  
  - Description
  - Release date
  - Rating
- Multiple genres may be selected
- Multiple platforms may be selected


## Data base

- Videogame model:
  - ID *
  - Name *
  - Description *
  - Release date
  - Rating
  - Platforms *
- Genre model:
  - ID
  - Nombre

*required

## Backend

- __GET /videogames__:
  - Get all videogames (id, name, image, genre).

- __GET /videogames?name="..."__:
  - Get videogame by name.

- __GET /videogame/{idVideogame}__:
  - Get videogame by id (id, name, image, release date, genres, description, platforms

- __POST /videogames__:
  - Creates videogame ans stores in db.
  
- __GET /genres__:
  - Get genres from API
