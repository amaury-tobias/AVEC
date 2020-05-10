# Egresados

> Nuxt, Koa, Docker

## get started

- create `.env` file
  - This repository include `.env.sample` file

```bash
$ cp .env.sample .env
# customize your .env file
```

- starting server

```bash
$ docker-compose up -d
```

or, if you want to launch nuxt server on host machine

```bash
$ docker-compose up -d backend
$ yarn && yarn dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# LICENSE

[MIT](LICENSE)
