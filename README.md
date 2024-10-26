<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Application to test technical skills in the handling of nest.js</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project setup
### Configure the docker compose file
You can modify the docker compose file to change the database connection parameters.
```yml
version: '3.8'

services:
  postgres:
    image: postgres:latest
    container_name: postgres
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: app@123456
    ports:
      - "5432:5432"
    networks:
      - backend
    volumes:
      - postgres-data:/var/lib/postgresql/data

networks:
  backend:

volumes:
  postgres-data:
```
After that you can run the following command to start the docker container with the PostgreSQL database.

```bash
$ docker compose up -d
```

### Set the environment variables
Set the following environment variables:
```env
DB_HOST="The host where the database is located"
DB_PORT="The database instance port"
DB_USER="The database instance user"
DB_PASS="The database instance password"
DB_NAME="The name of the database"
NODE_ENV="In which environment is the application running"
PORT="The port where the application will run."
```

You can also see an example of these environment variables in the .env.example file.

### Install dependencies

```bash
$ npm install
```


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
