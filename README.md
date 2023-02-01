## Summary

This SPA consumes the external API [pokeapi](https://pokeapi.co/)

### The only Endpoints/Flags allowed to use in this project are:

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/type>

With the data recieved, I've created my own API, which is consumed by the client to render the pokemons' information. To access that information, there is a paginated, which works also with a combined sorting and filtering, and it can be used a dynamic searchbar as well.


**NOTE**: The pokeapi has its own endpoints with filtered and sorted pokemons. In this project there wasn't allowed to use those ones. That work was done manually.


# Technologies Used

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

Styles: CSS, CSS Modules and Styled Components.

# Getting Started

For the project to consume the pokeapi, you should generate your own API_KEY: https://pokeapi.co/api/v2/pokemon
Otherwise, it will just use a json file with some info that I extracted from there ;)

In the terminal, go to the api directory and run the following commands to build and start it:

- **npm install**
- **npm start**

Do the exact same thing with the client.

# Environment

In the `api` directory, create a file called: `.env` with the following variables:

```env
DB_USER=yourPostgresUsername
DB_PASSWORD=yourPostgresPassword
DB_HOST=localhost
DB_NAME=pokemon (CREATE DATABASE pokemon in postgres)
DB_PORT=yourDatabasePort
DB_DEPLOY=link to deployed database (optional)

Ej:
  DB_USER=postgres
  DB_PASSWORD=psw
  DB_HOST=localhost
  DB_NAME=pokemon
  DB_PORT=5432
  DB_DEPLOY=postgresql://postgres:MrJv16x0b2ZuEaaxc3NB@containers-us-west-153.railway.app:7598/railway
```

**IMPORTANTE:** Working with these versions:

- **Node**: >12.18.3
- **NPM**: >6.14.16
- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

To verify the installed versions:

```bash
node -v
npm -v
```
