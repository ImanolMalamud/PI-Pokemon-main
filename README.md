# Tecnologías utilizadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

Para los estilos: CSS puro, CSS Modules y Styled Components.

# Getting Started

Tanto en la carpeta api como en client:

- **npm install**
- **npm start**

# Environment

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=pokemon (crear esta base de datos con postgres)
DB_PORT=puerto de base datos

Ej:
  DB_USER=postgres
  DB_PASSWORD=psw
  DB_HOST=localhost
  DB_NAME=pokemon
  DB_PORT=5432
```

**IMPORTANTE:** Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:**
Versiones utilizadas para cada tecnología:

- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

## Resumen de la app

He creado una app en la cual se pueden ver los distintos Pokemon provistos por la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

- Buscar pokemons
- Filtrarlos / Ordenarlos
- Crear nuevos pokemons

**NOTA**: Para las funcionalidades de filtrado y ordenamiento NO se han utilizado los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados, sino que la lógica necesaria se ha realizado en este proyecto.

### Únicos Endpoints/Flags que se han utilizado de la api (https://pokeapi.co/)

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/type>
