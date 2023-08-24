<p align="center">
  <a href="#" target="blank"><img src="public/img/mesfesta.jpeg" width="200" alt="Mes Festa Logo" /></a>
</p>


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

# Initial configuration
1. Cloning the project
2. Install dependencies ```yarn install```
3. Copy the file ```.env.template``` and rename it to ```.env```
4. Update the environment values
5. Start the database ```docker-compose up -d```
6. Launch the app in dev mode ```yarn start:dev```
